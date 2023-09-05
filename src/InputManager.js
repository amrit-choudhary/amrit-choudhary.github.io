class InputManager{
    sideThrusterLerp = 0.1
    rightThruster = 0.0
    leftThruster = 0.0


    constructor(){
        addEventListener('keydown', ({key}) => this.readKeydown(key))
        addEventListener('keyup', ({key}) => this.readKeyup(key))
    }

    readKeydown(key){
        switch(key){
            case 'ArrowRight':
                this.rightThruster = 1.0
                break
            case 'ArrowLeft':
                this.leftThruster = 1.0
                break
        }
    }

    readKeyup(key){
        switch(key){
            case 'ArrowRight':
                this.rightThruster = 0.0
                break
            case 'ArrowLeft':
                this.leftThruster = 0.0
                break
        }
    }

    poll(){

    }
}

export default InputManager