let cambiar_color = document.querySelector(".cuadro_color");
let boton1 = document.querySelector(".btn1");
let boton2 = document.querySelector(".btn2");

function cambiocolor1(){
    cambiar_color.innerHTML = '<div class="rojo"></div>';
}
function cambiar_color2(){
    cambiar_color.innerHTML = '<div class="verde"></div>';
}

boton1.addEventListener("click",cambiocolor1);
boton2.addEventListener("click",cambiar_color2);






