function validaForm() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');
    var erro = document.getElementById('erro');
    var validaemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // validar o nome
    if (nome.value == '') {
        erro.innerHTML = '*Preencha seu nome!';
        nome.focus();
        return false;
    }

    // validar o email
    
    if (validaemail.test(email.value) == false) {
        erro.innerHTML = '*Preencha seu e-mail corretamente!';
        email.focus();
        return false;
    }


    //validar a mensagem
    if (mensagem.value == '') {
        erro.innerHTML = '*Escreva uma mensagem!';
        mensagem.focus();
        return false;
    }

    //se tudo der certo bem na validação
    //return true;
    return false;
}

