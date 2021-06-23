const animals = ["Elefante", "Perro", "Tucán", "Perico", "Gato", "Tortuga", "Delfin", "Foca", "Lobo", "Ballena"];
const pcs = ["HP", "Mac", "Compaq", "Dell", "Huawei", "Toshiba", "Acer", "LG", "Lenovo", "Samsung"]
const generation = ["Marco", "Tania", "Javier", "Adriana", "Braulio", "Tamara", "Felipe", "César", "Pedro", "Rogelio"]

let computadoras= document.getElementById('computadoras')

let computertBoton = document.getElementById('computerBoton')
computertBoton.addEventListener('click', function() {
    pcs.forEach((pc, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${pc}`;
        computadoras.appendChild(item);
      } );
})

let animales = document.getElementById('animales')

let animalesBoton = document.getElementById('animalesBoton')
animalesBoton.addEventListener('click', function() {
    animals.forEach((animal, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${animal}`;
        animales.appendChild(item);
      } );
})

let nombres = document.getElementById('nombres')

let nombresBoton = document.getElementById('nombresBoton')
nombresBoton.addEventListener('click', function() {
    generation.forEach((nombre, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${nombre}`;
        nombres.appendChild(item);
      } );
})