namespace Endaufgabe {
    export class Keks extends Everything {
        updatesTillImpact: number;

        constructor() {
            super();
            this.updatesTillImpact = 10;
        }
        



        move(): void {
            this.updatesTillImpact--;
            if (this.updatesTillImpact == 0) {
                for (let i: number = 0; i < snowballs.length; i++) {
                    if (this == kekse[i])
                        snowballs.splice(i, 1);
                }
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

    }
}
