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
    let snowball;
    let snowballsLeft = 15;
    let vogelfutters = [];
    let vogelfutterGeworfen = false;
    Endaufgabe.vogelfutterLiegt = false;
    let ended = false;
    //  let timercanceller: NodeJS.Timer;
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
        document.body.addEventListener("keydown", handleKeyboardEvent);
        Endaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Endaufgabe.crc2 = Endaufgabe.canvas.getContext("2d");
        Endaufgabe.crc2.clearRect(0, 0, Endaufgabe.canvas.width, Endaufgabe.canvas.height);
        Endaufgabe.drawStatischeElemente();
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
        //  clearInterval(timercanceller);
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
    //Handler für Events
    function handleMouseEvent(_e) {
        let key = _e.which;
        let x = _e.clientX;
        let y = _e.clientY;
        if (key = 1) {
            createSnowball(x, y);
        }
    }
    function handleKeyboardEvent(_e) {
        let key = _e.which;
        if (key == 75) {
            createVogelfutter();
        }
    }
    // Vogelfutter erstellen
    function createVogelfutter() {
        if (vogelfutterGeworfen == false) {
            console.log("werfe Vogelfutter");
            vogelfutterGeworfen = true;
            console.log("Vogelfutter liegt");
            Endaufgabe.vogelfutterLiegt = true;
            console.log("male Vogelfutter");
            let vogelfutter = new Endaufgabe.Vogelfutter();
            vogelfutter.x = Endaufgabe.canvas.width * 0.5;
            vogelfutter.y = 700;
            vogelfutters.push(vogelfutter);
            console.log("pushe Vogelfutter");
        }
        else {
            console.log("kein Vogelfutter mehr");
        }
    }
    // Schneeball erstellen
    function createSnowball(_x, _y) {
        if (snowballsLeft == 0) {
            if (Endaufgabe.snowballs.length == 0)
                endScreen();
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        snowball = new Endaufgabe.Snowball();
        snowball.x = _x;
        snowball.y = _y;
        Endaufgabe.snowballs.push(snowball);
    }
    // update canvas
    function update() {
        if (Endaufgabe.birds.every(isTerminated)) {
            endScreen();
        }
        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        Endaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < vogelfutters.length; i++) {
            let cookie = vogelfutters[i];
            if (vogelfutterGeworfen == true && Endaufgabe.vogelfutterLiegt == true) {
                cookie.draw();
                cookie.move();
            }
        }
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