const btnStart   = document.getElementById ('btnStart')
const green     = document.getElementById('green')
const cyan      = document.getElementById('cyan')
const yellow    = document.getElementById('yellow')
const magenta   = document.getElementById('magenta')

class Game {
    constructor(){
        this.initialize()
        this.generate_sequency()
        this.next_level ()
    }
    
    initialize (){
        //btnStart.classList.add('hide')
        btnStart.style.display = 'none'
        this.level = 4
        this.colors = {green, cyan, yellow, magenta}
    }

    generate_sequency(){
        //this.sequency = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
        this.sequency = Array.from({length: 10}, () => Math.floor(Math.random() * 4));
    }

    next_level(){
        this.light_sequency()
    }

    transform_number_color(number){
        switch (number){
            case 0:
                return 'cyan'
            case 1:
                return 'magenta'
            case 2:
                return 'green'
            case 3:
                return 'yellow'
        }
    }

    light_color(color){
        this.colors[color].classList.add('light')
        setTimeout( () => { this.colors[color].classList.remove('light')} , 550)
        
    }
    
    light_sequency (){
        for (let i = 0; i< this.level ; i++){
            //if we use var color the program will show only one color, the last in the sequency
            // this happens bcs each loop will overwrite color with the last value
            var color = this.transform_number_color(this.sequency[i])
            //const color = this.transform_number_color(this.sequency[i])
            console.log(color)
            setTimeout(() => {
                console.log('new: ' + color)
                this.light_color (color) 
            }, 1000*i)
        }
    }
}

function start_game(){
    //alert("The game will start")
    //var game = new Game ()
    window.game = new Game ()
}

