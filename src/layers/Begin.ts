class Begin extends Layers {
    constructor() {
        super();
        ["开始", "全局"].forEach(group_name => {
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
        console.log("progress1")
        let show1 = this.getBitMapByName("0.1_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                let last = shows[nextindex - 1];
                last.touchEnabled = true;
                last.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
                    if (this.inRect(e.stageX, e.stageY, 180, 853, 359, 132)) {
                        this.createTween(shows[nextindex - 1])
                            .to({ "alpha": 0 }, 500)
                            .wait(500)
                            .call(this.callback, this.parentObject);
                    }
                }, this);
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 1000)
                    .wait(1000)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [nextindex])
                    .call(next, this);
                nextindex++;
            }
        };
        ["0.2_jpg", "0.3_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }
}