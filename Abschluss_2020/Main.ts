namespace Endaufgabe {
    window.addEventListener("load", preInit);
    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;
    let fps: number = 25;
    export let score: number = 0;
    let snowFlakes: Everything[] = [];
    export let birds: Bird[] = [];
    export let snowballs: Snowball[] = [];
    let snowballsLeft: number = 15;
    export let kekse: Keks[] = [];
    let kekseLeft: number = 3;
    let ended: boolean = false;


    function preInit(): void {
        document.getElementById("start").addEventListener("click", init);
        document.getElementById("restart").addEventListener("click", init);
    }

    function init(_event: Event): void {

        fps = 25;
        score = 0;
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


        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";
        document.getElementById("score").innerHTML = "Score: " + score;

        document.getElementsByTagName("canvas")[0].addEventListener("click", handleMouseEvent);

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        drawTrees();
        drawBirdhouse();



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
        let scoreinput: HTMLInputElement = document.getElementById("scoreinput") as HTMLInputElement;
        scoreinput.value = String(score);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("endscreen").style.display = "block";
        document.getElementsByTagName("canvas")[0].style.display = "none";
    }



    function handleMouseEvent(_e: MouseEvent): void {
        let key: number = _e.which;
        let x: number = _e.clientX;
        let y: number = _e.clientY;

        if (key == 1) {

            createSnowball(x, y);
        }

        else if (key == 32) {
            createCookie(x, y);

        }


    }

    function createCookie(_x: number, _y: number): void {
    }

    function createSnowball(_x: number, _y: number): void {
        if (snowballsLeft == 0) {
            if (snowballs.length == 0)
                endScreen();
        }
        snowballsLeft--;
        document.getElementById("snowballs").innerHTML = snowballsLeft + " Snowballs left";

        let snowball: Snowball = new Snowball();
        snowball.x = _x;
        snowball.y = _y;
        snowballs.push(snowball);
    }

    function drawSky(): void {
        console.log("landscape");
        crc2.fillStyle = "#00FFFF";
        crc2.beginPath();
        crc2.moveTo(0, 520);
        crc2.bezierCurveTo(280, 350, 380, 410, 560, 430);
        crc2.lineTo(820, 0);
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
        for (let i: number = 0; i < 8; i++) {
            let tree: Everything = new Tree();
            tree.draw();
        }
    }

    function drawBirdhouse(): void {
        crc2.save();
        crc2.translate(750, 300);

        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(-40, 0);
        crc2.lineTo(-40, -100);
        crc2.lineTo(0, -150);
        crc2.lineTo(50, -100);
        crc2.lineTo(50, 0);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.moveTo(0, -55);
        crc2.arc(0, -70, 20, 0, Math.PI * 2);
        crc2.fill();
        crc2.lineWidth = 5;
        crc2.restore();
    }


    function update(): void {
        if (birds.every(isTerminated)) {
            endScreen();
        }

        if (ended == true)
            return;
        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);


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