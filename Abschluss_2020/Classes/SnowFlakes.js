var Endaufgabe;
(function (Endaufgabe) {
    class SnowFlake extends Endaufgabe.Moving {
        move() {
            this.y += this.speed;
            if (this.y > Endaufgabe.crc2.canvas.height + 2) {
                this.y = -2;
            }
            this.draw();
        }
        draw() {
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.strokeStyle = "#000000";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
        }
    }
    Endaufgabe.SnowFlake = SnowFlake;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=SnowFlakes.js.map