var Endaufgabe;
(function (Endaufgabe) {
    class Snowball extends Endaufgabe.Everything {
        constructor() {
            super();
            this.updatesTillImpact = 10;
        }
        hasHit(bird) {
            if (bird.x - 25 < this.x - 20) {
                // bird left of snowball
                return false;
            }
            if (bird.x - 25 > this.x + 20) {
                // bird right of snowball
                return false;
            }
            if (bird.y + 20 < this.y - 20) {
                // bird over of snowball
                return false;
            }
            if (bird.y + 20 > this.y + 20) {
                // bird under of snowball
                return false;
            }
            return true;
        }
        move() {
            this.updatesTillImpact--;
            if (this.updatesTillImpact == 0) {
                for (let i = 0; i < Endaufgabe.snowballs.length; i++) {
                    if (this == Endaufgabe.snowballs[i])
                        Endaufgabe.snowballs.splice(i, 1);
                }
                this.detectHit();
            }
        }
        draw() {
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.strokeStyle = "#000000";
            Endaufgabe.crc2.lineWidth = 1;
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.arc(this.x, this.y, 10 + (this.updatesTillImpact), 0, 2 * Math.PI);
            Endaufgabe.crc2.fillStyle = "#ffffff";
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.stroke();
        }
        detectHit() {
            for (let i = 0; i < Endaufgabe.birds.length; i++) {
                if (this.hasHit(Endaufgabe.birds[i])) {
                    Endaufgabe.birds[i].state = "terminated";
                    Endaufgabe.birds.splice(i, 1);
                    Endaufgabe.score += Math.floor(Endaufgabe.birds[i].speed * 150);
                    document.getElementById("score").innerHTML = "Score: " + Endaufgabe.score;
                }
            }
        }
    }
    Endaufgabe.Snowball = Snowball;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=Snowball.js.map