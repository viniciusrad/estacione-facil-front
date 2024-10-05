# 1. Usando uma imagem base do Node.js
FROM node:18-alpine

# 2. Definindo o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiando o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# 4. Instalando as dependências da aplicação
RUN npm install --silent

# 5. Copiando todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# 6. Expondo a porta que o React usará (geralmente a porta 3000)
EXPOSE 3000

# 7. Executando o comando para rodar a aplicação
CMD ["npm", "start"]
