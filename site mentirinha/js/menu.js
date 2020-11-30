function controlaMenu() {
    var menu = document.getElementById('menu');

    if (menu.style.display == 'block') {
        //indica que está sendo exibido
        //logo, vamos esconde-lo!
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
//linkando a variável burger com o elemento de id=burger do HTML!
var burger = document.getElementById('burger');

//UMA ALTERNATIVA PARA ACESSAR O ELEMENTO SEM ID COM QUERYSELECTOR!
// var burger = document.querySelectorAll('header div a')[0];

burger.onclick = controlaMenu; //sem parenteses para não disparar imediatamente
