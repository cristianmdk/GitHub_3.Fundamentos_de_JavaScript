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