const API_URL = 'https://swapi.co/api/'
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