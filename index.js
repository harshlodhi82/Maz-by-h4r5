const myCanavs = document.getElementById("myCanvas")
myCanavs.width = 800
myCanavs.height = 800
myCanavs.style.backgroundColor = "grey"
const ctx = myCanavs.getContext('2d')

const gridSize = 100
const grid = createGrid(gridSize)
let stack =  []
let currentCell = grid[0][0]
// stack.push(currentCell)
currentCell.visited = true


function draw() {
    currentCell.isCrrent = true
    ctx.clearRect(0, 0, myCanavs.width, myCanavs.height)
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid[i][j].show()
        }
    }

    let unvisitedN = getUnvisitedNeighbors(currentCell)
    if (unvisitedN.length > 0) {
        let randomIndex = Math.floor(Math.random() * (unvisitedN.length));
        if(!unvisitedN[randomIndex].visited){
            wallRemover(currentCell, unvisitedN[randomIndex])
            stack.push(currentCell)
            currentCell.isCrrent = false
            currentCell = unvisitedN[randomIndex]
            currentCell.visited = true
        }
        
    }else if(stack.length > 0){
        currentCell.isCrrent = false
        currentCell = stack.pop()
    }
    window.requestAnimationFrame(draw)
}
// setInterval(draw, 500)
draw()