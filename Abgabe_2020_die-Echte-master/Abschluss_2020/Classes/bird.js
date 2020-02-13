var Endaufgabe;
(function (Endaufgabe) {
    class Bird extends Endaufgabe.Moving {
        constructor() {
            super();
            this.x = (Math.random() * 300 + 0);
            this.y = (Math.random() * 300 + 490);
            this.speed = (Math.random() + 0.5) * 5;
            /* this.xKeks =
                 this.yKeks = */
        }
        // new draw
        draw() {
            Endaufgabe.crc2.save();
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.translate(this.x, this.y);
            Endaufgabe.crc2.ellipse(0, 0, 20, 20, 5, 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "lightgreen";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "black";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "orange";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.scale(7, 6);
            Endaufgabe.crc2.translate(-1, -1);
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.moveTo(0, 0);
            Endaufgabe.crc2.lineTo(2, -5);
            Endaufgabe.crc2.lineTo(2, 2);
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fillStyle = "lightgreen";
            Endaufgabe.crc2.fill();
            //  crc2.scale(7, 6);
            Endaufgabe.crc2.translate(-1, -3);
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.moveTo(0, 0);
            Endaufgabe.crc2.lineTo(0, 5);
            Endaufgabe.crc2.lineTo(2, 2);
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fillStyle = "lightgreen";
            Endaufgabe.crc2.fill();
            /*  crc2.beginPath();
              crc2.moveTo(5.5, 3.5);
              crc2.lineTo(6.5, 1.5);
              crc2.lineTo(6.5, 2);
              crc2.closePath();
              crc2.fillStyle = "black";
              crc2.fill();*/
            Endaufgabe.crc2.restore();
        }
        move() {
            this.x -= this.speed;
            if (this.x < 0) {
                this.x = Endaufgabe.canvas.width;
            }
            if (Endaufgabe.vogelfutterLiegt == true && (this.x == Endaufgabe.vogelfutter.x)) {
                this.x += this.speed;
                //this.x += this.speed;
                //this.x = vogelfutter.x;
            }
            /*
            else if (vogelfutterLiegt == true) {
                this.moveToFood();
            }
            */
        }
        moveToFood() {
            console.log("angelockt");
        }
    }
    Endaufgabe.Bird = Bird;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=bird.js.map