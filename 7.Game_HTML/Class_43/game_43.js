const btnStart   = document.getElementById ('btnStart')
const green     = document.getElementById('green')
const cyan      = document.getElementById('cyan')
const yellow    = document.getElementById('yellow')
const magenta   = document.getElementById('magenta')

class Game {
    constructor(){
        this.initialize()
        this.generate_sequency()
    }
    
    initialize (){
        //btnStart.classList.add('hide')
        btnStart.style.display = 'none'
        this.level = 1
        this.colors = {green, cyan, yellow, magenta}
    }

    generate_sequency(){
        //this.sequency = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
        this.sequency = Array.from({length: 10}, () => Math.floor(Math.random() * 4));
    }

}

function start_game(){
    //alert("The game will start")
    //var game = new Game ()
    window.game = new Game ()
    console.log (game.sequency)
    console.log (game.level)
}

