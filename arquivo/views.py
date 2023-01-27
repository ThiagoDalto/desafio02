from rest_framework.generics import ListCreateAPIView
from django.shortcuts import get_object_or_404
from django.db.models import Sum
from rest_framework.views import Request, Response, status
from .serializers import ArquivoSerializer
from .models import Arquivo
from datetime import datetime, time, date
import ipdb
import sys
import json


class ArquivoView(ListCreateAPIView):
    serializer_class = ArquivoSerializer

    def create(self, request, *args, **kwargs):
        file = request.FILES["file"]

        file_content = file.read()
        linhas = file_content.decode().splitlines()
        arquivos = []

        for linha in linhas:
            tipo = linha[0]
            data = linha[1:9]
            valor = float(int(linha[9:19]) / 100)
            if tipo == '2' or tipo == '3' or tipo == '9':
                valor = valor * -1
            
            cpf = linha[19:30]
            cartao = linha[30:42]
            hora = time(int(linha[42:48][0:2]), int(linha[42:48][2:4]), int(linha[42:48][4:6]))
           
            dono_loja = linha[48:62].strip()
            nome_loja = linha[62:80].strip()

            dict_cnab = {}
            dict_cnab["tipo"] = tipo
            dict_cnab["data"] = data
            dict_cnab["valor"] = valor
            dict_cnab["cpf"] = cpf
            dict_cnab["cartao"] = cartao
            dict_cnab["hora"] = hora
            dict_cnab["dono_loja"] = dono_loja
            dict_cnab["nome_loja"] = nome_loja

            arquivos.append(
                Arquivo(
                    tipo=tipo,
                    data=data,
                    valor=valor,
                    cpf=cpf,
                    cartao=cartao,
                    hora=hora,
                    dono_loja=dono_loja,
                    nome_loja=nome_loja
                )
            )
            
        Arquivo.objects.bulk_create(arquivos)
        super().create(request, *args, **kwargs)
        list_nome_loja = Arquivo.objects.exclude(nome_loja=None).values('nome_loja', 'tipo', 'valor', 'hora').order_by('nome_loja')
        # ipdb.set_trace()
        list_nome_loja
        if list_nome_loja[0]:
            return Response(list_nome_loja, status.HTTP_201_CREATED)
        
    def get_queryset(self):
        list_nome_loja = Arquivo.objects.values('nome_loja').annotate(saldo=Sum("valor")).order_by('nome_loja')

        return list_nome_loja 
