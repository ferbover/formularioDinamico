function validarFormulario(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");

    /*Utilizado em outra atividade
    let nomeValido = nome.length >=3;
    let emailValido = email.includes("@") && email.includes(".");
    let senhaValida = senha.length >=6;
    let senhasIguais = senha === confirmarSenha;

    //Limpa mensagens anteriores
    document.getElementById("erroNome").innerText = "";
    document.getElementById("erroEmail").innerText = "";
    document.getElementById("erroSenha").innerText = "";
    document.getElementById("erroConfirmarSenha").innerText = "";
    document.getElementById("mensagemSucesso").innerText = "";

    //Verificação do Nome
    if(!nomeValido){
        document.getElementById("erroNome").innerText = "O nome deve ter pelo menos 3 caracteres.";
    }
    //Verificação do Email
    if(!emailValido){
        document.getElementById("erroEmail").innerText = "Por favor, insira um e-mail válido.";
    }
    //Verificação da Senha
    if(!senhaValida){
        document.getElementById("erroSenha").innerText = "A senha deve ter pelo menos 6 caracteres.";
    }
    //Verificação de Confirmação de Senha
    if(!senhasIguais){
        document.getElementById("erroConfirmarSenha").innerText = "As senhas não coincidem.";
    }
    //Se tudo estiver correto
    if(nomeValido && emailValido && senhaValida && senhasIguais){
        document.getElementById("mensagemSucesso").innerText = "Cadastro realizado com sucesso!";
    }*/

        nome.classList.remove("erro", "sucesso");
        email.classList.remove("erro","sucesso");
        senha.classList.remove("erro","sucesso");
        confirmarSenha.classList.remove("erro","sucesso");

        if(nome.length < 3){
            nome.classList.add("erro");
            alert("O nome deve ter pelo menos 3 caracteres.");
            return false;
        }
        else{
            nome.classList.add("sucesso");
        }

        if (!email.value.includes("@") || !email.value.includes(".")){
            email.classList.add("erro");
            alert("Por favor, insira um e-mail válido.");
            return false;
        }else{
            email.classList.add("sucesso");
        }

        if (senha.length < 6 || senha.length > 12){
            senha.classList.add("erro");
            alert("A senha deve ter entre 6 e 12 caracteres.");
            return false
        }else{
            senha.classList.add("sucesso");
        }

        if (confirmarSenha.value !== senha.value){
            confirmarSenha.classList.add("erro");
            alert("As senhas não coincidem.");
            return false;
        }else{
            confirmarSenha.classList.add("sucesso");
        }

        alert("Formulário enviado com sucesso!");
        return true;
    }