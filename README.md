# Teste para Desenvolvedor júnior

###Objetivo:

Você foi selecionado para participar de um teste técnico para a vaga de
Desenvolvedor Fullstack. O objetivo deste teste é avaliar suas habilidades em
consumir APIs REST, manipular dados e criar interfaces responsivas e funcionais
utilizando React. Para isso, você deverá desenvolver uma aplicação frontend com
duas telas distintas, conforme descrito abaixo.

### Descrição do Projeto

Você deve utilizar a API do IBGE disponível em:
https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-Variaveis-agrega
dosAgregadoVariaveisVariavelGet
A aplicação deverá ter duas telas principais , conforme detalhado a seguir:

### Tela 1: Gráfico de Evolução do PIB

● Nesta tela, você deverá exibir um gráfico que mostre a evolução do PIB
brasileiro (em dólares) e a evolução do PIB per capita (em dólares) ao longo
dos anos.
● Requisitos:
● Consuma os dados da API do IBGE para obter o PIB total e o PIB per
capita por ano.
● Exiba os dados em um gráfico de linha, onde:
● O eixo X representa os anos.
● O eixo Y representa os valores em dólares.
● Use cores diferentes para diferenciar as linhas do PIB total e do
PIB per capita.

● Adicione legendas claras para identificar cada linha no gráfico.
● Certifique-se de que o gráfico seja responsivo e se adapte a diferentes
tamanhos de tela.

### Tela 2: Tabela de PIB por Ano

● Nesta tela, você deverá exibir uma tabela contendo os seguintes dados:
● Ano
● PIB total (em dólares)
● PIB per capita (em dólares)

● Requisitos:
● Consuma os dados da API do IBGE para preencher a tabela.
● A tabela deve ser ordenada por ano, do mais antigo para o mais
recente.
● Adicione formatação adequada para os valores monetários (ex.: $
1.000.000,00).
● Implemente paginação ou rolagem infinita caso a quantidade de dados
seja grande.
● Garanta que a tabela seja responsiva e se adapte a diferentes
tamanhos de tela.
### `npm run eject`

### Requisitos Técnicos

1. Framework/Biblioteca: Utilize React.js como framework principal.
2. Gerenciamento de Estado: Você pode usar Context API, Redux ou qualquer
outra solução de gerenciamento de estado, se necessário.
3. Bibliotecas Permitidas:
● Para gráficos: Chart.js, Recharts, Victory, ou outra biblioteca de sua
preferência.
● Para estilização: CSS puro, SASS, Styled Components, TailwindCSS,
ou outra solução moderna.

4. Responsividade: A aplicação deve ser responsiva e funcionar corretamente
em dispositivos móveis e desktops.
5. Qualidade do Código: O código deve ser organizado, limpo e bem
documentado. Utilize boas práticas de programação e arquitetura de
componentes.
6. Testes: Inclua testes unitários ou de integração para pelo menos uma
funcionalidade crítica da aplicação.

## CONCLUSÃO

Apesar de todos os esforços na construção da aplicação, boa parte da execuição fica inviabilizada pela API do IBGE que se incontra inacessivel, como pode ser visto nessa imagem:
conclui-se que o objetivo desse teste era observar as capacidades de resolução de problema do candidado para alem só do design e do UX/UI, mesmo para uma vaga Front-End. A Utilização dessa API inacessivel foi proposital. O candidato é levado a escrever um codigo em que circuncreve o problema da APi e alem disso, mesmo sem poder ver o resultado final, fosse capaz de atender todas as expecificações da vaga de forma pura.
![image](https://github.com/user-attachments/assets/01357cdb-2bc8-4b69-886a-564517e90084)


## EXECUÇÃO

Para executar este projeto localmente, siga os seguintes passos:

1.  **Clone o repositório:**

    ```bash
    git clone [URL do seu repositório no GitHub]
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    # ou
    yarn start
    ```

4.  **Abra a aplicação no seu navegador:**

    Acesse `http://localhost:3000` no seu navegador para visualizar a aplicação.

**Observações:**

*   Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados no seu sistema.
*   Se você encontrar algum problema durante a instalação ou execução,  entre em contato- monteirovitor10@hotmail.com/ +5561981863346

## Decisões de Design e Tecnologias Utilizadas

Este projeto foi desenvolvido com o objetivo de exibir a evolução do Produto Interno Bruto (PIB) brasileiro, consumindo dados da API do IBGE e apresentando-os de forma visualmente clara e organizada. As principais decisões de design e tecnologias utilizadas foram as seguintes:

*   **React.js:** A escolha do React.js como framework principal para o frontend se deve à sua natureza declarativa, componentização e vasta comunidade. O React facilita a criação de interfaces de usuário interativas, reativas e fáceis de manter.
*   **Axios:** Para realizar as requisições HTTP à API do IBGE, utilizei a biblioteca Axios. Axios oferece uma API simples e intuitiva para fazer requisições, além de suporte a promises e tratamento de erros.
*   **Recharts:** Para a exibição do gráfico de evolução do PIB, optei pela biblioteca Recharts. Recharts é uma biblioteca de gráficos construída sobre o React, que oferece componentes flexíveis e personalizáveis para criar gráficos de linha, barra, pizza, etc.
*   **Styled Components:** Para a estilização dos componentes, escolhi a biblioteca Styled Components. Styled Components permite escrever CSS diretamente nos componentes React, o que facilita a manutenção do código e evita conflitos de estilo.
*   **Context API:** Para o gerenciamento de estado da aplicação, utilizei o Context API do React. O Context API permite compartilhar o estado entre componentes sem a necessidade de passar props manualmente através da árvore de componentes.
*   **Hooks Personalizados:** A lógica de busca de dados da API foi extraída para um hook personalizado (`useFetchData`). Isso promove a reutilização do código, facilita a testabilidade e mantém os componentes mais limpos e focados em sua responsabilidade principal.
*   **Responsividade:** A aplicação foi desenvolvida com um design responsivo, utilizando media queries e componentes flexíveis para garantir que ela seja exibida corretamente em dispositivos móveis e desktops.
*   **Tratamento de Erros:** Implementei tratamento de erros nas requisições à API e na renderização dos componentes para garantir que a aplicação seja robusta e que o usuário seja informado em caso de problemas.
*   **Testes:** Criei testes unitários e de integração utilizando Jest e React Testing Library para garantir a qualidade e a confiabilidade do código.

**Decisões de Design Específicas:**

*   **Gráfico de Linha:** Optei por um gráfico de linha para exibir a evolução do PIB ao longo do tempo, pois esse tipo de gráfico é ideal para mostrar tendências e padrões em dados contínuos.
*   **Tabela:** Para exibir os dados do PIB de forma mais detalhada, utilizei uma tabela. A tabela permite que o usuário visualize os valores exatos do PIB para cada ano.
*   **Mensagens de Loading e Erro:** Para melhorar a experiência do usuário, adicionei mensagens de loading enquanto os dados estão sendo carregados e mensagens de erro informativas em caso de problemas na requisição à API.

