class PlayerRenderer{
    constructor(canvas, canvas2d, transform){
        this.canvas = canvas
        this.canvas2d = canvas2d
        this.transform = transform

        this.image = new Image()
        this.image.src = ".././Assets/img/spaceship.png"
    }

    render(){
        this.canvas2d.save()
        this.canvas2d.translate(this.transform.position.x,
            this.transform.position.y)
        this.canvas2d.rotate(this.transform.rotation.z)
        this.canvas2d.drawImage(this.image,
            -this.transform.size.x/2,
            -this.transform.size.y/2,
            this.transform.size.x,
            this.transform.size.y)
        this.canvas2d.restore()
    }
}

export default PlayerRenderer