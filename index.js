"use strict";
const myCanavs = document.getElementById("myCanvas")
const gameCompleteLabel = document.getElementById("game-complete")
const score = document.getElementById("score")
const cont = document.getElementById("cont")
let slider = document.getElementById("slider")
let contri = document.getElementById("my-contri")

// slider.style.margin = "0px 0px 0px 0px";
// slider.style.transition = "margin 5s";
let myScore = 0
let startTimer = false
cont.style.display = "none"
myCanavs.width = 800
myCanavs.height = 800
myCanavs.style.backgroundColor = "grey"


const ctx = myCanavs.getContext('2d')
const gridSize = prompt("Enter Difficulty")
let isGameFinished = false
let visitedCellCount = 1
const totalCells = gridSize ** 2
const grid = createGrid(gridSize)
grid[gridSize - 1][gridSize - 1].isEndPoint = true
grid[0][0].isStartPoint = true
let stack = []
let currentCell = grid[0][0]
currentCell.visited = true
//Move the Current Cell
document.addEventListener("keyup", moveCurrentCell)

function draw() {
    currentCell.isCrrent = true
    score.innerText = `Score: ${myScore}`;
    ctx.clearRect(0, 0, myCanavs.width, myCanavs.height)
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid[i][j].show()
        }
    }

    let unvisitedN = getUnvisitedNeighbors(currentCell)
    if (unvisitedN.length > 0) {
        let randomIndex = Math.floor(Math.random() * (unvisitedN.length));
        if (!unvisitedN[randomIndex].visited) {
            wallRemover(currentCell, unvisitedN[randomIndex])
            stack.push(currentCell)
            currentCell.isCrrent = false
            currentCell = unvisitedN[randomIndex]
            currentCell.visited = true
            visitedCellCount++
        }
    } else if (stack.length > 0) {
        currentCell.isCrrent = false
        currentCell = stack.pop()
    }
    if (currentCell.isStartPoint) {
        startTimer = true
    }

    if (startTimer) {
        myScore++
    }
    if (!isGameFinished) {
        window.requestAnimationFrame(draw)
    }
}
// setInterval(draw, 500)
draw()