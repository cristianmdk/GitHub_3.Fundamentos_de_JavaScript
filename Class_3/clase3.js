var peso = 75
peso -= 2 // resta 2 al valor del peso
peso += 2 // suma 2 al valor del peso

var precioVino = 200.3 // variable número con decimal

var total = Math.round(precioVino * 100 * 3) / 100
// multiplicar por 100 el precioVino pasa a un valor entero,
// luego se dive entre 100, para redondear el valor

var totalStr = total.toFixed(3) // extrae 3 número del decimal
var total2 = parseFloat(totalStr) // muestra solo 1 numero del decimal