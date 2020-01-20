var contador = 0

const llueve = () => Math.random() < 0.25 // declaro esta función

do{
    contador++

}while(!llueve())

if (contador === 1) {

    console.log(`fuí a ver si llovía ${contador} vez`)
    
} else {

    console.log(`fuí a ver si llovía ${contador} veces`)
    
}