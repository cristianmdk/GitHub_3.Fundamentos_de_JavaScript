var signo = prompt('¿cuál es su signo?').toLowerCase() //el texto a minuscula

//remplazar tíldes:
signo = signo.replace('á', 'a')
signo = signo.replace('é', 'e')
signo = signo.replace('í', 'i')
signo = signo.replace('ó', 'o')
signo = signo.replace('ú', 'u')

switch(signo){
    case 'acuario':
        console.log('aquí va el texto de acuario')
        break
    
    case 'leo':
        console.log('saquí va el texto de leo')
        break
    
    case 'cancer':
        console.log('aquí va el texto de cancer')
        break

    default:
        console.log('el signo no es válido')
        break
}