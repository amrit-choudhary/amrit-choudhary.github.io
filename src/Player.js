import {Transform, Vector2d, Vector3d} from "./Transform.js"
import PlayerRenderer from "./PlayerRenderer.js"

class Player{
    constructor(canvas, canvas2d){
        this.transform = new Transform()
        this.transform.position = new Vector2d(300, 500)
        this.transform.size = new Vector2d(100, 100)
        this.transform.rotation = new Vector3d(0, 0, 0)
        this.transform.scale = new Vector2d(0.5, 0.5)

        this.renderer = new PlayerRenderer(canvas, canvas2d, this.transform)
    }

    update(inputManager){
        var rot = inputManager.rightThruster - inputManager.leftThruster;
        this.transform.rotation.z += 0.1 * rot
    }

    draw(){

    }
} 

export default Player