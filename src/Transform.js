class Vector2d{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}

class Vector3d{
    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z
    }
}

class Transform{
    constructor(){
        this.size = new Vector2d(0, 0)
        this.position = new Vector2d(0, 0)
        this.rotation = new Vector3d(0, 0, 0)
        this.scale = new Vector2d(0, 0)
    }
}

export {Vector2d, Vector3d, Transform}