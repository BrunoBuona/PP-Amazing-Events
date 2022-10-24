let $tablas = document.getElementById("tablasJs");
let eventosFuturos;
let eventosPasados;
fetch("https://amazing-events.herokuapp.com/api/events")
  .then((data) => data.json())
  .then((data) => {
    let eventos = data.events; // Esto no se usa rey.
    let fechaActual = data.currentDate; // Esto tampoco se usa rey
    eventosFuturos = eventos.filter((objeto) => objeto.date > fechaActual); // eto si | array
    eventosPasados = eventos.filter((objeto) => objeto.date < fechaActual); // eto si | array
    logicaTablaUno();
    logicaTablaDos(eventosFuturos);
  })
  .catch((error) => console.log(error));

// COMPONENTES TABLA 1  ||  Eventos del Pasado
function crearTablaUno(contenedor, obj1, obj2, obj3) {
  contenedor.innerHTML += `
  <thead class="table-dark">
  <tr>
    <th colspan="3">Event statistics</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="semibold">
      Events with the highest percentage of attendance
    </td>
    <td class="semibold">
      Events with the lowest percentage of attendance
    </td>
    <td class="semibold">Events with larger capacity</td>
  </tr>
  <tr>
    <td>${obj1.name}</td> 
    <td>${obj2.name}</td>
    <td>${obj3.name}</td>
  </tr>
</tbody>
`;
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
  crearTablaUno($tablas, menorAsistencia, mayorAsistencia, mayorCapacidad);
}

// COMPONENTES TABLA 2 || Eventos del Futuro
function crearTablaDos(contenedor, cat) {
  contenedor.innerHTML += `
   <thead class="table-dark">
          <tr>
            <th colspan="3">Upcoming events statistics by category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="semibold">Categories</td>
            <td class="semibold">Revenues</td>
            <td class="semibold">Percentage of attendance</td>
          </tr>
        <tr>
          <td>${cat[0]}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>${cat[1]}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>${cat[2]}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>${cat[3]}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>${cat[4]}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>${cat[5]}</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      `;
}

function logicaTablaDos(eventosFuturos) {
  let fn = eventosFuturos => eventosFuturos.category
  let categorias = Array.from(new Set(eventosFuturos.map(fn))) // cat
  eventosFuturos.map((objeto) => {objeto.gananciaEstimada = (objeto.price * objeto.estimate)});

// esto no funciona ;)
  // let gananciaEstimada2 = [...eventosFuturos].reduce((a, b) => {
  // return{
  //   category: b.category,
  //   gananciaCategoria: a.gananciaEstimada+b.gananciaEstimada
  // }}
  
  crearTablaDos($tablas, categorias)

}

// COMPONENTES TABLA 3  ||  Eventos del Pasado

function crearTablaTres(contenedor, cat) {
  contenedor.innerHTML += `
<thead class="table-dark">
          <tr>
            <th colspan="3">Past events by category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="semibold">Categories</td>
            <td class="semibold">Revenues</td>
            <td class="semibold">Percentage of attendance</td>
          </tr>
          <tr>
            <td>${cat[0]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[1]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[2]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[3]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[4]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[5]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[6]}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>${cat[7]}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
  `;
}
