const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPersonajes(id, callBack){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, function(persona){
        console.log(`hola, yo soy ${persona.name}`)
        if (callBack) {
            callBack()
        }
    })   
}

obtenerPersonajes(1, function(){
    obtenerPersonajes(2, function(){
        obtenerPersonajes(3, function(){
            obtenerPersonajes(4)
        })
    })
})