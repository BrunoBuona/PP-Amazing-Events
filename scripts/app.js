const container = document.getElementById("contenedor");
const category = document.getElementById("categorys-js")
const input = document.getElementById('searchBar')


const printer = events.map(event =>{
    container.innerHTML += `
    <article class="card" style="width: 18rem">
        <img src="${event.image}" class="card-img-top" alt="${event.name}"/>
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <button class="btn btn-info">U$D ${event.price}</button>
            <a href="./pages/onlycard.html" class="btn btn-primary">See more</a>
        </div> 
    </article>
    `;
})




/*
2b) Ordenar el string capturado y pasarlo a minuscula // ARRAYS METHODS
2c) Filtrar el input del usuario con los event.name del archivo de data.js pasado a minuscula. // ARRAY M.
2d) Guarda el array resultante del filtro para mostrarlo en tu HTML. // ARRAY M.
*/

input.addEventListener('keyup', event => {
  let inputUser = input.value
  console.log(inputUser)

})


//3. Para los Checkbox:
/*
3a) Extrae las categorias dinamicamente de los eventos de data.js.
3b) Eliminar los duplicados/repetidos extraidos dinamicamente.
3c) Con el array resultante del filtro, mostrarlo en el HTML.
*/
// 3a
let categorys = events.map(array => array.category).sort() // Atrapamos todas las categorias del data.js y lo ordenamos alfabeticamente.
// 3b
let categoryList = Array.from(new Set(categorys))
console.log(categoryList)

//3c Imprimo las categorias y sus respectivos checkbox
function categoryPrinter(){
let cc = document.getElementById("catcontainer")
for (i = 0; i < categoryList.length; i++) {
  cc.innerHTML += `
    <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      name="checkbox"
      id="checkbox-${categoryList[i]}"
      value="${categoryList[i]}"
    />
    <label class="form-check-label" for="inlineCheckbox1">${categoryList[i]}</label>
  </div>`
}
  for(i=0; i < categoryList.length; i++){
    console.log("Evento "+i)
    document.getElementById(`checkbox-${categoryList[i]}`).addEventListener('change',checkEvents)
  }
}
categoryPrinter()

function checkEvents(e){
  console.log(e.target.value)
  if (e.target.checked) {
    console.log("Checked")
  } else {
    console.log("Unchecked")
  }
};


//4. Fusion de Filtros
/*
4a) Define condicionales que evaluen si el input tiene valor o si los checkbox se encuentran chequeados.
*/

// Revisiones finales:
/*
- Los filtros deben funcionar solos y combinados.
- En caso de que no encuentre ningun evento con los filtros, debe indicar al usuario que ajuste algo.
- Los filtros deben estar presentes en las 3 paginas.
- Al clickear en la tarjeta del evento, esta deberá mostrar el evento al que se realizó click en la pagina de detalle.
*/

