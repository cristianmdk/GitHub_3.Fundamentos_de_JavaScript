var signo = prompt('Ingresa una vocal').toLowerCase() //el texto a minuscula

//remplazar tíldes:
signo = signo.replace('á', 'a')
signo = signo.replace('é', 'e')
signo = signo.replace('í', 'i')
signo = signo.replace('ó', 'o')
signo = signo.replace('ú', 'u')

switch(signo){
    case 'a':
        console.log('una palablra con esta vocal es ARBOL')
        break
    
    case 'e':
        console.log('una palablra con esta vocal es ELEFANTE')
        break
    
    case 'i':
        console.log('una palablra con esta vocal es IPHONE')
        break
    
    case 'o':
        console.log('una palablra con esta vocal es OSO')
        break

    case 'u':
        console.log('una palablra con esta vocal es URANO')
        break

    default:
        console.log('no es una vocal')
        break
}