# TESTE NODE

## Organização do projeto

O padrão utilizado busca criar um sistema com baixo nível de acoplamento, ou seja, a aplicação foi dividida em camadas, buscando ter responsabilidades únicas.

### O quê cada camada significa?

Controller: O controller é responsável por ser a porta de entrada na nossa aplicação, ou seja, ele recebe os dados e redireciona para camadas mais internas. Após os dados serem processados, o controller retorna o resultado para o cliente.

Data / Usecase: O usecase é responsável por processar as regras de negócio da nossa aplicação, fazendo verificações para garantir que as regras de negócio sejam atendidas.

Infra / Repository: O repository é responsável por fazer a interação com o banco de dados, como obter, criar, atualizar itens do banco de dados.

## Organização de pastas

Data: A pasta data é onde estão localizados os nossos usecases e interfaces que os usecases utilizam.

Controllers: A pasta controller é onde estão localizados todos os nossos controllers e dtos de validações.

Domain: A pasta domain é onde estão localizadas as nossas entidades de domínio.

Infra: A pasta de infra é onde temos os nossos gateways e repositórios.

Main: A pasta main é onde é realizada a parte de configuração, rotas, factories, adapters e middlewares.

## O que preciso fazer para rodar o projeto?

Utilizando o Node, será necessário seguir as seguintes etapas:

- Instalar o NodeJs na sua máquina.
- Configurar as variáveis de ambiente do projeto:

```sh
PORT=8080
DATABASE_URL="postgresql://localhost:password@localhost:5432/database?schema=public"
ELASTIC_HOST="http://localhost:9200"
```

- Instalar as dependências, inicializar o prisma, gerar a migração e executar o projeto

```sh
npm install

npx prisma generate

npx prisma migrate dev --name=init

npm run dev
```

Com o docker, na pasta raiz do projeto, será necessário executar o seguinte comando:

```sh
docker-compose up
```

## ROTEAMENTO

O modelo de rotas segue o seguinte padrão '/api/{model}' ou '/api/{model}/:id'\
Exemplo:

```ts
const base = "/api/customer";
const customerMiddlewareValidation = validationMiddleare(customer);
router.post(
  base,
  customerMiddlewareValidation,
  expressAdapter(createCustomerControllerFactory())
);
```

### Rotas para roteadores:

- /api/router, com os métodos GET e POST, para obter todos e atualizar.
- /api/router/${IP}, com os métodos PUT e DELETE, para alterar e desabilitar.
- /api/router/${IP}/customers com o método GET, pra obter todos os clientes vinculados ao roteador.
- /api/router/elastic, com o método GET, para buscar todos que estão no elasticsearch

Campos:

```ts
  IP: string;
  IPv6: string;
  brand: Brand;
  model: string;
  customers?: string[]; // opcional
```

### Rotas para clientes:

- /api/customer, com os métodos GET e POST, para obter todos e atualizar.
- /api/customer/${id}, com os métodos PUT e DELETE, para alterar e desabilitar.
- /api/customer/elastic, com o método GET, para buscar todos que estão no elasticsearch

Campos:

```ts
  id: string; // gerado pelo aplicação
  name: string;
  personType: number;
  cpfCnpj: string;
  dateOfBirth?: string; // opcional
  address: {
    state: string;
    city: string;
    cep: string;
    number: string;
    street: string;
    province: string;
  };
```
