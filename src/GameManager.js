import Player from "./Player.js"
import InputManager from "./InputManager.js"

class GameManager{
    constructor(canvas, canvas2d){
        this.canvas = canvas
        this.canvas2d = canvas2d
        
        canvas.width = innerWidth
        canvas.height = innerHeight
        
        canvas2d.fillStyle = "black"
        canvas2d.fillRect(0, 0, canvas.width, canvas.height)
        
        this.inputManager = new InputManager()
        this.player = new Player(canvas, canvas2d)

        this.deltaTime = 0.016
    }

    update(){
        this.canvas2d.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.update(this.inputManager, this.deltaTime)
        this.player.renderer.render()
    }
}

export default GameManager