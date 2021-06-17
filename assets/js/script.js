/*document.getElementsByClassName ('paragraph')[0].innerHTML = "¡Hola! Soy un texto diferente";*/
/* Se accede al documento, se buscan todos los elementos de clase llamada ("x")¨, se coloca el numero del elemento que queremos, en este caso cero (hace cambio en el párrafo 0, o sea el primero) y para acceder al contenido se coloca ".innerHTML" y ahí podemos colocar el nuevo texto que reemplazará al otro, el colocado en html*/

/* var paragraphs = document.getElementsByClassName('paragraph');
console.log (paragraphs);*/
/* Se declara la variable 'paragraphs' y se le llama dentro del documento para que contenga todos los elementos de la clase "paragraph" */

/*document.getElementsByClassName('paragraph')[0].innerHTML='Párrafo cambiado dinámicamente'
Acceder al DOM y cambiar lo contenido ahí.Se accede por número, ya que se devuelve un arreglo */

/*document.getElementById('paragrap 2').innerHTML='Soy el párrafo 2';
Para acceder a un elemento identificado con su id, ya que debe ser único para cada elemento 
Esto sirve para dar interactividad a la página*/

/* var i;
for(i=0;i<parrafos.length;i++){
    if(i%2==0){
        parrafos[i].innerHTML="Cambio";
    }
}
Este arreglo se usaría para cambiar el textoi de un paragraph sí y otro no, como i9ntercalado*/

/* document.querySelector('.paragraph').textContent='Nuevo texto de párrafo';
Esta es la forma más nueva de acceder a la clase 'paragraph'. Es una equivalencia al método anterior*/

document.querySelector('#paragraph2').textContent='Nuevo texto de párrafo';
/* Si se cambia el punto dentro del párentesis por # se hace referencia a un id, en lugar de una clase, como en el ejemplo anterior */

document.querySellectorAll('paragraph')[0].textContent = "Nuevo párrafo";
/*.querySelectorAll se usa para afectar a todos los elementos con esa clase*/

var paragraph1 = document.querySelectorAll('.paragraph')[0];
var paragraph2 = document.querySelector('#paragraph2');

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(paragraph1);
console.log(paragraph2);