const API_URL = 'https://swapi.dev/api/' 
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

const onResponse = function (data) { 
    console.log(`Hola, I'm ${data.name}`)
}

function get_character(n){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', n)}`
    $.get(peopleURL, opts, onResponse)
}

get_character(1)
get_character(3)
get_character(5)

// the Asynchronism of Java cannot allow to know the order of the server's answers
