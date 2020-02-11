namespace Endaufgabe {
    export class Keks extends Everything {
        updatesTillImpact: number;

        constructor() {
            super();
            this.updatesTillImpact = 10;
        }

     /*   hasHit(sarah: Bird): boolean {

            if (sarah.x - 25 < this.x - 20) {
                // Sarah left of snowball
                return false;
            }
            if (sarah.x - 25 > this.x + 20) {
                // Sarah right of snowball
                return false;
            }
            if (sarah.y + 20 < this.y - 20) {
                // Sarah over of snowball
                return false;
            }
            if (sarah.y + 20 > this.y + 20) {
                // Sarah under of snowball
                return false;
            }

            return true;
        }*/

        move(): void {
            this.updatesTillImpact--;
            if (this.updatesTillImpact == 0) {
                for (let i: number = 0; i < snowballs.length; i++) {
                    if (this == kekse[i])
                        snowballs.splice(i, 1);
                }
              //  this.detectHit();
            }
        }

        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.arc(this.x, this.y, 10 + (this.updatesTillImpact), 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }

     /*   detectHit(): void {
            for (let i: number = 0; i < birds.length; i++) {
                if (this.hasHit(birds[i])) {
                    birds[i].state = "terminated";
                    birds.splice(i, 1);
    
                    score += Math.floor(birds[i].speed * 150);
                    document.getElementById("score").innerHTML = "Score: " + score;

                }
            }
        } */
    }
}
