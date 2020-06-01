const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function get_character(id){
    return new Promise(function (resolve, reject){
        const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
         .get(peopleURL, opts, function (data){
             resolve(data)
         })
         .fail( () => reject(id))
    })
}


get_character(31)
 .then( (data) => {
     console.log(`Hola, I'm ${data.name}`)
     return (get_character(32))
 })
 .then((data) => {
    console.log(`Hola, I'm ${data.name}`)
    return (get_character(33))
 })
 .then((data) => {
    console.log(`Hola, I'm ${data.name}`)
    return (get_character(34))
 })
 .catch( (id) => console.log(`error with character ${id}`)
)











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

obtenerPersonaje(1)

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

    .catch(onError)