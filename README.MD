<h1>RENTX</h1>

Sistema que gerencia uma rede de aluguel de veículos <br/>
**API** desenvolvida na trilha Ignite da Rocketseat <br/>
**RF** => Requisitos Funcionais <br/>
**RNF** => Requisitos Não Funcionais <br/>
**RN** => Requisitos de Negócio <br/>

Cadastro de carro <br/>
**RF**
[x]Deve ser possível cadastrar um novo carro. <br/>

**RN** <br/>
[x] Não deve ser possível cadastrar carros com placas já existentes. <br/>
[x] Não deve ser possivel um carro ser cadastrado por um usuário não administrador. <br/>
[x] O carro deve ser cadastrado com 'disponibilidade' por padrão. <br/>
[x] O carro deve ser cadastrado por um usuário administrador. <br/>

Listagem de carros <br/>
**RF** <br/>
[x] Deve ser possível listar todos os carros disponíveis. <br/>
[x] Deve ser possível listar todos os carros disponíveis pelo nome da categoria. <br/>
[x] Deve ser possível listar todos os carros disponíveis pelo nome da marca. <br/>
[x] Deve ser possível listar todos os carros disponíveis pelo nome do carro. <br/>

**RN** <br/>
[x] Não deve ser necessário o usuário estar autenticado no sistema para realizar a listagem dos carros. <br/>

Cadastro de Especificação do carro <br/>
**RF** <br/>
[x] Deve ser possível cadastrar uma especificação para um carro. <br/>

**RN** <br/>
[x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado. <br/>
[x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. <br/>
[x] Não deve ser possivel cadastrar uma especificação por um usuário não administrador. <br/>

Cadastro de imagens do carro <br/>
**RF** <br/>
[x] Deve ser possível cadastrar a imagem do carro. <br/>
[x] Deve ser possível listar todos os carros. <br/>

**RNF** <br/>
[x] Utilizar o multer para o upload dos arquivos. <br/>

**RN** <br/>
[x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro. <br/>
[x] Não deve ser possivel cadastrar uma imagem por um usuário não administrador. <br/>

Aluguel do carro <br/>
**RF** <br/>
[x] Deve ser possível cadastrar um aluguel. <br/>

**RN** <br/>
[x] O aluguel deve ter duração mínima de 24 horas. <br/>
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário. <br/>
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro. <br/> [x] O usuário deve estar logado na aplicação. <br/>
[x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível. <br/>

Devolução do carro <br/>
**RF** <br/>
[x] Deve ser possível realizar a devolução de um carro <br/>

**RN** <br/>
[x] Se o carro for devolvido com menos de 2 horas, deverá ser cobrado uma diária completa. <br/>
[x] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel. <br/>
[x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel. <br/>
[x] Ao realizar a devolução, deverá ser calculado o total do aluguel. <br/>
[x] Caso o horário de devolução seja superior ao horário previsto da entrega, deverá ser cobrado multa proporcional aos dias de atraso. <br/>
[x] Caso exista multa, deverá ser somado ao total do aluguel. <br/>
[x] O usuário deve estar logado na aplicação. <br/>

Listagem de Alugueis para usuário <br/>
**RF** <br/>
[x] Deve ser possível realizar a busca de todos os alugueis para o usuário <br/>

**RN** <br/>
[x] O usuário deve estar logado na aplicação. <br/>

Recuperação de senha <br/>
**RF** <br/>
[x] Deve ser possível o usuário recuperar a senha informando o email. <br/>
[x] O usuário deve receber um email com o passo a passo para a recuperação da senha. <br/>
[x] O usuário deve conseguir inserir uma nova senha. <br/>

**RN** <br/>
[x] O usuário precisa informar uma nova senha. <br/>
[x] O link enviado para a recuperação deve expirar em 3 horas. <br/>
