// Reproducción automatica
// Seleccionamos el ID del contenedor de TARJETAS
const container = document.getElementById("contenedor");
function printCard(elemento) {
  for (let event of events) {
    if(event.date > currentDate){
    elemento.innerHTML += `
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
  }
}
}
printCard(container)