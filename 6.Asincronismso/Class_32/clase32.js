const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}




//Promise: 
//If we want to be sure about Promise can run in out browser we can use a polifilt
//the polifilt will create a class for running the promises
//the Promises has 3 values:
    //Pending: it is waiting
    //fulfilled: if it is resolved, if it is successful
    //rejected: if it is rejected, if an error happens
// to call the value of fulfilled we use: .then( ()=>{} )
// to call the value og rejected we use: .catch( ()=>{} )
// build a Promise: new Promise(function (resolve, reject){}).then( ()=>{} ).catch( ()=>{} )
// after fulfilled we can recall fulfilled 

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

get_character(32)
 .then( (data) => {
     console.log(`Hola, I'm ${data.name}`)
 })
 .catch( () => console.log('error'))








function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`el personaje 1 es ${personaje.name}`)
    })
    .catch(onError)