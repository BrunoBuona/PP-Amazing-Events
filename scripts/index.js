// ================================================================== //
// =========================== DOM ================================== //

let cardsJs = document.getElementById("contenedor-js");
let buscador = document.getElementById("search-js")
let checkbox = document.getElementById("category-js")

// ================================================================== //
// =========================== ASYNC ================================== //
async function fetchApi(){
  let events2 = await fetch('https://amazing-events.herokuapp.com/api/events')
  console.log(events2)
  events2 = await events2.json()
  eventx = events2.events
  imprimir(eventx, cardsJs)
}
fetchApi()
// ================================================================== //
// =================== IMPRESION DE CARDS  ========================== //

function imprimir (array,contenedor){
  array.forEach (ex => {contenedor.innerHTML += `
    <article class="card cardD" style="width: 18rem">
    <img src="${ex.image}" class="card-img-top" alt="${ex.name}"/> 
    <div class="card-body">
    <h5 class="card-title">${ex.name}</h5>
    <p class="card-text">${ex.description}</p>
    <a class="btn btn-dark">U$D ${ex.price}</a>
    <a href="./pages/onlycard.html?id=${ex._id}" class="btn btn-danger">See more</a>
    </div> 
  </article>`})};



// ================================================================== //
// ====================== FUNCION DE RE IMPRESION =================== //

function actualizacionDeImpresion(contenedor, array) {
  contenedor.innerHTML = ''
  imprimir(array, contenedor)
  if(array == listChecked){ // Aca deberia haber puesto un false, dado que esta condicion nunca se va a cumplir de todas maneras.
  }
  else{
    errorAtSearch(array, contenedor)}
}

// ================================================================== //
// ====================== FUNCION DE ERROR ========================== //

function errorAtSearch(array, contenedor){
  if(array <= 0){
    contenedor.innerHTML=`<h2>Sin coincidencias</h2>`
  }
}

// ================================================================== //
// =================== IMPRESION DE CATEGORIAS ====================== //

let categorias = Array.from(new Set(events.map(objeto => objeto.category)))
categorias.forEach(nombreCategoria => {
  checkbox.innerHTML+=
    `<div class="form-check form-switch">
    <input class="form-check-input" id="${nombreCategoria}" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">${nombreCategoria}</label>
    </div>`})

// ================================================================== //
// =============== BARRA DE NAVEGACION (EVENTO) ===================== //


buscador.addEventListener("input", e => {
  if(listChecked.length > 0){
  elementosFiltrados = listChecked.filter(names => names.name.toLowerCase().includes(e.target.value.toLowerCase()))
  actualizacionDeImpresion(cardsJs, elementosFiltrados)
  }
  else{
    elementosFiltrados = events.filter(names => names.name.toLowerCase().includes(e.target.value.toLowerCase()))
  actualizacionDeImpresion(cardsJs, elementosFiltrados)
  }
})


// ================================================================== //
// ===================== CHECKBOX (EVENTO) ========================== //

let listChecked = []
checkbox.addEventListener(`change`, e=>{
    if (e.target.checked) {
        listChecked = listChecked.concat(events.filter(evento=> evento.category.toLowerCase().includes(e.target.id.toLowerCase())))
        actualizacionDeImpresion(cardsJs, listChecked)
      }

   else if(!e.target.checked){
        listChecked = listChecked.filter(evento => !evento.category.toLowerCase().includes( e.target.id.toLowerCase() ) )
        actualizacionDeImpresion(cardsJs, listChecked)
      }
   if (listChecked.length === 0)
   {
    imprimir(events,cardsJs)
   }})



