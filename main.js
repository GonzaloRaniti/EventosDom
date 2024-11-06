const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzaForm = document.getElementById("pizzaForm");
const pizzaIdInput = document.getElementById("pizzaId");
const resultContainer = document.getElementById("resultContainer");

const renderPizza = (pizza) => {
  resultContainer.innerHTML = `
      <div class="card">
          <img src="${pizza.imagen}" alt="${pizza.nombre}">
          <div>
              <h2>${pizza.nombre}</h2>
              <p>Precio: $${pizza.precio}</p>
              <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
          </div>
      </div>
  `;
};

const renderError = (message) => {
  resultContainer.innerHTML = `<p class="error">${message}</p>`;
};

const submitHandler = (e) => {
  e.preventDefault();

  const pizzaId = parseInt(pizzaIdInput.value);

  if (isNaN(pizzaId)) {
    renderError("Por favor, ingresa un número válido");
    return;
  }

  const pizza = pizzas.find((p) => p.id === pizzaId);

  if (pizza) {
    renderPizza(pizza);
    localStorage.setItem("lastPizza", JSON.stringify(pizza));
  } else {
    renderError("No se encontró ninguna pizza con ese ID");
  }
};

const loadLastPizza = () => {
  const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));

  if (lastPizza) {
    renderPizza(lastPizza);
  }
};

pizzaForm.addEventListener("submit", submitHandler);
loadLastPizza();
