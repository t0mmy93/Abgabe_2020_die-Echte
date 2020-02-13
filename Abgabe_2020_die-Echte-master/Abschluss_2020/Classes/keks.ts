namespace Endaufgabe {
    export class Vogelfutter extends Everything {

        updatesTillImpact: number;
        img: HTMLImageElement;


        constructor() {
            super();
            this.img = new Image();
            this.img.src = "Classes/keks.png";
            this.updatesTillImpact = 300;
        }

        move(): void {

            if (this.updatesTillImpact == 0) {
                console.log("Keks weg");
                vogelfutterLiegt = false;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.drawImage(this.img, this.x, this.y);
            crc2.closePath();

            this.updatesTillImpact--;
        }

    }
}

