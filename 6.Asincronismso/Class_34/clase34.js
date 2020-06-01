
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

var list_characters = [21, 22, 23, 24]
var promises = list_characters.map( (id) => get_character(id))
Promise
    .all(promises)
    .then( function (data) {
        console.log (data)
        // Two options for using the information of the data
        for (var i =0; i < list_characters.length; i++) {
            console.log(`${i}, Character nº ${list_characters[i]}, ${data[i].name}`)
        }
        //second method
        data.map( (data_) => console.log(`Hola, I'm ${data_.name}`))
    })
    .catch( (id) => console.log(`error with character ${id}`))









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
var ids2 = [11,12,13]

//esta es una forma de declarar la función:
var promesas2 = ids2.map(function(id){
    return obtenerPersonaje(id)
})

//simplificamos la función:
var ids = [1,2,3,4,5,6,7]
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)



obtenerPersonaje(1)
    .then(personaje => {
        console.log(`el personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`el personaje 2 es ${personaje2.name}`)
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