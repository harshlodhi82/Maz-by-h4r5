function Cell(row, col) {
    this.row = row
    this.col = col
    this.wh = myCanavs.width / gridSize
    this.x = this.col * this.wh;
    this.y = this.row * this.wh;
    this.walls = [true, true, true, true] //top, right, bottom, left
    this.visited =  false;
    this.isCrrent  = false

    this.show = () => {
        
        if(this.visited){
            ctx.fillStyle = "red"   
            ctx.fillRect(this.x, this.y, this.wh, this.wh);
        }

        if(this.isCrrent){
            ctx.fillStyle = "black"   
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

        ctx.stroke();
    }
}

