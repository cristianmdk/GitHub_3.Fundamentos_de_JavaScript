const btnStart   = document.getElementById ('btnStart')
const green     = document.getElementById('green')
const cyan      = document.getElementById('cyan')
const yellow    = document.getElementById('yellow')
const magenta   = document.getElementById('magenta')
const last_level = 10

class Game {
    constructor(){
        this.initialize()
        this.generate_sequency()
        this.next_level ()
    }
    
    initialize (){
        //btnStart.classList.add('hide')
        btnStart.style.display = 'none'
        this.level = 1
        this.colors = {green, cyan, yellow, magenta}
    }

    generate_sequency(){
        //this.sequency = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
        this.sequency = Array.from({length: last_level}, () => Math.floor(Math.random() * 4));
    }

    next_level(){
        //this.sublevel = 0
        this.light_sequency()
        this.add_click_event()
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
            const color = this.transform_number_color(this.sequency[i])
            setTimeout(() => this.light_color (color) , 1000*i)
        }
    }

    add_click_event(){
        //this.colors = {green, cyan, yellow, magenta}
        this.colors.green.addEventListener  ('click', this.choose_color.bind(this))
        this.colors.cyan.addEventListener   ('click', this.choose_color.bind(this))
        this.colors.magenta.addEventListener('click', this.choose_color.bind(this))
        this.colors.yellow.addEventListener ('click', this.choose_color.bind(this))
    }


    choose_color(ev){
        console.log(ev.target.id)
        console.log(ev)
        
        //<div id="yellow"     class="color verde right"   data-color="yellow" data-my_name = "This is my name"></div>
        // I can pass through <div> information 
        console.log(ev.target.dataset.color)
        console.log(ev.target.dataset.my_name) //only yellow has this attribute 
        
    }
}

function start_game(){
    //alert("The game will start")
    //var game = new Game ()
    window.game = new Game ()
}

