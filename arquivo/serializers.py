from rest_framework import serializers

from .models import Arquivo


class ArquivoSerializer(serializers.Serializer):
    tipo = serializers.CharField(
        required=False,
    )
    data = serializers.CharField(
        required=False,
    )
    valor = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
        required=False,
    )
    cpf = serializers.CharField(
        required=False,
    )
    cartao = serializers.CharField(
        required=False,
    )
    hora = serializers.TimeField(
        required=False,
    )
    dono_loja = serializers.CharField(
        required=False,
    )
    nome_loja = serializers.CharField(
        required=False,
    )

    def create(self, validated_data: dict) -> Arquivo:
        return Arquivo.objects.create(**validated_data)
