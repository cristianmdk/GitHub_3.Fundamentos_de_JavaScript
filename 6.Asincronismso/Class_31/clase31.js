const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerpersonas(id, callBack){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(url, opts, callBack)
        .fail(() => {
        console.log(`sucedió un error, no se puede obtener el personaje ${id}`)
    })
}


obtenerpersonas(1, function(persona){
    console.log(`hola, yo soy ${persona.name}`)

    obtenerpersonas(2, function(persona){
        console.log(`hola, yo soy ${persona.name}`)

        obtenerpersonas(3, function(persona){
            console.log(`hola, yo soy ${persona.name}`)

            obtenerpersonas(4, function(persona){
                console.log(`hola, yo soy ${persona.name}`)
            })
        })
    })
})













function get_character(id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //$.get(peopleURL, opts, onResponse)
    $.get(peopleURL, opts, callback_server).fail( () => console.log('error'))
}

get_character(1, function (data) {
    console.log(`Hola, I'm ${data.name}`)

    get_character(10, function (data){
        console.log(`Hola, I'm ${data.name}`)

        get_character(20, function (data){
            console.log(`Hola, I'm ${data.name}`)
        })
    })
})



//In case the request fails, it will do ...
function fail_function (id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(peopleURL, opts, callback_server).fail()
}

//this will always be executed
function fail_always (id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(peopleURL, opts, callback_server).fail(
        console.log('error')
    )
}

//solution
function fail_always_solution (id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(peopleURL, opts, callback_server).fail(
        function (){
            console.log('error')
        }
    )
}

//shorter
function fail_short (id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(peopleURL, opts, callback_server).fail( () => console.log('error'))
}

//another way to represent the request
function different_request (id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(peopleURL, opts, callback_server)
        .fail( () => console.log('error'))
}
