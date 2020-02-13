var Endaufgabe;
(function (Endaufgabe) {
    function drawStatischeElemente() {
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        drawTrees();
        drawBirdhouse();
    }
    Endaufgabe.drawStatischeElemente = drawStatischeElemente;
    function drawSky() {
        console.log("landscape");
        Endaufgabe.crc2.fillStyle = "#00FFFF";
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(0, 520);
        Endaufgabe.crc2.bezierCurveTo(280, 350, 380, 410, Endaufgabe.canvas.width, 510);
        Endaufgabe.crc2.lineTo(Endaufgabe.canvas.width, 0);
        Endaufgabe.crc2.lineTo(0, 0);
        Endaufgabe.crc2.closePath();
        Endaufgabe.crc2.lineWidth = 2;
        Endaufgabe.crc2.stroke();
        Endaufgabe.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        Endaufgabe.crc2.fillStyle = "#ffff00";
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        Endaufgabe.crc2.fill();
    }
    function drawCloud() {
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(35, 170);
        Endaufgabe.crc2.arc(35, 170, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(50, 160, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(50, 180, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.moveTo(65, 170);
        Endaufgabe.crc2.arc(65, 170, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.fillStyle = "#ffffff";
        Endaufgabe.crc2.fill();
    }
    function drawCloud2() {
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(135, 250);
        Endaufgabe.crc2.arc(135, 250, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(150, 240, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(150, 260, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.moveTo(165, 250);
        Endaufgabe.crc2.arc(165, 250, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.fillStyle = "#ffffff";
        Endaufgabe.crc2.fill();
    }
    function drawCloud3() {
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(250, 80);
        Endaufgabe.crc2.arc(250, 80, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(265, 70, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.arc(265, 90, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.moveTo(280, 80);
        Endaufgabe.crc2.arc(280, 80, 20, 0, 2 * Math.PI);
        Endaufgabe.crc2.fillStyle = "#ffffff";
        Endaufgabe.crc2.fill();
    }
    function drawTrees() {
        for (let i = 0; i < 15; i++) {
            let tree = new Endaufgabe.Tree();
            tree.draw();
        }
    }
    function drawBirdhouse() {
        Endaufgabe.crc2.save();
        Endaufgabe.crc2.translate(750, 550);
        Endaufgabe.crc2.fill();
        Endaufgabe.crc2.fillStyle = "#AA6633";
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(-35, 0);
        Endaufgabe.crc2.lineTo(-35, -83);
        Endaufgabe.crc2.lineTo(0, -110);
        Endaufgabe.crc2.lineTo(35, -83);
        Endaufgabe.crc2.lineTo(35, 0);
        Endaufgabe.crc2.closePath();
        Endaufgabe.crc2.fill();
        Endaufgabe.crc2.fillStyle = "rgba(5,5,5,0.7)";
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(0, -55);
        Endaufgabe.crc2.arc(0, -55, 18, 0, Math.PI * 2);
        Endaufgabe.crc2.fill();
        Endaufgabe.crc2.lineWidth = 5;
        Endaufgabe.crc2.restore();
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=statischeElemente.js.map