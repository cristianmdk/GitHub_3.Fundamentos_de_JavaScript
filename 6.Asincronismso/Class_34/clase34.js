const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, data => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`sucedió un error al obtener el personaje ${id}`)
}

//arreglo con los id que se llamaran en el request
var ids = [1,2,3,4,5,6,7]

//esta es una forma de declarar la función:
/* var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
}) */

//simplificamos la función:
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

/* obtenerPersonaje(1)

    .then(personaje => {
        console.log(`el personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`el personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`el personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`el personaje 4 es ${personaje.name}`)
    }) 

    .catch(onError)*/