export default class Time{
    constructor(){
        this.elapsed = 0;
        this.start = Date.now();
        this.current = this.start;

        this.tick = this.tick.bind(this);

        this.tick();
    }
    tick(){
        this.ticker = window.requestAnimationFrame(this.tick);
        let current = Date.now();

        this.delta = current = this.current;
        this.elapsed = current - this.start;
        this.current = current;

        if(this.delta > 60){
            this.delta = 60;
        }

        window.dispatchEvent(new Event('tick'));
    }
}