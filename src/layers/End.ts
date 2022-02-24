class End extends Layers {
    constructor() {
        super();
        ["结束", "全局"].forEach(group_name => {
            RES.getGroupByName(group_name).forEach(item => {
                console.log(item);

                let texture = RES.getRes(item.name);
                let bitmap = new egret.Bitmap(texture);
                bitmap.x = bitmap.y = 0;
                bitmap.width = 720;
                bitmap.height = 1280;
                this.names.push(item.name);
                this.showing.push(bitmap);
            });
        });
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
        show2.alpha = 0;
        show2.height = 2231;
        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, 1000)
            .wait(1500)
            .to({ "y": - show2.height }, 15000)
            .call(this.callback, this.parentObject);
    }
}