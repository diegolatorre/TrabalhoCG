function Balao(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
}

function newBalao(x, y, baloes) {
    var balao = new Balao(x, y);
    baloes.push(balao);
}

Balao.prototype.balaoRun = function (v) {
    this.y += v;
}

Balao.prototype.balaoDraw = function (ctx, v) {
    this.y += v;
    ctx.beginPath();
    ctx.lineWeight = 1;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.drawImage(imgBalao, this.x - 25, this.y - 25, 50, 50);
    ctx.closePath();
}


Balao.prototype.balaoOutScreen = function () {
    if (this.y > canvas.height) {
        this.removeBalao();
        perdeVida();
    }
}

Balao.prototype.removeBalao = function (ctx) {
    var x = fases[countFase].baloes.indexOf(this);
    fases[countFase].baloes[x] = null;
}

Balao.prototype.removeBalaoImpacto = function (ctx) {
    var x = fases[countFase].baloes.indexOf(this);
    fases[countFase].baloes[x] = null;
    ctx.drawImage(imgPow, this.x - 12, this.y - 12, 40, 40);
}