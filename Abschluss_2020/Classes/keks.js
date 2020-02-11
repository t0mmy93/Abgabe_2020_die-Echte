var Endaufgabe;
(function (Endaufgabe) {
    class Keks extends Endaufgabe.Everything {
        constructor() {
            super();
            this.updatesTillImpact = 10;
        }
        move() {
            this.updatesTillImpact--;
            if (this.updatesTillImpact == 0) {
                for (let i = 0; i < Endaufgabe.snowballs.length; i++) {
                    if (this == Endaufgabe.kekse[i])
                        Endaufgabe.snowballs.splice(i, 1);
                }
            }
        }
        draw() {
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.strokeStyle = "#000000";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.arc(this.x, this.y, 10 + (this.updatesTillImpact), 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
        }
    }
    Endaufgabe.Keks = Keks;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=keks.js.map