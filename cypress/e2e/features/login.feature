#language: pt

Funcionalidade: Logins validos e invalidos
    Eu, como ussuario de sistema
    Quero testar diferentes cenarios de login.
    Para garantir que o sistema autentique corretamente.

    Contexto: Estar na pagina de login do saucedemo
        Dado que eu estou na pagina de login do saucedemo

    Cenario: Login valido - Usuario Padrão
        Quando eu insiro o usario e a senha correta
        E clico no botao login
        Então eu devo ser redirecionado para a pagina de produtos