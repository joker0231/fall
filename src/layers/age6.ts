class Age6 extends Layers {

    constructor() {
        super();
        //加载组内容
        // ["6岁", "全局"].forEach(group_name => {
        //     RES.getGroupByName(group_name).forEach(item => {
        //         console.log(item);

        //         let texture = RES.getRes(item.name);
        //         let bitmap = new egret.Bitmap(texture);
        //         bitmap.x = bitmap.y = 0;
        //         bitmap.width = 720;
        //         bitmap.height = 1280;
        //         this.names.push(item.name);
        //         this.showing.push(bitmap);
        //     });
        // });

    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {

        console.log("age 6")
        this.callback = callback;
        this.parentObject = thisObject;
        this.progress0();
    }

    private progress0() {
        console.log("progress0");
        let show1 = this.getBitMapByName("2.1_jpg");

        this.addChild(show1);
        show1.alpha = 0;
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .call(this.removeTweens, this, [show1]);

        let event: Function;
        event = (e: egret.TouchEvent) => {
            console.log(e.stageX, e.stageY);
            if (this.inRect(e.stageX, e.stageY, 542, 991, 88, 97)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.progress1();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);

    }
    private progress1() {
        console.log("progress1");
        let show1 = this.getBitMapByName("2.1_jpg");
        let show2 = this.getBitMapByName("2.2_jpg");

        this.addChildAt(show2, 0);
        show2.alpha = 1;
        let tween1 = this.createTween(show1);
        tween1.to({ "alpha": 0 }, 1000)
            .wait(2000)
            .call(() => {
                this.removeTweens(show1);
                this.progress2();
            })
    }

    private progress2() {
        console.log("progress2");
        let show1 = this.getBitMapByName("2.2_jpg");
        let show2 = this.getBitMapByName("2.3_jpg");

        show2.x = show2.width;
        this.addChild(show2);
        let tween1 = this.createTween(show1);
        let tween2 = this.createTween(show2);
        let movetime = 500;
        tween1.to({ "x": -show2.width }, movetime)
            .call(this.removeTweens, this, [show1]);
        tween2.to({ "x": 0 }, movetime)
            .call(this.removeTweens, this, [show2]);

        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inRect(e.stageX, e.stageY, 80, 350, 340, 455)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.progress3();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);

    }

    private progress3() {
        console.log("progress3");
        let show1 = this.getBitMapByName("2.3_jpg");
        let show2 = this.getBitMapByName("2.4_jpg");

        this.addChild(show2);
        show2.alpha = 0;
        let tween1 = this.createTween(show2);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.progress4, this)
            .call(this.removeTweens, this, [show2])
    }

    private progress4() {
        console.log("progress4");
        let show1 = this.getBitMapByName("2.4_jpg");
        let show2 = this.getBitMapByName("2.5_jpg");
        this.addChild(show2);
        show2.alpha = 0;
        let tween1 = this.createTween(show2);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.progress5, this)
            .call(this.removeTweens, this, [show2]);
    }

    private progress5() {
        console.log("progress5");
        while (this.$children.length > 1) {
            this.removeChildAt(0);
        }
        let show1 = this.getBitMapByName("2.5_jpg");
        let show2 = this.getBitMapByName("2.2_2_jpg");
        this.addChild(show2);

        show2.alpha = 0;
        show2.x = 0;
        let tween1 = this.createTween(show2);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.progress6, this)
            .call(this.removeTweens, this, [show2]);
    }
    private progress6() {
        console.log("progress6");
        let show1 = this.getBitMapByName("2.2_2_jpg");
        let show2 = this.getBitMapByName("2.7_jpg");
        // this.addChild(show2);
        // console.log("a")
        // show1.y = -92
        // show2.alpha = 0;
        // this.createTween(show1)
        //     .to({ "y": -92 }, 500)
        //     .call(() => {
        //         console.log("b")
        //         this.createTween(show1)
        //             .to({ "alpha": 0 }, 1000)
        //             .call(this.removeTweens, this, [show1]);
        //     }, this)
        //     .wait(1500)
        //     .call(this.progress7, this)
        //     .call(this.removeTweens, this, [show1])
        this.addChild(show2);
        show2.alpha = 0;
        this.createTween(show2)
            .to({ "alpha": 1 }, 1000)
            .wait(1500)
            .call(this.progress7, this)
            .call(this.removeTweens, this, [show2]);
    }
    private progress7() {
        console.log("progress7");
        let show1 = this.getBitMapByName("2.7_jpg");
        let show2 = this.getBitMapByName("2.8_jpg");
        let left = this.getBitMapByName("ice_cream.2_png");
        let right = this.getBitMapByName("ice_cream.1_png");
        show2.x = show2.width;
        left.alpha = right.alpha = 0;
        let tween1 = this.createTween(show1);
        let tween2 = this.createTween(show2);
        let movetime = 500;
        let visible = [false, false];

        tween1.to({ "x": -show2.width }, movetime);
        tween2.to({ "x": 0 }, movetime)
            .call(this.removeTweens, this, [show1]);

        this.addChild(show2);
        this.addChild(left);
        this.addChild(right);

        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (!visible[0] && this.inRect(e.stageX, e.stageY, 634, 479, 78, 89)) {
                this.createTween(left)
                    .to({ "alpha": 1 }, 500)
                    .call(this.removeTweens, this, [left]);
                visible[0] = true;
            }
            else if (!visible[1] && this.inRect(e.stageX, e.stageY, 106, 620, 92, 87)) {
                this.createTween(right)
                    .to({ "alpha": 1 }, 500)
                    .call(this.removeTweens, this, [right]);
                visible[1] = true;
            }
            if (visible[0] && visible[1]) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
                this.progress8();
            }
        };
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);

    }
    private progress8() {
        console.log("progress8");
        let show2 = this.getBitMapByName("2.11_jpg");
        this.addChild(show2);
        show2.alpha = 0;
        this.createTween(show2)
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.progress9, this)
            .call(this.removeTweens, this, [show2]);
        
    }
    private progress9() {
        console.log("progress9");
        
        let show1 = this.getBitMapByName("2.11_jpg");
        let show2 = this.getBitMapByName("2.12_jpg");

        this.addChild(show2);
        show2.alpha = 0;
        let tween1 = this.createTween(show2);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.progress10, this)
            .call(this.removeTweens, this, [show2])
    }
    private progress10() {
        console.log("progress10");
       
        let show1 = this.getBitMapByName("2.12_jpg");
        let show2 = this.getBitMapByName("2.13_jpg");

        this.addChild(show2);
        show2.alpha = 0;
        let tween1 = this.createTween(show2);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.callback, this.parentObject);
    }
}