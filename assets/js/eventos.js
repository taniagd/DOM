//Evenetos. Sirven para 
window.onload = function (){

}
//Estructura de window onload es el evento y se aplica una función anónima y dentro de las llaves va lo que se quiere ejecutar.

let nameInput=document.querySelector('#nameInput'); //Se enlaza la variable con el documento html.
//console.log(nameInput.value); //Para conocer el valor del campo input.

nameInput.addEventListener('keyup', function (event) {
    console.log(nameInput.value);
} );
/*Para agregar un evento (click, change, keyup, etc) que queremos rastrear. Luego se añade la función anónima y en consola se mostrará cada que escribas eso.
/En este caso, keyup sirve para escribir todo lo que escribas una vez que sueltas la tecla.
Ambos console.log (línea 7 y 14) son dos formas de pedir que se imprima en consola el evento requerido. */

/*nameInput.addEventListener('keyup', function ()) {
    console.log(event.target.value);
}; */
//Esta es otra forma de colocar y pedir que se imprima en consola el evento requerido. 

let button = document.querySelector('#button');
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
} );
//Se hace refernecia al botón y se añade el evento click para que se dispare lo siguiente, después de la función de flecha.En este caso se añadió el evento al botón porque el otro campo ya tiene otro evento.

/* function cambiarNombre () {
    let nameHeader = document.querySelector('nameH');
    nameHeader.textContent = nameInput.value;
} */
