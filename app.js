let listadoPizzas = [
  {
    id: 1,
    nombre: 'Pizza con muzzarella',
    precio: 750,
    imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-muzzarella.jpg',
  },
  {
    id: 2,
    nombre: 'Pizza napolitana',
    precio: 850,
    imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-napolitana.jpg',
  },
  {
    id: 3,
    nombre: 'Pizza con jamón',
    precio: 850,
    imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-jamon.jpg',
  },
  {
    id: 4,
    nombre: 'Pizza fugazzeta',
    precio: 800,
    imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-fugazzeta.png',
  },
  {
    id: 5,
    nombre: 'Pizza calabresa',
    precio: 850,
    imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-calabresa.jpg',
  },
  {
    id: 6,
    nombre: 'Pizza con ananá',
    precio: 1050,
    imagen: 'https://www.pedidosya.com.ar/blog/wp-content/uploads/sites/5/2017/09/pizza-anana.jpg',
  },
];

localStorage.setItem('listadoPizzas', JSON.stringify(listadoPizzas));

const cardImg = document.querySelector('.card-img');
const cardTitle = document.querySelector('.card-title');
const cardPrice = document.querySelector('.card-price');
const Btn = document.querySelector('button');
const input = document.querySelector('input');

document.addEventListener('DOMContentLoaded', () => {
  localStorage.getItem('listadoPizzas') && (listadoPizzas = JSON.parse(localStorage.getItem('listadoPizzas')));

  cardImg.src = listadoPizzas[0].imagen;
  cardTitle.textContent = listadoPizzas[0].nombre;
  cardPrice.textContent = `Precio:  $ ${listadoPizzas[0].precio}`;
});

Btn.addEventListener('click', (e) => {
  e.preventDefault();
  try {
    const pizza = listadoPizzas.find((pizza) => pizza.id == input.value);
    cardImg.src = pizza.imagen;
    cardTitle.textContent = pizza.nombre;
    cardPrice.textContent = `Precio:  $ ${pizza.precio}`;
  } catch (error) {
    Swal.fire({
      text: 'Pizza no encontrada',
      confirmButtonText: 'Aceptar',
    });
  }
});
