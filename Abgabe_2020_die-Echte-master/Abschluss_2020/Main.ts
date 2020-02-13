namespace Endaufgabe {
    window.addEventListener("load", preInit);

    // globale Variablen
    export let crc2: CanvasRenderingContext2D;

    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let fps: number = 25;
    export let score: number = 0;
    let timer: number = 60;
    let snowFlakes: Everything[] = [];
    export let birds: Bird[] = [];
    export let snowballs: Snowball[] = [];

    let snowball: Snowball;
    let snowballsLeft: number = 15;

    export let vogelfutter: Vogelfutter;
    let vogelfutters: Vogelfutter[] = [];
    let vogelfutterGeworfen: boolean = false;
    export let vogelfutterLiegt: boolean = false;

    let ended: boolean = false;
    //  let timercanceller: NodeJS.Timer;

    function preInit(): void {
        document.getElementById("start").addEventListener("click", init);
        document.getElementById("restart").addEventListener("click", init);
    }

    function init(_event: Event): void {

        fps = 25;
        score = 0;
        timer = 60;
        snowFlakes = [];
        birds = [];
        snowballs = [];
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
        document.getElementById("score").innerHTML = "Score: " + score;

        document.getElementsByTagName("canvas")[0].addEventListener("click", handleMouseEvent);

        document.body.addEventListener("keydown", handleKeyboardEvent);

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawStatischeElemente();


        imgData = crc2.getImageData(0, 0, 820, 840);

        for (let i: number = 0; i < 10; i++) {
            let bird: Bird = new Bird();
            birds.push(bird);
        }

        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Moving = new SnowFlake();
            snowFlakes.push(snowFlake);
        }

        update();
    }

    function endScreen(): void {
        ended = true;
        //  clearInterval(timercanceller);
        let scoreinput: HTMLInputElement = document.getElementById("scoreinput") as HTMLInputElement;
        scoreinput.value = String(score);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("endscreen").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "none";
    }

    function decreaseTimer(): void {

        document.getElementById("timer").innerHTML = "Timer: " + timer + "sec";
        if (timer <= 0) {
            endScreen();
        } else {
            timer--;
        }
    }

    //Handler für Events
    function handleMouseEvent(_e: MouseEvent): void {
        let key: number = _e.which;
        let x: number = _e.clientX;
        let y: number = _e.clientY;

        if (key = 1) {
            createSnowball(x, y);
        }
    }

    function handleKeyboardEvent(_e: KeyboardEvent): void {
        let key: number = _e.which;

        if (key == 75) {
            createVogelfutter();
        }

    }


    // Vogelfutter erstellen
    function createVogelfutter(): void {

        if (vogelfutterGeworfen == false) {
            console.log("werfe Vogelfutter");
            vogelfutterGeworfen = true;
            console.log("Vogelfutter liegt");
            vogelfutterLiegt = true;
            console.log("male Vogelfutter");

            let vogelfutter: Vogelfutter = new Vogelfutter();
            vogelfutter.x = canvas.width * 0.5;
            vogelfutter.y = 700;
            vogelfutters.push(vogelfutter);
            console.log("pushe Vogelfutter");
        }

        else {
            console.log("kein Vogelfutter mehr");
        }
    }

    // Schneeball erstellen
    function createSnowball(_x: number, _y: number): void {
        if (snowballsLeft == 0) {
            if (snowballs.length == 0)
                endScreen();
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";

        snowball = new Snowball();
        snowball.x = _x;
        snowball.y = _y;
        snowballs.push(snowball);
    }

    // update canvas
    function update(): void {
        if (birds.every(isTerminated)) {
            endScreen();
        }

        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < vogelfutters.length; i++) {
            let cookie: Vogelfutter = vogelfutters[i];

            if (vogelfutterGeworfen == true && vogelfutterLiegt == true) {
                cookie.draw();
                cookie.move();
            }
        }

        for (let i: number = 0; i < birds.length; i++) {
            let bird: Bird = birds[i];
            bird.move();
            bird.draw();
        }

        for (let i: number = 0; i < 150; i++) {
            let snowFlake: Everything = snowFlakes[i];
            snowFlake.move();
            snowFlake.draw();
        }

        for (let i: number = 0; i < snowballs.length; i++) {
            let snowball: Snowball = snowballs[i];
            snowball.move();
            snowball.draw();
        }

    }


    function isTerminated(s: Bird): boolean {
        return s.state == "terminated";
    }
}