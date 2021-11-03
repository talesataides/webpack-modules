# webpack modules

Este projeto de exemplo tem como objetivo ilustrar o post que pode ser
encontrado no [Medium].

### Tabela de conteúdos

* [Features](#features)
* [Como usar](#como-usar)
  * [Pré-requisitos](#pré-requisitos)
  * [Baixando o projeto](#baixando-o-projeto)
  * [Fazendo bundle com webpack](#fazendo-o-bundle-com-webpack)
  * [Usando a calculadora](#calculando-dois-números-via-linha-de-comando)
* [Tecnologias](#tecnologias)

### Features

- Somar dois números fornecidos via linha de comando
- Demonstrar quanto é simples usar webpack 🥳 🥳

### Como usar

#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [Npx](https://www.npmjs.com/package/npx).

#### Baixando o projeto

```bash
# Em uma pasta de preferência, clone este projeto

$ git clone https://github.com/talesataides/webpack-modules.git

# Acesse a pasta 

$ cd webpack-modules
```

#### Fazendo o bundle com webpack

Se você quiser ver a mágica do webpack:

```bash
# Pode usar o script bundle:

$ npm run bundle

# Que executará o seguinte comando:

$ npx webpack --config webpack.config.js
```

Ao executar na linha de comando um dos comandos acima, uma pasta dist será criada na raiz do projeto com um arquivo `main.js` com o código transpilado pelo webpack, como: 

![Imagem com o código após bundle webpack][example]

#### Calculando dois números via linha de comando

Se você quiser testar o uso da calculadora de exemplo:

```bash
$ node index.js [argumentoA] [argumentoB]

# e.g.: $ node index.js 1 2
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/en/)


[Medium]: http://www.reddit.com
[example]: ./screenshots/example.png