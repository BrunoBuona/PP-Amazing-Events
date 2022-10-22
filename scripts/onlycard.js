let onlycard2 = document.getElementById("cardCjs")

function idPrinter(par1, container) {
    par1.forEach(i => {
        container.innerHTML +=
        `
        <article class="only_card" >
        <img
          src="${i.image}"
          class="card-img2"
          alt="${i.name}"
        />
        <div class="card-body2">
            <h5 class="card-title2">${i.name}</h5>
            <p class="card-text2">
            Date: ${i.date}
            </p>
            <p class="card-text2">
            Place: ${i.place}
            </p>
            <p class="card-text2">
            Category: ${i.category}
            </p>
            <p class="card-text2">
            Category: ${i.capacity}
            </p>
            <p class="card-text2">
            Assistance: ${i.assistance}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">U$D${i.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
        `
    })
}
function idPrinter2(par1, container) {
    par1.forEach(i => {
      if(i.estimate == undefined){
        i.estimate="-"
        container.innerHTML +=
        `
        <article class="only_card" >
        <img
          src="${i.image}"
          class="card-img2"
          alt="${i.name}"
        />
        <div class="card-body2">
            <h5 class="card-title2">${i.name}</h5>
            <p class="card-text2">
            Date: ${i.date}
            </p>
            <p class="card-text2">
            Place: ${i.place}
            </p>
            <p class="card-text2">
            Category: ${i.category}
            </p>
            <p class="card-text2">
            Category: ${i.capacity}
            </p>
            <p class="card-text2" id="hideDiv">
            Estimate: ${i.estimate}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">U$D${i.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
        `
      }
      else{
        container.innerHTML +=
        `
        <article class="only_card" >
        <img
          src="${i.image}"
          class="card-img2"
          alt="${i.name}"
        />
        <div class="card-body2">
            <h5 class="card-title2">${i.name}</h5>
            <p class="card-text2">
            Date: ${i.date}
            </p>
            <p class="card-text2">
            Place: ${i.place}
            </p>
            <p class="card-text2">
            Category: ${i.category}
            </p>
            <p class="card-text2">
            Category: ${i.capacity}
            </p>
            <p class="card-text2" id="hideDiv">
            Estimate: ${i.estimate}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">U$D${i.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
        `
      }
})
    
}

function filterId() {
  let filtro = []
  let theId = Number(location.search.slice(4))
  filtro = events.filter(e => e._id === theId)
  for(let event of filtro){

  if(event.date < currentDate){
      idPrinter(filtro, onlycard2)
  }
  else{
      idPrinter2(filtro, onlycard2)
  }}
}
filterId()
