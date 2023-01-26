from django.db import models


class Arquivo(models.Model):
    tipo = models.CharField(max_length=1, null=True,)
    data = models.CharField(max_length=9, null=True,)
    valor = models.DecimalField(max_digits=10, decimal_places=2, null=True,)
    cpf = models.CharField(max_length=11, null=True,)
    cartao = models.CharField(max_length=12, null=True,)
    hora = models.TimeField(null=True,)
    dono_loja = models.CharField(max_length=14, null=True,)
    nome_loja = models.CharField(max_length=19, null=True,)
