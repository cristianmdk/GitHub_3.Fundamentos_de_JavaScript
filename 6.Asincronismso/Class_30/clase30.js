const API_URL = 'https://swapi.dev/api/' 
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}



function get_character(id,callback_server){
    const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //$.get(peopleURL, opts, onResponse)
    $.get(peopleURL, opts, function (data) {
            console.log(`Hola, I'm ${data.name}`)
            if (callback_server){ //if a callback_function is sent as parameter I will execute it
                callback_server()
            }
        }
    )
}

get_character(1, function(){
    get_character(3, function(){
        get_character(5)
    })
})
