//Modificacíón del DOM
let subtitle = document.querySelector('#subtitle'); //Se creará una variable y se accedará a lo contenido en h3, a través de document.querySelector,usando # (así se selecciona el id) + nombre del elemento. Para seleccionar una clase es con . (punto)
let paragraph = document.querySelector('#paragraph');
console.log (subtitle); // Se imprime en consola.

/*subtitle.textContent= "Subtítulo";*/ //querySelector selecciona un elemento del html, y a través de text content se accede a su valor. En este caso se le coloca el valor, pues en el html la etiqueta está vacía.

console.log(subtitle.textContent); //Para cambiar el valor del elemento
subtitle.textContent = "Nuevo valor"; //Al texto subtítulo, cámbiale el valor por esto.
subtitle.classList.add("red"); //Para agregar una clase al elemento se añade classList.add ('nombredemiclase') y en css está creado el estilo.
subtitle.classList.remove("red"); //Para remover una clase se agrega clasList.remove


const animals = ["perro", "gato", "mapache", "pez", "leopardo", "ratón", "zorro"]; 
//Para pasar esta lista a nuestro hhtml... 1.Hacemos referencia a la lista:
const list = document.querySelector('#list');

//Push (nombredelelemento) sirve para agregar un elemento al final de un arreglo.
animals.push('Elefante');

//2. Se utilza un ciclo for each, que se usa para objetos y arreglos. Correrá todos los elementos del arreglo, sin importar si son 5 o 100.
animals.forEach (function(animal) { //Función anónima que recibe elementos dentro del arreglo.
    let item=document.createElement('li'); //Se declara un item y creará una etiqueta "li" (porque es lo que va dentro de nuestra lista <ul></ul>.
    item.textContent = animal; //Se asigna el valor del animal. Ejemplo: <li>Perro</li>. Pero ¿cómo meter el valor a la lista?
    //item.textContent = `${index + 1} ${animal}` //Para que aparezca la posición en la que esta ese elemento en nuestro arreglo.
    list.appendChild(item); //Para eso se usa el appendChild, para agregar un "hijo".
});


/*Así se vería lo mismo que de arriba, pero con estructura de función de flecha.
animals.forEach (animal => { / (animal, index) //Si es un solo valor se puede omitir el paréntesis, pero si no se agregan.
    let item=document.createElement ('li');
    item.textContent = animal;
    list.appendChild(item);
}

*/
