var Endaufgabe;
(function (Endaufgabe) {
    class Tree extends Endaufgabe.Everything {
        constructor() {
            super();
            this.x = (Math.random() * 300 + 300);
            this.y = (Math.random() * 300 + 550);
        }
        draw() {
            Endaufgabe.crc2.fillStyle = "#9d4e15";
            Endaufgabe.crc2.strokeStyle = "#9d4e15";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.moveTo(this.x + 5, this.y + 7.5);
            Endaufgabe.crc2.lineTo(this.x - 5, this.y + 7.5);
            Endaufgabe.crc2.lineTo(this.x - 5, this.y - 12.5);
            Endaufgabe.crc2.lineTo(this.x + 5, this.y - 12.5);
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
            Endaufgabe.crc2.fillStyle = "#008000";
            Endaufgabe.crc2.strokeStyle = "#004d00";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.moveTo(this.x - 30, this.y - 10);
            Endaufgabe.crc2.lineTo(this.x, this.y - 55);
            Endaufgabe.crc2.lineTo(this.x + 30, this.y - 10);
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
            Endaufgabe.crc2.fillStyle = "green";
            Endaufgabe.crc2.strokeStyle = "#004d00";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.moveTo(this.x - 27, this.y - 27.5);
            Endaufgabe.crc2.lineTo(this.x, this.y - 75);
            Endaufgabe.crc2.lineTo(this.x + 27, this.y - 27.5);
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
            Endaufgabe.crc2.fillStyle = "green";
            Endaufgabe.crc2.strokeStyle = "#004d00";
            Endaufgabe.crc2.lineWidth = 1;
        }
    }
    Endaufgabe.Tree = Tree;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=Tree.js.map