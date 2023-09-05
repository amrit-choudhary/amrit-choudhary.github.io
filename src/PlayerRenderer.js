class PlayerRenderer{
    constructor(canvas, canvas2d, player){
        this.canvas = canvas
        this.canvas2d = canvas2d

        this.player = player
        this.transform = player.transform

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
        
        this.canvas2d.save()
        this.canvas2d.fillStyle = "#ffffff"
        this.canvas2d.font = "20px verdana, sans-serif ";
        
        let mainThrottle = "Main Throttle: " + this.player.mainThrottle.toFixed(2)
        let horizontalSpeed = "Horizontal Speed: " + this.player.vel.x.toFixed(2)
        let verticalSpeed = "Vertical Speed: " + (-this.player.vel.y).toFixed(2)
        let altitude = "Altitude: " + (this.canvas.height - this.transform.position.y)
            .toFixed(2)
        
        this.canvas2d.fillText(mainThrottle, 10, 30)
        this.canvas2d.fillText(horizontalSpeed, 10, 60)
        this.canvas2d.fillText(verticalSpeed, 10, 90)
        this.canvas2d.fillText(altitude, 10, 120)
        this.canvas2d.restore()
    }
}

export default PlayerRenderer