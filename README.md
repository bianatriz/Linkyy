# Linky

Linky é um encurtador de URLs desenvolvido com **Node.js** e **MongoDB**.

https://github.com/user-attachments/assets/81386ed0-33f5-4298-971f-e94b93159fad

## Funcionalidades

O projeto, a principio, roda localmente, na porta 5000, tornando URLs longas em versões menores.

Ao receber um link como `https://youtu.be/dQw4w9WgXcQ?si=ryT1TuNHcrMUOev3`, ele o associa a um código, por exemplo, `JUsSPHS5q`. O resultado é uma URL fácil de compartilhar, como `http://localhost:5000/JUsSPHS5q`, que, quando acessada, redireciona o usuário para o link original.

O linky também mostra quantos acessos foram feitos à URL encurtada.

---

## Como Rodar o Projeto

1. Clonar o Repositório
```sh
git clone https://github.com/bianatriz/linkyy.git
```

2. Instale as dependências:
   ```sh
   npm install 
   ```
3. Coloque sua URL do MongoDB em .env:
   ```sh
   MONGO_URI=URL_DO_BANCO_MONGO_AQUI
   ```
   
4. Inicie o servidor:
   ```sh
   nodemon server.js
   ```
5. Abra a porta local:
   Digite `http://localhost:5000/` no navegador para abrir o programa que está sendo executado localmente.
   

---

## Considerações Finais

- Certifique-se de ter o **MongoDB** está ativo e funcionando para rodar o projeto.
- Desenvolvi esse projeto mais para aprender como usar o NodeJS e Mongo. Idealmente, para tornar um encurtador mais funcional, o projeto estaria no ar e teria algumas alterações, mas para uma versão de estudos, o resultado atual é satisfatório :)
- Essa aplicação foi inspirada em um projeto que você pode encontrar [aqui](https://youtu.be/SLpUKAGnm-g?si=wk5-AXFINdnrtyEa).
---

Desenvolvido por [Ana B](https://github.com/bianatriz) 🚀


