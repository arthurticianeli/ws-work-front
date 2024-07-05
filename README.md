# Instruções para Iniciar o Projeto Front

Este guia passo a passo irá ajudá-lo a configurar e iniciar o projeto `front` em seu ambiente de desenvolvimento.

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem o seguinte instalado em sua máquina:

- Docker e Docker Compose
- Node.js (recomendamos a utilização do NVM para gerenciar múltiplas versões do Node.js)

## Passo 1: Clone o Repositório

Clone o repositório do projeto para sua máquina local usando o seguinte comando no terminal:

-- git clone https://github.com/arthurticianeli/ws-work-front.git

Substitua <URL_DO_REPOSITÓRIO> pela URL do repositório do projeto.

## Passo 2: Navegue até o Diretório do Projeto

Mude para o diretório do projeto usando:

-- cd front

## Passo 3: Instale as Dependências

No diretório do projeto, execute o seguinte comando para instalar as dependências do Node.js listadas no package.json:

-- npm install

## Passo 4: Inicialize os Serviços com Docker Compose

Para iniciar o serviço front junto com as configurações necessárias (como a porta e variáveis de ambiente), use o Docker Compose:

-- docker-compose up -d

Este comando irá baixar a imagem arthurticianeli/ws-work-front:latest e iniciar um container para o serviço front, tornando-o acessível através da porta 3000 do seu host.

## Passo 5: Acesse a Aplicação

Após os serviços estarem rodando, você pode acessar o frontend da aplicação navegando para http://localhost:3000 em seu navegador.

## Passo 6: Desenvolvimento Local

Para desenvolvimento local e para ver as mudanças em tempo real, você pode iniciar o servidor de desenvolvimento do React com:

-- npm start

Isso irá iniciar o servidor de desenvolvimento e abrir a aplicação no seu navegador padrão. Qualquer mudança no código fonte será automaticamente recarregada na página.

## Passo 7: Parar os Serviços

Para parar e remover os containers criados pelo Docker Compose, use o seguinte comando:

-- docker-compose down

## Dependências

### @emotion/react e @emotion/styled

- **Uso**: Estilização de componentes React com CSS-in-JS.
- **Justificativa**: Permite a criação de estilos dinâmicos baseados em props, facilitando a manutenção e a reutilização de componentes estilizados.

### @hookform/resolvers

- **Uso**: Integração de validação de formulários com React Hook Form.
- **Justificativa**: Simplifica a validação de formulários, melhorando a experiência do usuário e a qualidade dos dados coletados.

### @mui/icons-material, @mui/lab, @mui/material, @mui/system, e @mui/x-date-pickers

- **Uso**: Componentes de UI para React.
- **Justificativa**: Oferece uma ampla gama de componentes de interface do usuário prontos para uso, consistentes e personalizáveis, acelerando o desenvolvimento.

### @testing-library/jest-dom, @testing-library/react, e @testing-library/user-event

- **Uso**: Ferramentas para testar componentes React.
- **Justificativa**: Facilita a escrita de testes robustos, permitindo testar componentes de forma mais próxima da maneira como os usuários finais os utilizam.

### @types/jest, @types/node, @types/react, e @types/react-dom

- **Uso**: Tipagens TypeScript para Jest, Node.js, React e ReactDOM.
- **Justificativa**: Melhora o desenvolvimento e a manutenção do código ao fornecer autocompletar e checagem de tipos em tempo de desenvolvimento.

### axios

- **Uso**: Cliente HTTP baseado em promessas para o navegador e node.js.
- **Justificativa**: Simplifica a realização de requisições HTTP, oferecendo uma API fácil de usar e suporte a interceptores.

### date-fns

- **Uso**: Biblioteca para manipulação de datas.
- **Justificativa**: Fornece funções simples e consistentes para manipular datas, facilitando operações como formatação, comparação e cálculo de intervalos.

Cada biblioteca foi escolhida com o objetivo de otimizar o desenvolvimento, garantir a qualidade do código e melhorar a experiência do usuário final.
