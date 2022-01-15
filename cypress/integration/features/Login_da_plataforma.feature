

Feature: Acesso a plataforma com usuário cadastrado

    Como analista quero acessar a plataforma
    Para que eu possa utilizar as funcionalidades da plataforma


    Scenario: Acessando a plataforma com usuário válido
    Given o acesso a pltaforma automation
    When acessa a página de login
    And efetua o login 
    #Então deve exibir o título ""

