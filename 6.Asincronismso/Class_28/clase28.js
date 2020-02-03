//1. We need to know the URL which we want to access. 
const API_URL = 'https://swapi.co/api/' //it is going to be fix for all the requests 

//2. Complement the URL
const PEOPLE_URL = 'people/:id'

//3. Method for request
// $.get()

//4. Parameters of $.get(): 4.1. URL
var n = 1
const peopleURL = `${API_URL}${PEOPLE_URL.replace(':id', n)}`

//4. Parameters of $.get(): 4.2. Object with options
const opts = {crossDomain: true} //


//4. Parameters of $.get(): 4.3. Call-back
const onResponse = function (data) { 
    console.log(`Hola, I'm ${data.name}`)
    console.log(arguments)
    console.log(arguments[1])
}

//Method for request
$.get(peopleURL, opts, onResponse)

//in the documentation we can see the answer of this request is:
//If it is success: console.log(arguments)
// 1. Data. where we can see name, height, mass, ...
// 2. Status: success because the request was ok = arguments[1]
// 3. Original request the JavaScript = arguments[2]
const getStatus = function (data, Status, Original) { 
    console.log(Status)
}
