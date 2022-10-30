# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação de possíveis usuários em um trabalho de consulta feito pelos membros da equipe. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas
As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

Juliana Moura tem 29 anos, é professora e estudante de mestrado. sua maior motivação atualmente é concluir seu mestrado. Possui como hobbies assitir séries, sair com os amigos e realizar compras pela internet.

Murilo de Souza tem 45 anos, é sócio em um escritorio de contabilidade, uma das suas motivações é lucrar mais na sua empresa, utiliza bastante aplicativos para pagamentos online, seus hobbies costumarm ser: churrasco com amigos e lazer com seus filhos aos finais de semana.

Carlos Gomes, 36 anos. Sua ocupação é administrador de empresa e estudante de engenharia. Possui como sua maior motivação atualmente, a conclusao de sua graduação em engenharia. Seus hobbies costumam ser lazer com a familia e amigos. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Murilo de Souza  | Receber notificação sobre data e horário de reuniões /votações | Ficar atualizado sobre o que está acontecendo em seu condomínio
Juliana Moura | Me comunicar diretamente com o síndico/ porteiro online | Obter informações de encomendas entregues e autorizar visitantes com maior agilidade | 
Murilo de Souza | Poder agendar reuniões de condomínio | Discutir sobre assuntos de interesse comum dos condôminos 
Carlos Gomes | Reservar horário e data para uso de salão de festas | Realizar aniversários de seus filhos/ família
Carlos Gomes | Reservar horário e data para uso de churrasqueira e espaço gourmet| Poder fazer encontros com seus amigos do trabalho/ família
Carlos Gomes | Realizar pagamentos online de taxa de condomínio e inadimplências | Realizar pagamentos online de taxa de condomínio e inadimplências
Juliana Moura | Relatar ocorrências / reclamações de convivência entre os condôminos | Evitar desentendimentos entre os moradores, para uma boa convivência

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve conter um calendário interno, onde sejam armazenadas as datas e horários, e disponibilizados aos moradores, por meio de notificações, datas de reuniões. | ALTA | 
|RF-02| O sistema deve conter um calendário onde os moradores podem solicitar datas de reuniões e encontros.   | MÉDIA |
|RF-03| O sistema deve conter uma opção de “chamado”, onde seja disponibilizado um chat ou mandar uma notificação direto com o síndico. | MÉDIA |
|RF-04| O sistema deve apresentar uma opção de solicitação de reserva, onde serão disponibilizadas datas nas quais os espaços destinados aos entretenimentos estarão disponíveis, como churrasqueira, salões, quadras e entre outros. | ALTA |
|RF-05| O Sistema deve apresentar uma opção para finanças, onde o condomínio conseguirá realizar pagamentos de taxas, solicitação de boletos, datas dos próximos boletos, inadimplências e entre outros. | ALTA |
|RF-06| O Sistema deve apresentar uma opção de “reclame aqui” onde poderá ser feitas reclamações, como barulho, luzes e qualquer outra forma de perturbação. Podendo ser gerado multas aos infratores. | ALTA |
|RF-07| O Sistema contará com uma opção de melhorias, onde os moradores podem fazer sugestões para melhorias do condomínio.  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-02| O site deve ser compatível com os navegadores Chrome, FireFox, Microsoft Edge e Safari. |  MÉDIA |
|RNF-03| O site deve suportar acesso simultâneo de vários usuários sem afetar seu desempenho. | ALTA |
|RNF-04| O site deve ter uma transição rápida entre as páginas | ALTA |
|RNF-05| O site deve estar disponível 24h por dia 7 dias por semana, sendo avisado previamente de manutenções no mesmo | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho |

