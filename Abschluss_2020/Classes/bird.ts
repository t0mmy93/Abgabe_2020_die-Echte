namespace Endaufgabe {
    
    export class Bird extends Moving {

        state: string;

        constructor() {
            super();
            this.state = "down";
            this.x = (Math.random() * 300 + 0);
            this.y = (Math.random() * 300 + 490);
            this.speed = Math.random() + 0.5;
            /* this.xKeks =
                 this.yKeks = */
        }



        // new draw
        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);
            crc2.ellipse(0, 0, 20, 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(18, 2, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(20, 0, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.closePath();

            crc2.scale(7, 6);
            crc2.translate(-1, -1);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(2, -5);
            crc2.lineTo(2, 2);
            crc2.closePath();
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            //  crc2.scale(7, 6);
            crc2.translate(-1, -3);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 5);
            crc2.lineTo(2, 2);
            crc2.closePath();
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            /*  crc2.beginPath();
              crc2.moveTo(5.5, 3.5);
              crc2.lineTo(6.5, 1.5);
              crc2.lineTo(6.5, 2);
              crc2.closePath();
              crc2.fillStyle = "black";
              crc2.fill();*/

            crc2.restore();


        }

        move(): void {
            if (this.state == "down") {
                this.moveDown();
            }


            else if (this.state == "up") {
                this.moveUp();
            }
        }

        moveDown(): void {

            this.x -= this.speed * 5;
            this.y += this.speed * 2;

            if (this.x < 0) {
                this.state = "up";
            }

        }

        moveUp(): void {

            this.x += this.speed * 5;
            this.y -= this.speed * 2;
            if (this.x > 820) {
                this.state = "down";
            }

        }
        anlocken(): void {
            console.log("eoichj");


        }

    }
}