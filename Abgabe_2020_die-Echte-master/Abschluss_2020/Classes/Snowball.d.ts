declare namespace Endaufgabe {
    class Snowball extends Everything {
        updatesTillImpact: number;
        constructor();
        hasHit(bird: Bird): boolean;
        move(): void;
        draw(): void;
        detectHit(): void;
    }
}
