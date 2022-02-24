class Movie extends Layers {

    constructor() {
        super();
    }

    private list = [
        //from to period wait
        [1, 2, 200, 800],
        [2, 3, 200, 800],
        [3, 4, 200, 800],
        [4, 1, 200, 800],
        [1, 2, 200, 800],
        [2, 5, 2000, 2000],
        [5, 6, 1000, 1000],
        [6, 8, 200, 2000],
        [8, 9, 200, 2000],
        [9, 10, 200, 2000],
        [10, 11, 200, 2000],
        [11, 19, 200, 500],
        [19, 12, 200, 1000],
        [12, 19, 200, 500],
        [19, 13, 200, 2000],
        [13, 19, 200, 500],
        [19, 14, 200, 2000],
        [14, 15, 200, 3000],
        [15, 16, 200, 3000],
        [16, 17, 200, 3000],
        [17, 18, 200, 3000],
        [18, 19, 1000, 2000],
    ]
    private now = 0;
    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        this.callback = callback;
        this.parentObject = thisObject;
        this.addChild(this.getBitMapByName("1_jpg"));
        this.next();
    }
    private next() {
        if (this.now < this.list.length) {
            let from = this.list[this.now][0];
            let to = this.list[this.now][1];
            let period = this.list[this.now][2];
            let wait = this.list[this.now][3];
            this.now++;

            this.progress(from, to, period, wait);
        } else {
            this.callback.call(this.parentObject);
        }

    }

    private progress(from: number, to: number, period: number, wait: number) {
        console.log(this.now);
        let show1 = this.getBitMapByName(from + "_jpg");
        let show2 = this.getBitMapByName(to + "_jpg");
        show2.alpha = 0;
        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, period)
            .wait(wait)
            .call(this.next, this)
            .call(this.removeChild, this, [show1])
            .call(this.removeTweens, this, [show2]);
    }
}