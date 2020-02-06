const btnStart   = document.getElementById ('btnStart')

class Game {
    constructor(){
        this.initialize()
    }
    
    initialize (){
        //btnStart.classList.add('hide')
        btnStart.style.display = 'none'
    }
}

function start_game(){
    alert("The game will start")
    var game = new Game ()
}