namespace Endaufgabe {


    export function drawStatischeElemente(): void {
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        drawTrees();
        drawBirdhouse();
    }

    function drawSky(): void {
        console.log("landscape");
        crc2.fillStyle = "#00FFFF";
        crc2.beginPath();
        crc2.moveTo(0, 520);
        crc2.bezierCurveTo(280, 350, 380, 410, canvas.width, 510);
        crc2.lineTo(canvas.width, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }

    function drawSun(): void {
        console.log("sun");
        crc2.fillStyle = "#ffff00";
        crc2.beginPath();
        crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawCloud(): void {
        crc2.beginPath();
        crc2.moveTo(35, 170);
        crc2.arc(35, 170, 20, 0, 2 * Math.PI);
        crc2.arc(50, 160, 20, 0, 2 * Math.PI);
        crc2.arc(50, 180, 20, 0, 2 * Math.PI);
        crc2.moveTo(65, 170);
        crc2.arc(65, 170, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawCloud2(): void {
        crc2.beginPath();
        crc2.moveTo(135, 250);
        crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        crc2.moveTo(165, 250);
        crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawCloud3(): void {
        crc2.beginPath();
        crc2.moveTo(250, 80);
        crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        crc2.moveTo(280, 80);
        crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawTrees(): void {
        for (let i: number = 0; i < 15; i++) {
            let tree: Everything = new Tree();
            tree.draw();
        }
    }

    function drawBirdhouse(): void {
        crc2.save();
        crc2.translate(750, 550);

        crc2.fill();
        crc2.fillStyle = "#AA6633";
        crc2.beginPath();
        crc2.moveTo(-35, 0);
        crc2.lineTo(-35, -83);
        crc2.lineTo(0, -110);
        crc2.lineTo(35, -83);
        crc2.lineTo(35, 0);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "rgba(5,5,5,0.7)";
        crc2.beginPath();
        crc2.moveTo(0, -55);
        crc2.arc(0, -55, 18, 0, Math.PI * 2);
        crc2.fill();
        crc2.lineWidth = 5;
        crc2.restore();
    }

}