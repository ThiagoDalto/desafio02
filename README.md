# 🧠 Desafio02

Desafio Python da segunda semana do sexto módulo da Kenzie Academy.
O intuito deste teste é avaliar seus conhecimentos técnicos com o back-end, para ser mais específico em Python. O teste consiste em parsear arquivo de texto(CNAB) e salvar suas informações(transações financeiras) em uma base de dados a critério do candidato. 
Foi usado neste projeto: Django, Django Rest Framework e Vite-react

## 🚀 Começando

Explicando o raciocínio:
### Front-end:
1. O componente é importado junto com as dependências React, useState, useEffect e useForm
2. São criadas duas variáveis de estado: selectedFile, inicializada com null e responses, inicializada com um array vazio.
3. A função handleFileChange é criada para atualizar a variável de estado selectedFile com o arquivo selecionado.
4. A função handleUpload é criada para fazer upload do arquivo selecionado para um servidor usando a API fetch. O corpo da requisição é criado como um objeto FormData e é anexado o arquivo selecionado.
5. Após o upload, a resposta do servidor é lidada como json e a variável de estado responses é atualizada com a resposta.
6. A função removeDuplicated é criada para filtrar as respostas duplicadas baseadas nas propriedades valor e hora.
7. O componente renderiza um formulário para selecionar e fazer upload de um arquivo, e um componente Responses que exibe as respostas.
9. O componente é exportado como o componente principal da aplicação.
    #### Components:
    È aplicado em todos os components, portanto detalharei somente um.
1. Importe o hook useState do React para poder criar o estado que armazenará as respostas da loja "BAR DO JOÃO".
2. Crie uma função chamada ResponseBJ que recebe uma propriedade chamada responses.
3. Dentro da função, crie uma variável chamada barJoaoResponses que filtra as respostas onde o nome da loja é "BAR DO JOÃO".
4. Utilize a sintaxe JSX para criar o elemento JSX que será retornado pela função. Dentro deste elemento, verifique se o tamanho de barJoaoResponses é maior que zero. Se sim, mapeie as respostas e crie elementos JSX para cada uma delas. Se não, retorne null.
5. Dentro do elemento JSX, exiba as informações relevantes, como nome da loja, tipo, valor e hora. Utilize a propriedade key para garantir que cada elemento tem uma chave única.
6. Por fim, exporte a função ResponseBJ como padrão.

### Back-end:
1. Importar os módulos necessários, como rest_framework.generics, django.shortcuts, django.db.models, rest_framework.views e os serializers e models do projeto.
2. Criar a classe ArquivoView, herdando de ListCreateAPIView e definindo o serializer_class como ArquivoSerializer.
3. Na função create, obter o arquivo enviado na requisição (request.FILES["file"]) e ler seu conteúdo.
4. Dividir o conteúdo do arquivo em linhas e iterar sobre cada uma delas, tratando as informações conforme necessário (por exemplo, convertendo valores para float e horas para time).
5. Armazenar as informações tratadas em um dicionário (dict_cnab) e adicioná-lo a uma lista de arquivos (arquivos).
6. Utilizar o método bulk_create do modelo Arquivo para salvar todos os arquivos na lista de uma só vez.
7. Chamar a função create da classe pai (super().create(request, *args, **kwargs)) para realizar a criação dos arquivos.
8. Recuperar a lista de nomes de lojas ordenadas, excluindo aquelas que não possuem nome (Arquivo.objects.exclude(nome_loja=None).values('nome_loja', 'tipo', 'valor', 'hora').order_by('nome_loja')).
9. Retornar a lista como resposta, utilizando o status HTTP_201_CREATED.
10. Criar a função get_queryset para retornar a lista de nomes de lojas ordenadas.
11. 






### 📋 Pré-requisitos

Foi usado o Vite para criação deste Projeto.
No guia no site https://vitejs.dev/guide/, é informado que Vite requer Node.js V14.18+, 16+

```
Dar exemplos
```

### 🔧 Instalação
# Backend:

1. Crie seu ambiente virtual:
```bash
python -m venv venv
```

2. Ative seu venv:
```bash
# linux:
source venv/bin/activate

# windows:
.\venv\Scripts\activate
```
3. Para instalar as dependências do projeto:
```bash
pip install -r requirements.txt

```
4. Criação do diretório **migrations**:
```bash
python manage.py makemigrations

```
5. Para persistir as alterações:
```bash
python manage.py migrate

```
6. Para rodar o servidor:
```bash
python manage.py runserver
```



# FrontEnd:
Com NPM:
    npm create vite@latest
Com Yarn:
    yarn create vite
Com PNPM:
    pnpm create vite
    
E o seguintes comando abaixo no **diretório do projeto**:

```bash
    yarn

```

Para Rodar a aplicação:
```bash
    yarn dev

```

## 🛣️ Rotas
O arquivo cnab.txt é enviado neste endereço:
```bash
localhost:8000/api/uploadfile/
```
e retornará: 
```bash
[
	{
		"nome_loja": "BAR DO JOÃO",
		"tipo": "3",
		"valor": -142.0,
		"hora": "15:34:53"
	},
	{
		"nome_loja": "BAR DO JOÃO",
		"tipo": "2",
		"valor": -112.0,
		"hora": "23:42:34"
	},
	{
		"nome_loja": "BAR DO JOÃO",
		"tipo": "1",
		"valor": 152.0,
		"hora": "23:30:00"
	},
	{
		"nome_loja": "LOJA DO Ó - FILIAL",
		"tipo": "4",
		"valor": 152.32,
		"hora": "10:00:00"
	},
	{
		"nome_loja": "LOJA DO Ó - MATRIZ",
		"tipo": "5",
		"valor": 132.0,
		"hora": "14:56:07"
	},
	{
		"nome_loja": "LOJA DO Ó - MATRIZ",
		"tipo": "1",
		"valor": 200.0,
		"hora": "09:00:02"
	},
	{
		"nome_loja": "LOJA DO Ó - MATRIZ",
		"tipo": "9",
		"valor": -102.0,
		"hora": "00:00:00"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "3",
		"valor": -122.0,
		"hora": "17:27:12"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "2",
		"valor": -107.0,
		"hora": "12:33:33"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "2",
		"valor": -502.0,
		"hora": "23:12:33"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "5",
		"valor": 802.0,
		"hora": "14:56:07"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "8",
		"valor": 102.03,
		"hora": "12:32:22"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "4",
		"valor": 506.17,
		"hora": "10:00:00"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "8",
		"valor": 2.0,
		"hora": "12:32:22"
	},
	{
		"nome_loja": "MERCADO DA AVENIDA",
		"tipo": "3",
		"valor": -192.0,
		"hora": "17:27:12"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "3",
		"valor": -602.0,
		"hora": "17:27:12"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "2",
		"valor": -102.0,
		"hora": "23:12:33"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "3",
		"valor": -6102.0,
		"hora": "17:27:12"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "3",
		"valor": -103.0,
		"hora": "17:27:12"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "2",
		"valor": -109.0,
		"hora": "12:33:33"
	},
	{
		"nome_loja": "MERCEARIA 3 IRMÃOS",
		"tipo": "2",
		"valor": -5.0,
		"hora": "14:18:08"
	}
]
```

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Django](https://www.djangoproject.com/) - O framework backend usado
* [Vite](https://vitejs.dev/) - O framework Frontend usado


