const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

//el callbacks
const onPeopleResponse = function(persona){
    console.log(`hola, yo soy ${persona.name}`)
}

$.get(lukUrl, opts, onPeopleResponse)