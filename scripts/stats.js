// DOM
let $filaUno = document.getElementById("filaUno")
let $filaDos = document.getElementById("filaDos")
let $filaTres = document.getElementById("filaTres")

let eventosFuturos;
let eventosPasados;
// API
fetch("https://mh-amazing.herokuapp.com/amazing")
  .then((data) => data.json())
  .then((data) => {
    // Data Storage
    let eventos = data.events; 
    let fechaActual = data.date; 
    // Filtros
    eventosFuturos = eventos.filter((objeto) => objeto.date > fechaActual);
    eventosPasados = eventos.filter((objeto) => objeto.date < fechaActual); 
    // Funciones ejecutadas
    logicaTablaUno();
    stats(eventosFuturos, 'estimate', $filaDos)
    stats(eventosPasados, 'assistance', $filaTres)
})
  .catch((error) => console.log(error)); 

// FUNCTIONS
function crearTablaUno(contenedor, obj1, obj2, obj3) {
  contenedor.innerHTML += `
  <tr>
    <td>${obj1.name}</td> 
    <td>${obj2.name}</td>
    <td>${obj3.name}</td>
  </tr>
`;
}

function crearTablaDos(array, contenedor) {
  array.forEach(element => {
    contenedor.innerHTML +=
      `
      <tr >
          <td >${element.category}</td>
          <td >${element.gain}</td>
          <td >${element.prom}%</td>     
      </tr>
      `
  })
}

function logicaTablaUno() {
  eventosPasados.map((objeto) => {
    objeto.porcentajeAsistencia = 100 * (objeto.assistance / objeto.capacity);
  });
  // SORT'S
  let asistenciaOrdenada = [...eventosPasados].sort((e1, e2) => e1.porcentajeAsistencia - e2.porcentajeAsistencia); // Ordenador
  let capacidadOrdenada = [...eventosPasados].sort((e1, e2) => e1.capacity - e2.capacity); // Ordenador
  // POINTS
  let menorAsistencia = asistenciaOrdenada[0];
  let mayorAsistencia = asistenciaOrdenada[asistenciaOrdenada.length - 1];
  let mayorCapacidad = capacidadOrdenada[capacidadOrdenada.length - 1];
  crearTablaUno($filaUno, menorAsistencia, mayorAsistencia, mayorCapacidad);
}

function stats(time,property,contenedor) {
  time.map(event => {
    event.gain = event[property] * event.price
    event.percent = (100 * event[property] / event.capacity).toFixed(1)
  })
  let categories = Array.from(new Set(time.map(event => event.category)))
  let stats = categories.map(cat => {
    let filter = time.filter(event => event.category === cat)
    return reduceStats(filter, property)
  })
  crearTablaDos(stats, contenedor)
}

function reduceStats(array, prop){
  let initialStat = {
    category: "",
    gain: 0,
    capacity: 0,
    [prop]: 0
  }
  let stats = array.reduce((element1, element2) => {
    return {
      category: element2.category,
      gain: element1.gain + element2.gain,
      capacity: element1.capacity + element2.capacity,
      [prop]: element1[prop] + element2[prop] // el valor interno de la propiedad
    }
  }, initialStat)
  stats.prom = (100 * stats[prop] / stats.capacity).toFixed(1)
  return stats
}
