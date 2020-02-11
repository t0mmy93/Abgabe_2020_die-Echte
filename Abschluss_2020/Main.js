var Endaufgabe;
(function (Endaufgabe) {
    window.addEventListener("load", preInit);
    let imgData;
    let fps = 25;
    Endaufgabe.score = 0;
    let timer = 60;
    let snowFlakes = [];
    Endaufgabe.birds = [];
    Endaufgabe.snowballs = [];
    let snowballsLeft = 15;
    Endaufgabe.kekse = [];
    let kekseLeft = 3;
    let ended = false;
    let timercanceller;
    function preInit() {
        document.getElementById("start").addEventListener("click", init);
        document.getElementById("restart").addEventListener("click", init);
    }
    function init(_event) {
        fps = 25;
        Endaufgabe.score = 0;
        timer = 60;
        snowFlakes = [];
        Endaufgabe.birds = [];
        Endaufgabe.snowballs = [];
        snowballsLeft = 15;
        ended = false;
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("overlay").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "block";
        ended = false;
        //  timercanceller = setInterval(decreaseTimer, 1000);
        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        document.getElementById("score").innerHTML = "Score: " + Endaufgabe.score;
        document.getElementsByTagName("canvas")[0].addEventListener("click", handleMouseEvent);
        let canvas = document.getElementsByTagName("canvas")[0];
        Endaufgabe.crc2 = canvas.getContext("2d");
        Endaufgabe.crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        drawTrees();
        drawBirdhouse();
        imgData = Endaufgabe.crc2.getImageData(0, 0, 820, 840);
        for (let i = 0; i < 10; i++) {
            let bird = new Endaufgabe.Bird();
            Endaufgabe.birds.push(bird);
        }
        for (let i = 0; i < 150; i++) {
            let snowFlake = new Endaufgabe.SnowFlake();
            snowFlakes.push(snowFlake);
        }
        update();
    }
    function endScreen() {
        ended = true;
        clearInterval(timercanceller);
        let scoreinput = document.getElementById("scoreinput");
        scoreinput.value = String(Endaufgabe.score);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("endscreen").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "none";
    }
    function decreaseTimer() {
        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        if (timer <= 0) {
            endScreen();
        }
        else {
            timer--;
        }
    }
    function handleMouseEvent(_e) {
        let key = _e.which;
        let x = _e.clientX;
        let y = _e.clientY;
        if (key == 1) {
            createSnowball(x, y);
        }
        else if (key == 32) {
            createCookie(x, y);
        }
    }
    function createCookie(_x, _y) {
    }
    function createSnowball(_x, _y) {
        if (snowballsLeft == 0) {
            if (Endaufgabe.snowballs.length == 0)
                endScreen();
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        let snowball = new Endaufgabe.Snowball();
        snowball.x = _x;
        snowball.y = _y;
        Endaufgabe.snowballs.push(snowball);
    }
    function drawSky() {
        console.log("landscape");
        Endaufgabe.crc2.fillStyle = "#00FFFF";
        Endaufgabe.crc2.beginPath();
        Endaufgabe.crc2.moveTo(0, 520);
        Endaufgabe.crc2.bezierCurveTo(280, 350, 380, 410, 560, 430);
        Endaufgabe.crc2.lineTo(820, 0);
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
        for (let i = 0; i < 8; i++) {
            let tree = new Endaufgabe.Tree();
            tree.draw();
        }
    }
    function drawBirdhouse() {
        Endaufgabe.crc2.save();
        Endaufgabe.crc2.translate(750, 300);
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
    function update() {
        if (Endaufgabe.birds.every(isTerminated)) {
            endScreen();
        }
        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        Endaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < Endaufgabe.birds.length; i++) {
            let bird = Endaufgabe.birds[i];
            bird.move();
            bird.draw();
        }
        for (let i = 0; i < 150; i++) {
            let snowFlake = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();
        }
        for (let i = 0; i < Endaufgabe.snowballs.length; i++) {
            let snowball = Endaufgabe.snowballs[i];
            snowball.move();
            snowball.draw();
        }
    }
    function isTerminated(s) {
        return s.state == "terminated";
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=Main.js.map