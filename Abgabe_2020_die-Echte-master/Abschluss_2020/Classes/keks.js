var Endaufgabe;
(function (Endaufgabe) {
    class Vogelfutter extends Endaufgabe.Everything {
        constructor() {
            super();
            this.img = new Image();
            this.img.src = "Classes/keks.png";
            this.updatesTillImpact = 300;
        }
        move() {
            if (this.updatesTillImpact == 0) {
                console.log("Keks weg");
                Endaufgabe.vogelfutterLiegt = false;
            }
        }
        draw() {
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.drawImage(this.img, this.x, this.y);
            Endaufgabe.crc2.closePath();
            this.updatesTillImpact--;
        }
    }
    Endaufgabe.Vogelfutter = Vogelfutter;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=keks.js.map