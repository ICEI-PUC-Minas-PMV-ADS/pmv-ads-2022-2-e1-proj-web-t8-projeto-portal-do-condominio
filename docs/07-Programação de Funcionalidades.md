# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema com a atribuição dos requisitos atendidos.

<h3> Tela de Login </h3>

Tela que permite o usuário realizar o login ou o registro na aplicação.
![image](https://user-images.githubusercontent.com/8716603/198911146-1f354a68-2d74-4d25-bbb1-9b9367532a17.png)

<b>**Requisitos atendidos**</b>
- RF-01 -O sistema deve conter uma tela inicial de login para poder acessar com usuário e senha, também conta botão de cadastro de usuário e recuperação de senha 

<b>**Artefatos da funcionalidade**</b>

- Tela Login.html
- stylem.css
- scriptcadastro.js

<b> Estrutura de Dados </b> 
![image](https://user-images.githubusercontent.com/8716603/198914101-5ecff467-b63e-493b-aef1-d1ced4e42ec6.png)

<h3> Tela de Cadastro </h3>

Tela que permite ao usuário realizar o registro na aplicação, o usuário devera fornecer um e-mail e senha.Tela que permite ao usuário acesse o termo de uso da aplicação.

![image](https://user-images.githubusercontent.com/8716603/198911515-7c73ab9e-4730-4c9f-8c4a-c18fb2be5699.png)

<b>**Requisitos atendidos**</b>
- RF-02 - O sistema deve conter uma tela de cadastro de usuário para os moradores terem acesso ao sistema.

<b>**Artefatos da funcionalidade**</b>
- Tela Cadastro.html
- stylecadastro.css
- scriptcadastro.js

<b> Estrutura de Dados </b> 
![image](https://user-images.githubusercontent.com/8716603/198914193-9196dd73-c1e1-4c29-85df-d1b5517dd071.png)

<h3> Tela de Home </h3>

Tela que permite o usuário navegar pelos menus das paginas. Tela que permite o usuário visualiza os informativos do condomínio.

![image](https://user-images.githubusercontent.com/8716603/198911827-22789958-dbe3-4e6e-8477-2baab329c029.png)

<b>**Requisitos atendidos**</b>

- RF-03 - O sistema deve conter uma tela de Home onde o usuário tem a opção de navegação do sistema e informativos do condomínio na tela inicial.

<b>**Artefatos da funcionalidade**</b>
- Tela Home.html
- style-grid.css

![image](https://user-images.githubusercontent.com/8716603/198914315-c21b1872-8e66-4062-99d8-80c33eea7c45.png)

<h3> Tela de Financeiro </h3>

Tela que permite ao condômino ter acesso aos boletos, podendo realizar o pagamento do mesmo, após baixa-lo e adquirir o código de barras. Também é possivel visualizar a situação dos pagamentos dos boletos, podendo estar: Em aberto, Pago, Em atraso ou Indisponível.

<b> Estrutura de Dados </b> 
![image](https://user-images.githubusercontent.com/8716603/198912799-b09a59d9-5b0d-4cbe-a8e1-6aaef7e45197.png)

<b> Requisitos Atendidos </b>

- RF-04 - O Sistema deve apresentar uma opção para finanças, onde o condomínio conseguirá realizar pagamentos de taxas, solicitação de boletos, datas dos próximos boletos, inadimplências e entre outros.

<b> Artefatos da funcionalidade </b>

- index.html <br>
- styles.css <br>
- assets/boleto.png <br>
- assets/download-da-nuvem.png <br> 
- assets/predio-comercial.png

<b> Estrutura de Dados </b> 

![Captura de tela 2022-10-30 170517](https://user-images.githubusercontent.com/105026101/198901496-0cc5807c-65f4-462a-bc5e-3ca4d991cfe1.png)

<b> Instruções de acesso </b>

Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;<br>
Descompacte o arquivo em uma pasta específica;<br>
Abra o Visual Studio Code e execute o Live Server;

<h3> Tela de Reclamações </h3>

A tela que permite ao usuário registrar uma reclamação relacionada ao condomínio.

![image](https://user-images.githubusercontent.com/8716603/198915473-4f58067a-88b8-4e0c-908c-0f3a379dcdc9.png)

<b>Requisitos atendidos</b>

- RF-08: O Sistema deve apresentar uma opção de “reclame aqui” onde poderá ser feitas reclamações, como barulho, luzes e qualquer outra forma de perturbação. Podendo ser gerado multas aos infratores

<b>Artefatos da funcionalidade</b>

- pgReclameAqui.html
- script_pesquisa.js
- style.css
- apartament_logo.svg
- icon-menu.png

<h3> Tela de Reservas </h3>

A tela que permite ao usuário fazer reservas de espaços comum do condomínio.

![image](https://user-images.githubusercontent.com/105026101/200194091-1caa837e-ddab-4587-be94-9cf278126e9b.png)

<b> Requisitos Atendidos </b>

- RF 05: O sistema deve apresentar uma opção de solicitação de reserva, onde serão disponibilizadas datas nas quais os espaços destinados aos entretenimentos estarão disponíveis, como churrasqueira, salões, quadras e entre outros.
- RF 05.1: O sistema deve conter um calendário interno, onde sejam armazenadas as datas e horários, e disponibilizados aos moradores, por meio de notificações, datas de reuniões.

<b> Artefatos da Funcionalidade </b>

- Tela reserva.html
- style-grid.css
- calendário.js

<b> Estrutura de dados </b>

![image](https://user-images.githubusercontent.com/105026101/200194278-2dffca54-7f37-4f1f-bf28-9ebe53fe71fc.png)
![image](https://user-images.githubusercontent.com/105026101/200194283-00cbaa7d-cb3e-4638-b26d-e20835700224.png)

<h3> Tela Síndico </h3>

A tela que permite ao usuário um canal de comunicação com o sindico por meio de chat ou mensagem.

![image](https://user-images.githubusercontent.com/105026101/200194307-9595ab8d-e776-4330-b6e0-3020dd1803bb.png)

<b> Requisitos Atendidos </b>

- RF 06: O sistema deve conter uma opção de “Sindico”, onde seja disponibilizado um chat ou mandar uma notificação direto com o síndico.
<b> Artefatos da Funcionalidade </b>

<b> Estrutura de dados </b>

![image](https://user-images.githubusercontent.com/105026101/200194568-baa4d49b-3106-46d6-94e8-48ca10539810.png)
![image](https://user-images.githubusercontent.com/105026101/200194570-39503ced-a566-4617-9ebf-22737df907f3.png)

<h3> Tela Assembleias </h3>

A tela que permite ao usuário um canal para fazer as assembleias do condomínio.

![image](https://user-images.githubusercontent.com/105026101/200194611-518880cd-35ee-4a36-9a1d-1bce8d545c79.png)

<b> Requisitos Atendidos </b>

- RF 07: O sistema deve conter uma opção de assembleia, onde poderá ser feito as reuniões de condomínio de forma online.

<b> Artefatos da Funcionalidade </b>

-	Tela assembleia.html
-	style-grid.css

<b> Estrutura de dados </b>

![image](https://user-images.githubusercontent.com/105026101/200194692-6b7a3788-bff3-46e4-96ee-98c964c7847a.png)
![image](https://user-images.githubusercontent.com/105026101/200194696-9f7c56c7-556f-4237-a5e1-b7f4184a1c07.png)

<h3> Tela Sugestões </h3>

A tela que permite ao usuário um canal para fazer sugestões no condomínio.

![image](https://user-images.githubusercontent.com/105026101/200194728-d2533296-b041-436b-bf5b-3f8d0bcd1376.png)

<b> Requisitos Atendidos </b>

- RF 09: O sistema deve conter uma opção de “Sugestões”, onde seja disponibilizado um canal de sugestões para o condomínio.

<b> Artefatos da Funcionalidade </b>

- Tela sugestoes.html
-	style-grid.css

<b> Estrutura de dados </b>

![image](https://user-images.githubusercontent.com/105026101/200194781-413d4932-c04a-496a-8a6d-69e8574b84d5.png)
![image](https://user-images.githubusercontent.com/105026101/200194788-59cfe70c-4c31-4077-83b7-d8fdeabd2d8f.png)


