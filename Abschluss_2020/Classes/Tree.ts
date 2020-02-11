namespace Endaufgabe {
    export class Tree extends Everything {

        constructor() {
            super();
            this.x = (Math.random() * 300 + 300);
            this.y = (Math.random() * 300 + 550);
        }
        draw(): void {

            crc2.fillStyle = "#9d4e15";
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y - 12.5);
            crc2.lineTo(this.x + 5, this.y - 12.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#004d00";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y - 10);
            crc2.lineTo(this.x, this.y - 55);
            crc2.lineTo(this.x + 30, this.y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "#004d00";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 27, this.y - 27.5);
            crc2.lineTo(this.x, this.y - 75);
            crc2.lineTo(this.x + 27, this.y - 27.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "#004d00";
            crc2.lineWidth = 1;
        }

    }
}