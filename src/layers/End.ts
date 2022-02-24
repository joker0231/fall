class End extends Layers {
    constructor() {
        super();
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        console.log("End !")
        this.callback = callback;
        this.parentObject = thisObject;
        this.progress0();
    }

    private progress0() {
        let show1 = this.getBitMapByName("black_jpg");
        this.addChild(show1);
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.progress1, this)
            .call(this.removeTweens, this, [show1]);
    };

    private progress1() {
        console.log("progress1")
        let show2 = this.getBitMapByName("end_png");
        show2.y = this.height;
        show2.height = 2231;
        this.addChild(show2);
        this.createTween(show2)
            .wait(1500)
            .to({ "y": - show2.height }, 100000)
            .call(this.progress2, this);

    }

    private progress2() {
        console.log("progress2")
        let show1 = this.getBitMapByName("0.2_jpg");
        show1.alpha = 0;
        this.addChild(show1);
        this.createTween(show1)
            .to({ alpha: 1 }, 200)
            .call(this.callback, this.parentObject);
    }
}