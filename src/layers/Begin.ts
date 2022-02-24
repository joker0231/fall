class Begin extends Layers {
    constructor() {
        super();
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        console.log("begin !")
        this.callback = callback;
        this.parentObject = thisObject;
        this.progress0();
    }

    private progress0() {
        let show1 = this.getBitMapByName("0.1_jpg");

        this.addChild(show1);
        show1.alpha = 1;
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.progress1, this)
            .call(this.removeTweens, this, [show1]);
    };


    private progress1() {
        let show1 = this.getBitMapByName("0.1_jpg");
        let show2 = this.getBitMapByName("0.2_jpg");
        show2.alpha = 0;
        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.progress2, this)
            .call(this.removeChild, this, [show1])
            .call(this.removeTweens, this, [show2]);
    }


    private progress2() {
        let show1 = this.getBitMapByName("0.2_jpg");
        let show2 = this.getBitMapByName("0.3_jpg");
        show2.alpha = 0;
        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, 200)
            .call(this.removeChild, this, [show1])
            .call(this.removeTweens, this, [show2]);
        show2.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
            if (this.inRect(e.stageX, e.stageY, 180, 853, 359, 132)) {
                this.addChildAt(this.getBitMapByName("0.1_jpg"), 0);
                this.createTween(show2)
                    .to({ "alpha": 0 }, 500)
                    .wait(500)
                    .call(this.callback, this.parentObject);
            }
        }, this);
    }
}