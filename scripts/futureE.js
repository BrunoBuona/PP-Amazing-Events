// DOM
let cardsJs = document.getElementById("contenedor-js");
let buscador = document.getElementById("search-js")
let checkbox = document.getElementById("category-js")
// Array Filtrado del Upcoming Events
let upcoming = events.filter(event => event.date > currentDate);
console.log(upcoming)

// Impresion de cards
function imprimir (array,contenedor){
  array.forEach (event => {
    contenedor.innerHTML += `
    <article class="card cardD" style="width: 18rem">
    <img src="${event.image}" class="card-img-top" alt="${event.name}"/> 
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <a class="btn btn-dark">U$D ${event.price}</a>
    <a href="./pages/onlycard.html" class="btn btn-danger">See more</a>
    </div> 
  </article>`})};
          
imprimir(upcoming,cardsJs)

// Sin coincidencias en la busqueda
function errorAtSearch(array, contenedor){
  if(array <= 0){
    contenedor.innerHTML=`<h2>Sin coincidencias</h2>`
  }
}

// SEARCH BAR
buscador.addEventListener("keyup", e => {

  elementosFiltrados = upcoming.filter(names => names.name.toLowerCase().includes(e.target.value.toLowerCase()))

  cardsJs.innerHTML = ''

  errorAtSearch(elementosFiltrados, cardsJs)

  imprimir(elementosFiltrados,cardsJs)

}
)
// CHECKBOXS CATEGORYS
let categorias = Array.from(new Set(upcoming.map(objeto => objeto.category)))
categorias.forEach(nombreCategoria => {
  checkbox.innerHTML+=
    `<div class="form-check form-switch">
    <input class="form-check-input" id="${nombreCategoria}" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">${nombreCategoria}</label>
    </div>`})

// CHECKBOX LOGIC
let listChecked2 = []
checkbox.addEventListener(`change`, e=>{
    if (e.target.checked) {
        listChecked2 = listChecked2.concat(upcoming.filter(evento=> evento.category.toLowerCase().includes(e.target.id.toLowerCase())))
        cardsJs.innerHTML = ''
        imprimir(listChecked2, cardsJs)
      }
   else if(!e.target.checked)
     {
        listChecked2 = listChecked2.filter(evento => !evento.category.toLowerCase().includes( e.target.id.toLowerCase() ) )
        cardsJs.innerHTML = ''
        imprimir(listChecked2, cardsJs)
      }
   if (listChecked2.length === 0){
        imprimir(upcoming,cardsJs)
      }
    }
  )