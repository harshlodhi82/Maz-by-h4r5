function createGrid(_gridSize) {
    let grid = []
    for (let i = 0; i < _gridSize; i++) {
        let rows = []
        for (let j = 0; j < _gridSize; j++) {
            let cell = new Cell(i, j)
            rows.push(cell)
        }
        grid.push(rows)
    }
    return grid
}

function getUnvisitedNeighbors(currCell) {
    let availRows = [
        grid[currCell.row - 1] ? grid[currCell.row - 1][currCell.col] : undefined,
        grid[currCell.row] ? grid[currCell.row][currCell.col + 1] : undefined,
        grid[currCell.row + 1] ? grid[currCell.row + 1][currCell.col] : undefined,
        grid[currCell.row] ? grid[currCell.row][currCell.col - 1] : undefined,
    ]
    let fillteredRows = availRows.filter(elm => elm && !elm.visited)
    return fillteredRows
}

function wallRemover(currentCell, neighbor) {
    let rowDiff = currentCell.row - neighbor.row
    let colDiff = currentCell.col - neighbor.col

    if (rowDiff === 0 && colDiff === -1) {
        //right
        currentCell.walls[1] = false
        neighbor.walls[3] =  false
        
    } else if (rowDiff === 0 && colDiff === 1) {
        //left
        currentCell.walls[3] = false
        neighbor.walls[1] =  false
    } else if (rowDiff === 1 && colDiff === 0) {
        //top
        currentCell.walls[0] = false
        neighbor.walls[2] =  false
    } else if (rowDiff === -1 && colDiff === 0) {
        //bottom
        currentCell.walls[2] = false
        neighbor.walls[0] =  false
    }
}