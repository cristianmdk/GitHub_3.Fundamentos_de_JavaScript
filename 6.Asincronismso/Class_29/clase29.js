const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

//el callbacks
const onPeopleResponse = function(persona){
    console.log(`hola, yo soy ${persona.name}`)
}

function obtenerPersonajes(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonajes(1)
obtenerPersonajes(2)
obtenerPersonajes(3)