
class Rexagotchi {
    constructor(
        public name: string,
        public age: number,
        public hunger: number,
        public sleepiness: number,
        public boredom: number,
        public alive: boolean,
        public image: string,
        public interval: any
    ) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.alive = alive;
        this.image = image;
        this.interval = interval;
    }

    public feed() {
        this.hunger -= 1;
    }

    public sleep(time: number) {
        this.sleepiness -= time;
    }

    public play() {
        this.boredom -= 1;
    }

    public die() {
        this.alive = false;
    }

    public ageUp() {
        this.age += 1;
    }

    public update() {
        this.hunger += Math.floor(Math.random() * 3) + 1;
        this.sleepiness += Math.floor(Math.random() * 3) + 1;
        this.boredom += Math.floor(Math.random() * 3) + 1;
    }

    public checkAlive() {
        if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
            this.die();
        }
    }
    
}
  export default Rexagotchi;
  