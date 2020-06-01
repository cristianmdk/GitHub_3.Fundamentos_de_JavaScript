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

async function print_characters (){
    var list_characters = [21, 22, 23, 24]
    var promises = list_characters.map( (id) => get_character(id))
    try {
        var data_list = await Promise.all(promises)
        console.log (data_list)
        data_list.map( (character) => console.log(`Hola, I'm ${character.name}`))
    } catch (id){
        console.log(`error with character ${id}`)
    }
}

print_characters ()








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

async function obtenerPersonajes(){
    //arreglo con los id que se llamaran en el request
    var ids = [1,2,3,4,5,6,7]

    //simplificamos la función:
    var promesas = ids.map(id => obtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas) //espera hasta que todas las promesas esten resueltas
        console.log(personajes)

    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()