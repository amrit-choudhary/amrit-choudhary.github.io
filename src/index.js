import GameManager from "./GameManager.js"

const canvas = document.querySelector('canvas')
const canvas2d = canvas.getContext('2d')

const gameManager = new GameManager(canvas, canvas2d)

function gameLoop(){
    requestAnimationFrame(gameLoop)
    gameManager.update()
}

gameLoop()