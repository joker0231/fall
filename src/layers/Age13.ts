class Age13 extends Layers {
    public constructor() {
        super();
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        let p1 = this.getBitMapByName("5_1_jpg");
        this.addChild(p1);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        p1.width = stageW;
        p1.height = stageH;


        let p2: egret.Bitmap = this.getBitMapByName("5_2_jpg");
        this.animation(p2, 1000);
        p2.width = stageW;
        p2.height = stageH;

        let p3: egret.Bitmap = this.getBitMapByName("5_3_jpg");
        p3.width = stageW;
        p3.x = stageW;
        this.animation1(p3, 2300);

        let p4: egret.Bitmap = this.getBitMapByName("5_4_jpg");
        p4.width = stageW;
        this.animation2(p4, 3600);


        var p5 = new eui.Image("5_5_jpg");
        p5.width = 720;
        this.animation2(p5, 4600);
        var group = new eui.Group();
        group.addChild(p5);
        var myScroller = new eui.Scroller();
        myScroller.width = 720;
        myScroller.height = 1280;
        myScroller.viewport = group;
        myScroller.scrollPolicyH = "off";
        this.addChild(myScroller);
        // myScroller.verticalScrollBar.autoVisibility = false;
        // myScroller.verticalScrollBar.visible = false;
        myScroller.addEventListener(eui.UIEvent.CHANGE_END,
            () => {
                if ((myScroller.viewport.scrollV + myScroller.height) >= myScroller.viewport.contentHeight) {
                    this.eat();
                    myScroller.scrollPolicyV = "off";
                }
            },
            this)

        this.callback = callback;
        this.parentObject = thisObject;
    }

    private eat() {
        console.log("eat!")
        let p6: egret.Bitmap = this.getBitMapByName("5_6_png");
        p6.width = 720;
        p6.y = 950;
        p6.alpha = 1;
        console.log("hi")
        this.addChild(p6)
        console.log("hi")
        let p7: egret.Bitmap = this.getBitMapByName("5_7_png");
        p7.width = 720;
        p7.y = 800;
        this.animation2(p7, 1300);

        let p8: egret.Bitmap = this.getBitMapByName("5_8_png");
        p8.width = 720;
        p8.y = 750;
        this.animation2(p8, 2300);

        let person: egret.Bitmap = this.getBitMapByName("5_9_jpg");
        person.width = 720;
        this.animation2(person, 3600);

        let h1: egret.Bitmap = this.getBitMapByName("h1_png");
        h1.x = 280;
        h1.y = 655;
        this.animation2(h1, 3900);

        this.createTween(p6)
            .wait(2500)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress1()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [p6])


    }

    private progress1() {
        this.chew();
        let h2: egret.Bitmap = this.getBitMapByName("h2_png");
        h2.x = 280;
        h2.y = 655;
        this.addChild(h2)

        this.createTween(h2)
            .wait(3200)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress2()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [h2])

    }

    private progress2() {
        this.chew();
        let h2: egret.Bitmap = this.getBitMapByName("h3_png");
        h2.x = 280;
        h2.y = 655;
        this.addChild(h2)
        this.createTween(h2)
            .wait(3200)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress3()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [h2])
    }

    private progress3() {
        this.chew();
        let h2: egret.Bitmap = this.getBitMapByName("h4_png");
        h2.x = 280;
        h2.y = 655;
        this.addChild(h2)
        this.createTween(h2)
            .wait(3200)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress4()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [h2])
    }

    private progress4() {
        this.chew();
        let h2: egret.Bitmap = this.getBitMapByName("m1_png");
        h2.x = 310;
        h2.y = 585;
        this.addChild(h2)
        this.createTween(h2)
            .wait(3200)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress5()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [h2])
    }

    private progress5() {
        this.drink()
        let h2: egret.Bitmap = this.getBitMapByName("m2_png");
        h2.x = 310;
        h2.y = 585;
        this.addChild(h2)
        this.createTween(h2)
            .wait(2000)
            .call(() => {
                let event: Function;
                event = (e: egret.TouchEvent) => {
                    if (this.inArea(e.stageX, e.stageY, 250, 650, 150, 150)) {
                        this.progress6()
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                    else {
                        this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
                    }
                }
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }, this)
            .call(this.removeTweens, this, [h2])
    }

    private progress6() {
        this.drink()
        let c1: egret.Bitmap = this.getBitMapByName("5_10_jpg");
        c1.width = 720;
        this.animation3(c1, 0);
        let c2: egret.Bitmap = this.getBitMapByName("5_9_jpg");
        c2.width = 720;
        this.animation3(c2, 550);
        let h2: egret.Bitmap = this.getBitMapByName("m3_png");
        h2.width = 125;
        h2.x = 310;
        h2.y = 585;
        this.addChild(h2)
        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 0, 0, 720, 1280)) {
                this.animation4(c2, 0)
                this.progress7()
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }
            else {
                this.stage.once(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
    }

    private progress7() {
        let p1: egret.Bitmap = this.getBitMapByName("5_11_jpg");
        p1.width = 720;
        p1.x = 720;
        this.animation1(p1, 0);

        let p2: egret.Bitmap = this.getBitMapByName("5_12_jpg");
        p2.width = 720;
        this.animation2(p2, 1500);

        let p3: egret.Bitmap = this.getBitMapByName("5_13_jpg");
        p3.width = 720;
        this.animation2(p3, 2500);

        let p4: egret.Bitmap = this.getBitMapByName("5_14_jpg");
        p4.width = 720;
        this.animation2(p4, 3500);

        let p5: egret.Bitmap = this.getBitMapByName("5_15_jpg");
        p5.width = 720;
        this.animation2(p5, 4500);
        this.animation5(p5, 6000);

        let p6: egret.Bitmap = this.getBitMapByName("5_16_jpg");
        p6.width = 720;
        this.animation2(p6, 7500);


        this.createTween(p1)
            .wait(8000)
            .call(() => {
                this.progress8();
            }, this)
            .call(this.removeTweens, this, [p1])
    }

    private progress8() {
        let p6: egret.Bitmap = this.getBitMapByName("5_16_jpg");
        p6.width = 720;
        this.animation2(p6, 500);
        this.math();

        let prove: Function;
        prove = () => {
            if (this.right1(this.p3.x, this.p3.y) && this.right2(this.p2.x, this.p2.y)) {
                this.removeChildren();
                this.progress9();
                this.removeEventListener(egret.TouchEvent.TOUCH_END, prove, this)
            }
        }

        this.addEventListener(egret.TouchEvent.TOUCH_END, prove, this)

        this.p1.touchEnabled = true;
        this.p1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this)
        this.p1.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.p2.touchEnabled = true;
        this.p2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown1, this)
        this.p2.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp1, this);
        this.p3.touchEnabled = true;
        this.p3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown2, this)
        this.p3.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp2, this);
        this.p4.touchEnabled = true;
        this.p4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown3, this)
        this.p4.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp3, this);
    }


    private progress9() {
        let p1: egret.Bitmap = this.getBitMapByName("5_17_jpg");
        p1.width = 720;
        this.animation2(p1, 0);
        this.math();
        let prove: Function;
        prove = () => {
            if (this.right1(this.p2.x, this.p2.y) && this.right2(this.p3.x, this.p3.y)) {
                this.removeChildren();
                this.progress10();
                this.removeEventListener(egret.TouchEvent.TOUCH_END, prove, this)
            }
        }

        this.addEventListener(egret.TouchEvent.TOUCH_END, prove, this)

        this.p1.touchEnabled = true;
        this.p1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this)
        this.p1.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.p2.touchEnabled = true;
        this.p2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown1, this)
        this.p2.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp1, this);
        this.p3.touchEnabled = true;
        this.p3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown2, this)
        this.p3.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp2, this);
        this.p4.touchEnabled = true;
        this.p4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown3, this)
        this.p4.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp3, this);
    }

    private progress10() {
        let p1: egret.Bitmap = this.getBitMapByName("5_18_jpg");
        p1.width = 720;
        this.animation2(p1, 0);
        this.math();

        let prove: Function;
        prove = () => {
            if (this.right1(this.p4.x, this.p4.y) && this.right2(this.p3.x, this.p3.y)) {
                this.removeChildren();
                this.middle();
                this.removeEventListener(egret.TouchEvent.TOUCH_END, prove, this)
            }
        }

        this.addEventListener(egret.TouchEvent.TOUCH_END, prove, this)

        this.p1.touchEnabled = true;
        this.p1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this)
        this.p1.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.p2.touchEnabled = true;
        this.p2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown1, this)
        this.p2.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp1, this);
        this.p3.touchEnabled = true;
        this.p3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown2, this)
        this.p3.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp2, this);
        this.p4.touchEnabled = true;
        this.p4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown3, this)
        this.p4.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp3, this);

    }

    private middle() {
        let p1: egret.Bitmap = this.getBitMapByName("5_19_jpg");
        p1.width = 900;
        p1.x = -100;
        p1.y = -250;
        p1.height = 1836;
        this.addChild(p1)
        this.animation6(p1, 500);

        let p2: egret.Bitmap = this.getBitMapByName("5_20_jpg");
        p2.width = 720;
        this.animation2(p2, 2500);

        let p3: egret.Bitmap = this.getBitMapByName("5_21_jpg");
        p3.width = 720;
        this.animation2(p3, 4000);

        let p4: egret.Bitmap = this.getBitMapByName("5_22_jpg");
        p4.width = 720;
        this.animation2(p4, 5500);

        var p5 = new eui.Image("5_23_jpg");
        p5.width = 720;
        this.animation2(p5, 7000);
        var group = new eui.Group();
        group.addChild(p5);
        var myScroller1 = new eui.Scroller();
        myScroller1.width = 720;
        myScroller1.height = 1280;
        myScroller1.viewport = group;
        myScroller1.scrollPolicyH = "off";
        this.addChild(myScroller1);
        // myScroller1.verticalScrollBar.autoVisibility = false;
        // myScroller1.verticalScrollBar.visible = false;
        console.log()
        myScroller1.addEventListener(eui.UIEvent.CHANGE_END,
            function scrooll() {
                if ((myScroller1.viewport.scrollV + myScroller1.height) >= myScroller1.viewport.contentHeight) {
                    myScroller1.scrollPolicyV = "off";
                    this.end()
                }
            },
            this)
    }

    private end() {
        let p1: egret.Bitmap = this.getBitMapByName("5_24_jpg");
        p1.width = 720;
        this.animation2(p1, 500);

        let p2: egret.Bitmap = this.getBitMapByName("5_25_jpg");
        p2.width = 720;
        this.animation2(p2, 2000);

        let p3: egret.Bitmap = this.getBitMapByName("5_26_jpg");
        p3.width = 720;
        this.animation2(p3, 3300);

        let p4: egret.Bitmap = this.getBitMapByName("5_27_jpg");
        p4.width = 720;
        this.animation2(p4, 4600);

        this.createTween(p1)
            .wait(6000)
            .call(() => {
                this.callback.call(this.parentObject);
            }, this)
            .call(this.removeTweens, this, [p1])

    }

    private math() {
        this.p1 = this.getBitMapByName("add_png");
        this.p1.x = 110;
        this.p1.y = 985;
        this.addChild(this.p1)

        this.p2 = this.getBitMapByName("subtract_png");
        this.p2.x = 240;
        this.p2.y = 985;
        this.addChild(this.p2)

        this.p3 = this.getBitMapByName("multiply_png");
        this.p3.x = 370;
        this.p3.y = 985;
        this.addChild(this.p3)

        this.p4 = this.getBitMapByName("divide_png");
        this.p4.x = 500;
        this.p4.y = 985;
        this.addChild(this.p4)
    }

    private p1: egret.Bitmap;
    private p2: egret.Bitmap;
    private p3: egret.Bitmap;
    private p4: egret.Bitmap;

    private drink() {
        var sound = new egret.Sound();
        var url: string = "resource/assets/music/eat.mp3";
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        sound.load(url);
        let c1: egret.Bitmap = this.getBitMapByName("5_10_jpg");
        c1.width = 720;
        this.animation3(c1, 0);
        let c2: egret.Bitmap = this.getBitMapByName("5_9_jpg");
        c2.width = 720;
        this.animation3(c2, 550);
    }


    private chew() {
        var sound = new egret.Sound();
        var url: string = "resource/assets/music/eat.mp3";
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        sound.load(url);
        let c1: egret.Bitmap = this.getBitMapByName("5_10_1jpg");
        c1.width = 720;
        this.animation3(c1, 0);
        let c2: egret.Bitmap = this.getBitMapByName("5_10_2jpg");
        c2.width = 720;
        this.animation3(c2, 350);
        let c3: egret.Bitmap = this.getBitMapByName("5_10_3jpg");
        c3.width = 720;
        this.animation3(c3, 700);
        let c4: egret.Bitmap = this.getBitMapByName("5_10_4jpg");
        c4.width = 720;
        this.animation3(c4, 1050);
        let c5: egret.Bitmap = this.getBitMapByName("5_10_5jpg");
        c5.width = 720;
        this.animation3(c5, 1400);
        let c6: egret.Bitmap = this.getBitMapByName("5_10_6jpg");
        c6.width = 720;
        this.animation3(c6, 1750);
        let c7: egret.Bitmap = this.getBitMapByName("5_10_7jpg");
        c7.width = 720;
        this.animation3(c7, 2100);
        let c8: egret.Bitmap = this.getBitMapByName("5_10_8jpg");
        c8.width = 720;
        this.animation3(c8, 2450);
        let c9: egret.Bitmap = this.getBitMapByName("5_9_jpg");
        c9.width = 720;
        this.animation3(c9, 2800);

    }


    private _touchStatus: boolean = false;
    private _distance: egret.Point = new egret.Point();
    private _distance1: egret.Point = new egret.Point();
    private _distance2: egret.Point = new egret.Point();
    private _distance3: egret.Point = new egret.Point();
    private mouseDown(evt: egret.TouchEvent) {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.p1.x;
        this._distance.y = evt.stageY - this.p1.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            this.p1.x = evt.stageX - this._distance.x;
            this.p1.y = evt.stageY - this._distance.y;
            if (this.inArea(this.p1.x, this.p1.y, 150, 385, 50, 50)) {
                this.p1.x = 150;
                this.p1.y = 385
            }
            if (this.inArea(this.p1.x, this.p1.y, 330, 385, 50, 50)) {
                this.p1.x = 330;
                this.p1.y = 385
            }
        }
    }

    private mouseDown1(evt: egret.TouchEvent) {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance1.x = evt.stageX - this.p2.x;
        this._distance1.y = evt.stageY - this.p2.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove1, this);
    }

    private mouseMove1(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            this.p2.x = evt.stageX - this._distance1.x;
            this.p2.y = evt.stageY - this._distance1.y;
        }
        if (this.inArea(this.p2.x, this.p2.y, 150, 385, 50, 50)) {
            this.p2.x = 150;
            this.p2.y = 385
        }
        if (this.inArea(this.p2.x, this.p2.y, 330, 385, 50, 50)) {
            this.p2.x = 330;
            this.p2.y = 385
        }
    }

    private mouseDown2(evt: egret.TouchEvent) {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance2.x = evt.stageX - this.p3.x;
        this._distance2.y = evt.stageY - this.p3.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove2, this);
    }

    private mouseMove2(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            this.p3.x = evt.stageX - this._distance2.x;
            this.p3.y = evt.stageY - this._distance2.y;
        }
        if (this.inArea(this.p3.x, this.p3.y, 150, 385, 50, 50)) {
            this.p3.x = 150;
            this.p3.y = 385
        }
        if (this.inArea(this.p3.x, this.p3.y, 330, 385, 50, 50)) {
            this.p3.x = 330;
            this.p3.y = 385
        }
    }

    private mouseDown3(evt: egret.TouchEvent) {
        console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance3.x = evt.stageX - this.p4.x;
        this._distance3.y = evt.stageY - this.p4.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove3, this);
    }

    private mouseMove3(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            this.p4.x = evt.stageX - this._distance3.x;
            this.p4.y = evt.stageY - this._distance3.y;
        }
        if (this.inArea(this.p4.x, this.p4.y, 150, 385, 50, 50)) {
            this.p4.x = 150;
            this.p4.y = 385
        }
        if (this.inArea(this.p4.x, this.p4.y, 300, 385, 50, 50)) {
            this.p4.x = 330;
            this.p4.y = 385
        }
    }

    private mouseUp(evt: egret.TouchEvent) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseUp1(evt: egret.TouchEvent) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove1, this);
    }

    private mouseUp2(evt: egret.TouchEvent) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove2, this);
    }

    private mouseUp3(evt: egret.TouchEvent) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove3, this);
    }

    private right1(x: number, y: number) {
        if (x <= 150 && y <= 385 && y >= 385 && x >= 150) {
            return true;
        }
    }

    private right2(x: number, y: number) {
        if (x <= 330 && y <= 385 && y >= 385 && x >= 330) {
            return true;
        }
    }

    private inArea(x: number, y: number, bx: number, by: number, bwidth: number, bheight: number): boolean {
        if (x <= bx + bwidth && x >= bx && y >= by && y <= by + bheight) {
            return true;
        }
        else {
            return false;
        }
    }

    private animation(e, num1) {
        this.addChild(e);
        e.alpha = 0;
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 300);
        e.wait(num1);
        e.to({ "x": -720 }, 500);
    }

    private animation1(e, num1) {
        this.addChild(e);
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": 0 }, 500);
    }

    private animation2(e, num1) {
        this.addChild(e);
        e.alpha = 0;
        this.createTween(e)
            .wait(num1)
            .to({ "alpha": 1 }, 300);
    }

    private animation3(e, num1) {
        this.addChild(e);
        e.alpha = 0;
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 100);
    }

    private animation4(e, num1) {
        this.addChild(e);
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": -720 }, 500);
    }

    private animation5(e, num1) {
        this.addChild(e);
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": -100, "y": -250, "width": 900, "height": 1836 }, 1000);
    }

    private animation6(e, num1) {
        this.addChild(e);
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": 0, "y": 0, "width": 720, "height": 1286 }, 1000);
    }

   
    private onLoadComplete(event: egret.Event): void {
        //获取加载到的 Sound 对象
        var sound: egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel: egret.SoundChannel = sound.play(0, 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onLoadComplete1(event: egret.Event): void {
        //获取加载到的 Sound 对象
        var sound: egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel: egret.SoundChannel = sound.play(0, 2);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onSoundComplete(event: egret.Event): void {
        console.log("onSoundComplete");
    }
}