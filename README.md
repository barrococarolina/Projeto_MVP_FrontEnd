# MVP Full Stack - Front-End
## 1. Introdução

Este projeto é parte do MVP - _Minimum Viable Product_ - da _Sprint_ **Desenvolvimento _Full Stack_ Básico** do Curso de Engenharia de Software da PUC-Rio. O MVP é composto de um Back-End, com banco de dados, e de um Front-End. Neste repositório encontra-se a parte do Front-end da aplicação. A parte do back-end pode ser acessada em [MVP_FullStack_API](https://github.com/barrococarolina/Projeto_MVP_BackEnd).

>O projeto desenvolvido objetiva o *Gerenciamento de uma Escola*.

>Este projeto visa, de forma bastante simplificada, implementar um banco de dados no qual seja possível criar turmas escolares para que os alunos possam ser matriculados nessas turmas. Além da criação, pode-se consultar as turmas existentes e deletá-las. Os alunos podem ser cadastrados no sistema sendo incluídos em turmas, deletados do sistema e também pode-se fazer uma consulta com todos os alunos cadastrados e uma consulta por seu id.

## 2. Front-End
O front-end é composto por uma seção de adição de novos alunos e turmas e outra de exibição da lista de alunos e turmas cadastrados.

A seção de adição de alunos é responsável por alimentar a tabela com os alunos adicionados. Nesta seção foi implementado campos de adição de aluno contendo seu nome, e-mail, número de faltas e o Id da turma em que esse aluno será cadastrado.

A seção de adição de turmas é responsável por alimentar a tabela listando as turmas adicionadas. Nesta seção foi implementado campos de adição de turmas por nome e se a turma está ativa ou inativa.

Na seção das tabelas foi implementado um botão de exclusão para cada item. Esta exclusão tem por objetivo principal a retirada da lista de controle daqueles alunos ou turmas que devem ser retirados do sistema ou pelo encerramento da turma, ou pela saída do aluno. Importa destacar que, para evitar cliques acidentais, no front-end esta exclusão passa por uma etapa de confirmação via mensagem.

O front-end é composto pelos seguintes códigos:
- index.html
- scripts.js
- styles.css

## 3. Como executar

- Para acessar a página da aplicação, basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

- Para vê-la funcionando, faz-se necessário realizar o procesamento da API previamente. Para isso executar em seu terminal:

```
python -m http.server 5500
```

## 4. Considerações
Por se tratar de um MVP, diversas funcionalidades do Front-End não foram priorizadas neste momento, ficando sua implementação para as versões futuras da aplicação. Dentre as já mapeadas, destacam-se as listadas a seguir:

- Ordenação da Tabela por ordem alfabética;
- Ferramenta de busca por nome do aluno ou da turma;
- Botão de edição dos dados de um aluno ou turma;