const listaDeTeclas = document.querySelectorAll('input[type=button]');

const entradaTelefone = document.querySelector('input[type=tel]');

for(i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];

    tecla.onclick = function(){
        entradaTelefone.value = entradaTelefone.value + tecla.value
    }
}
