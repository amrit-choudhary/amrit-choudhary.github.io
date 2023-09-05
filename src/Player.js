import {Transform, Vector2d, Vector3d} from "./Transform.js"
import PlayerRenderer from "./PlayerRenderer.js"

class Player{
    constructor(canvas, canvas2d){
        this.mass = 1.0
        this.accel = new Vector2d(0, 0)
        this.vel = new Vector2d(0, 0)

        this.mainEngineMaxThrust = 3.0
        this.gravity = new Vector2d(0.0, 1.0)
        
        this.mainThrottleLerp = 0.5
        this.mainThrottle = 0.5
        this.rightThrottle = 0.0
        this.leftThrottle = 0.0

        this.up = new Vector2d(0.0, -1.0)

        this.transform = new Transform()
        this.transform.position = new Vector2d(300, 500)
        this.transform.size = new Vector2d(100, 100)
        this.transform.rotation = new Vector3d(0, 0, 0)
        this.transform.scale = new Vector2d(0.5, 0.5)

        this.renderer = new PlayerRenderer(canvas, canvas2d, this)
    }

    update(inputManager, deltaTime){
        this.mainThrottle += inputManager.mainThrottleDelta * 
            this.mainThrottleLerp * deltaTime
        this.mainThrottle = Math.min(Math.max(this.mainThrottle, 0.0), 1.0)

        let mainPower = this.mainEngineMaxThrust * this.mainThrottle
        this.up.x = Math.sin(this.transform.rotation.z)
        this.up.y = -Math.cos(this.transform.rotation.z)

        this.accel.x = (
            (this.gravity.x * this.mass) + 
            (this.up.x * mainPower)
            ) * 1.0
        
        this.accel.y = (
            (this.gravity.y * this.mass) + 
            (this.up.y * mainPower)
            ) * 1.0
        
        this.vel.x += this.accel.x * deltaTime
        this.vel.y += this.accel.y * deltaTime

        this.transform.position.x += this.vel.x * deltaTime
        this.transform.position.y += this.vel.y * deltaTime

        let rot = inputManager.rightThruster - inputManager.leftThruster;
        this.transform.rotation.z += 1.0 * rot * deltaTime
    }

    draw(){

    }
} 

export default Player