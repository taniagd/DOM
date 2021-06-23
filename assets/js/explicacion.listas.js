const listAnimals = ["Pez", "jaguar", "lobo", "Iguana", "Pejelagarto", "ardilla", "canguro", "tlacuache", "ajolote"]
const listComputers = ["Asus", "Hp", "Toshiba", "Dell", "Mac", "Acer", "Lenovo", "Huawei", "Alienware", "Compaq"]
const listPeople= ["Carlos Eduardo", "Edgar Rodrigo", "Pedro Ángel", "César Eduardo", "Luis", "Clara Itzel", "Tania Belen", "Felipe de Jésus", "Sharon", "Astrik Sem"]

const btnAnimals = document.querySelector('#animals');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');
const list= document.querySelector("#list");

function displayList(lists) {
    lists.forEach (l => {
        const item = document.createElement("li");
        item.textContent = l;
        list.appendChild(item);
    });
};

btnAnimals.addEventListener("click", () => { //Función de flecha anónima que llama a otra función. Se dispara el evento, se ejecuta el código y muere esa función anónima.
    displayList(listAnimals);
});

btnComputers.addEventListener("click", () => {
    displayList(listComputers);
});

btnPeople.addEventListener("click", () => {
    displayList(listPeople);
});

//Desde la línea 10 hasta la 28 es la forma de eficientar el uso de código, pues era repetitivo como lo hicimos abajo.

/* btnAnimals.addEventListener("click", function () {
    listAnimals.forEach(animal => {
        const li = document.createElement("li");
        // <li></li>
        li.textContent = animal;
        //<li>Animal</li>
        /*li.classList.add ("mi-clase"); Así se agregaría una clase de bootstrap
        list.appendChild(li);
    })
}); 
*/

/*btnComputers.addEventListener("click", function () {
    listComputers.forEach(computer => {
        const li = document.createElement("li");
        // <li></li>
        li.textContent = computer;
        //<li>Animal</li>
        list.appendChild(li);
    })
});
*/

/* btnPeople.addEventListener("click", function () {
    listPeople.forEach( person => {
        const li = document.createElement("li");
        // <li></li>
        li.textContent = person;
        //<li>Animal</li>
        list.appendChild(li);
    })
});
*/