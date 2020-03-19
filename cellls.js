function Cell(row, col) {
    this.row = row
    this.col = col
    this.wh = myCanavs.width / gridSize
    this.x = this.col * this.wh;
    this.y = this.row * this.wh;
    this.walls = [true, true, true, true] //top, right, bottom, left
    this.visited = false;
    this.isCrrent = false;
    this.isEndPoint = false;
    this.isStartPoint = false;
    this.borderWidth = 5

    this.visitedColor = "#ff6200"
    this.currentColor = "yellow"
    this.endPointColor = "#6aff00"
    this.startPointColor = "#00eeff"
    this.borderColor = "#3489eb"

    this.show = () => {
        if (this.visited) {
            ctx.fillStyle = this.visitedColor
            ctx.fillRect(this.x, this.y, this.wh, this.wh);
        }

        if (this.isCrrent) {
            ctx.fillStyle = this.currentColor
            ctx.fillRect(this.x, this.y, this.wh, this.wh);
        }

        if (this.isEndPoint) {
            ctx.fillStyle = this.endPointColor
            ctx.fillRect(this.x, this.y, this.wh, this.wh);
        }

        if (this.isStartPoint) {
            ctx.fillStyle = this.startPointColor
            ctx.fillRect(this.x, this.y, this.wh, this.wh);
        }

        ctx.beginPath();
        if (this.walls[0]) {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.wh, this.y);
        }

        if (this.walls[1]) {
            ctx.moveTo(this.x + this.wh, this.y);
            ctx.lineTo(this.x + this.wh, this.y + this.wh);
        }

        if (this.walls[2]) {
            ctx.moveTo(this.x + this.wh, this.y + this.wh);
            ctx.lineTo(this.x, this.y + this.wh);
        }

        if (this.walls[3]) {
            ctx.moveTo(this.x, this.y + this.wh);
            ctx.lineTo(this.x, this.y);
        }
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
    }
}

