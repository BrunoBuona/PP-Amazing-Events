// EL JSON tiene la particularidad de que tiene la apariencia de un objeto, pero su contenido es texto plano.
// para transformar un objeto a json con texto plano, lo hacemos con JSON.stringify

// Por defecto, los parametros son      null, 0
// Funciona sin poner parametros, pero normalmente se pone el tercero por comodidad visual.
// El segundo parametro trae o hace referencia a las propiedades del objeto que quiero stringear.
// Por ejemplo el segundo parametro, en vez de null, podria ser ['name']. Si quisiera poner dos, podria hacer
// por ejemplo ['name', 'category']. El null trae TODOS los elementos por defecto.
let jsonEvents = JSON.stringify(events, null, 1) // El array es un tipo de objeto
// El stringify transforma un objeto javascript en STRING (TEXTO PLANO). Cualquier objeto lo convierte en string.
// El tercer parametro es importante, lo que hace es un identador. Esto lo que hace es generar espacios
// estos espacios son nomás para ver bien y leer bien lo que dice el JSON. Es como si moviera todos los datos
// 10px a la derecha. Es como la sangria de un texto, basicamente es un espacio, pero es importante para ver bien los
//datos.
console.log(jsonEvents)
console.log(typeof jsonEvents) // El typeof devuelve el tipo de objeto


let jsEvents = JSON.parse(jsonEvents) // Esto transforma el JSON en un objeto de javascript

/*
HAY FORMAS MUY ESPECIFICAS DE MANDAR DATOS AL SERVIDOR
RECIBIR DATOS DE UN SERVIDOR
MODIFICAR ALGO Y QUE EL SERVER LO GUARDE.

ESTO SE DENOMINA, PROTOCOLO DE TRANSFERENCIA DE HYPER TEXTO. (PETICIONES HTTP)
EL ENLACE HTTP ES LA FORMA EN LA QUE SE RELACIONAN / COMUNICAN.
*/

// el fetch es una promesa que se va a cumplir en algun momento.

// js se ejecuta linea por linea

// al trabajar con API's, trabajamos con promesas porque dependemos del tiempo de respuesta de la misma.
// ya que es una fuente externa que envia los datos. Esto puede tardar 1 minuto a 1 hora. Eso no se puede predecir.
// Hay 2 formas de acceder a la respuesta

// Una es TRY-CATCH (La mejor) // esta es la forma vulgar.
// si hay algun problema o error, no lo va a mostrar directamente.

async function fetchApi(){
  let events = await fetch('https://mind-hub.up.railway.app/amazing')
  events = await events.json()
  // aplico el metodo json para transformar la respuesta de la peticion
  // en los datos que necesito sacar de la respuesta
  // el metodo .json hace una transformacion de los datos
  // que necesito acceder. Pero sirve para lo mismo que el .parse
  // y el .stringify
  // basicamente el JSON trae los datos.
  console.log(events)
} // await es una palabra reservada de js para esperar una promesa
// pero await sola no funciona sola en cualquier lado
// funciona solo con funciones ASYNCRONAS
// El await nos devuelve los datos, en vez de una promesa
fetchApi()
// el fetchApi2 es como un if/else de los errores.
// esto catchea cualquier tipo de error.
// sirve para rastrear y ejecutar alternativas ante los errores posibles.

async function fetchApi2(){ // esta NO es la forma en la que hay q hacer la tarea.
    // pero es la forma segura de hacer un fetch de una api
    try{
        let res = await fetch('https://mind-hub.up.railway.app/amazing')
        //res es la respuesta de la peticion fetch
        let data = await res.json()
        // data es la transformacion de la peticion con los datos que necesitamos
        // data tiene dos propiedades si lo consologeo.
        console.log(data)
        // propiedad 1 es la propiedad date.
        console.log(data.events)
        // propiedad 2 es la propiedad events (array).
        console.log(data.events)
        // Las funciones que dependan de la data de eventos, los tengo que colocar
        // dentro de la funcion asincrona para que puedan recibir el array
        // ya que como dijimos, no pueden salir los datos de la funcion asincrona
        // a menos que lo pongamos como argumento dentro de una funcion
        // no hace falta codear cosas nuevas, es solo traer las funciones que YA TENIAMOS.
        // Metemos acá el armador de categorias y la impresion de cards, ya que ambas 
        // dependen de funciones.
        // Si usas funciones te lo carga antes de la inicializacion
        // pero si usas funcion flecha o variables, no lo va a cargar.
        // Lo que carga => function name(parametros)
        // lo que no carga => let funcion = (parametros =>{linea1, linea2})
        
    }
    // el (error) es un parametro de la funcion catch. 
    catch(error){ // esto atrapa el error y hacer algo
        console.log("Hubo un error y no pude mandar nada.")
    }
}

// por ahora no se puede retornar nada de una funcion asyncrona
// ahora hay que meter todas las funciones dentro de la funcion asyncrona
// ojo. solo lo que queremos ejecutar, por ejemplo el nombre de una funcion.
// PERO NO TODO EL CODIGO. NO ES PEGAR Y PEGAR TODO EL CODIGO ADENTRO.
// ES SOLO LLAMAR LA EJECUCION DE FUNCIONES.