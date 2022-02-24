class age20 extends Layers {

    constructor() {
        super();
        this.loadSounds(
            ["call", "message"],
            "/resource/audio/20/")
        this.getBitMapByName("9.30_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("call", 0, 0);
        }, this);
        for (let i = 24; i <= 29; i++) {
            this.getBitMapByName("9." + i + "_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
                this.playSound("message", 0, 1);
            }, this);

        }

    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        this.callback = callback;
        this.parentObject = thisObject;
        this.progress0();
    }

    private progress0() {
        let show1 = this.getBitMapByName("9.1_jpg");

        this.addChild(show1);
        show1.alpha = 0;
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.progress1, this)
            .call(this.removeTweens, this, [show1]);
    };
    private progress1() {
        console.log("progress1");
        let show1 = this.getBitMapByName("9.1_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                shows[nextindex - 1].touchEnabled = true;
                shows[nextindex - 1].addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
                    if (this.inRect(e.stageX, e.stageY, 29, 462, 330, 212)) {
                        console.log("diamonds!")
                        this.progress2();
                    }
                }, this);
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 1000)
                    .call(this.removeChild, this, [last])
                    .call(next, this)
                    .call(this.removeTweens, this, [shows[nextindex]]);
                nextindex++;
            }
        };
        for (let i = 2; i < 4; i++) {
            let string = "9." + i + "_jpg";
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        }
        next();
    }

    private progress2() {
        console.log("progress2");
        let show1 = this.getBitMapByName("9.3_jpg");
        let show2 = this.getBitMapByName("9.4_jpg");
        show2.touchEnabled = true;
        show2.alpha = 0;
        this.addChild(show2);
        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 1000)
            .call(this.removeChild, this, [show1])
            .wait(1000)
            .call(show2.addEventListener, show2, [egret.TouchEvent.TOUCH_TAP, this.progress3, this])
            .call(this.removeTweens, this, [show2]);

    }

    private progress3() {
        console.log("progress3");
        let show1 = this.getBitMapByName("9.4_jpg");
        let show2 = this.getBitMapByName("9.5_jpg");
        let show3 = this.getBitMapByName("9.6_png");

        show3.touchEnabled = true;
        show2.alpha = show3.alpha = 0;

        this.addChild(show2);
        this.addChild(show3);

        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 1000)
            .call(this.removeChild, this, [show1])
            .wait(500)
            .call(() => {
                this.createTween(show3)
                    .wait(500)
                    .to({ "alpha": 1 }, 1000)
                    .wait(2000)
                    .call(this.progress4, this)
                    .call(this.removeTweens, this, [show3]);

            }, this)
            .call(this.removeTweens, this, [show2]);

    }

    private progress4() {
        console.log("progress4");
        let show1 = this.getBitMapByName("9.5_jpg");
        let show2 = this.getBitMapByName("9.6_png");
        let show3 = this.getBitMapByName("9.7_jpg");

        this.addChild(show3);
        show3.alpha = 0;
        this.createTween(show3)
            .to({ "alpha": 1 }, 500)
            .wait(500)
            .call(this.removeChild, this, [show1])
            .call(this.removeChild, this, [show2])
            .call(this.progress5, this)
            .call(this.removeTweens, this, [show3]);

    }

    private progress5() {
        console.log("progress5");
        let show1 = this.getBitMapByName("9.7_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress8();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 500)
                    .wait(500)
                    .call(this.removeChild, this, [last])
                    .call(next, this)
                    .call(this.removeTweens, this, [shows[nextindex]]);
                nextindex++;
            }
        };
        for (let i = 8; i < 18; i++) {
            let string = "9." + i + "_jpg";
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        }
        next();
    }

    private progress8() { //循環18-20
        console.log("progress8");
        let show1 = this.getBitMapByName("9.17_jpg");
        let shows = [
            this.getBitMapByName("9.18_jpg"),
            this.getBitMapByName("9.19_jpg"),
            this.getBitMapByName("9.20_jpg")
        ];
        let i = 0;
        let touched = false;
        let event = () => {
            touched = true;
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
            this.progress9();

        }
        let change = () => {
            if (touched) return;
            console.log(touched);
            let now = i;
            i = (i + 1) % 3;
            let next = i;
            this.addChild(shows[next]);
            this.createTween(shows[next])
                .to({ "alpha": 1 }, 500)
                .wait(500)
                .call(() => {
                    this.removeChild(shows[now]);
                    shows[now].alpha = 0;
                    change();
                })
                .call(this.removeTweens, this, [shows[next]]);

        }

        shows.forEach(bitmap => {
            bitmap.alpha = 0;
        });

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
        this.addChild(shows[0]);
        change();


    }


    private progress9() { //循環結束21
        console.log("progress9");
        let show2 = this.getBitMapByName("9.21_jpg");
        show2.alpha = 0;
        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, 500)
            .wait(500)
            .call(() => {
                while (this.$children.length > 1) {
                    this.removeChildAt(0);
                }
                this.progress10();
                this.removeTweens(show2);
            }, this);
    }

    private progress10() {
        console.log("progress10")
        let show1 = this.getBitMapByName("9.21_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress11();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(2000)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [nextindex])
                    .call(next, this);
                nextindex++;
            }
        };
        ["9.22_jpg", "9.23_jpg", "9.24_jpg", "9.25_jpg", "9.26_jpg", "9.27_jpg", "9.28_jpg", "9.29_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }

    private progress11() {
        console.log("progress11");
        let show1 = this.getBitMapByName("9.29_jpg");
        let show2 = this.getBitMapByName("9.30_jpg");
        show1.touchEnabled = true;

        let event = (e: egret.TouchEvent) => {
            console.log("diamonds!")
            this.addChildAt(show2, 0);
            show2.alpha = 1;
            let tween1 = this.createTween(show1);
            tween1.to({ "alpha": 0 }, 200)
                .call(this.removeChild, this, [show1])
                .wait(1500)
                .call(this.progress12, this)
                .call(this.removeTweens, this, [show1]);
        }
        show1.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    }

    private progress12() {
        console.log("progress12");
        let show1 = this.getBitMapByName("9.30_jpg");
        let show2 = this.getBitMapByName("A.1_jpg");
        let show3 = this.getBitMapByName("B.1_jpg");
        show1.touchEnabled = true;
        let next = (isRight: boolean) => {
            let show = isRight ? show2 : show3
            this.addChild(show);
            show.alpha = 0;
            this.stopSounds();
            this.createTween(show)
                .to({ "alpha": 1 }, 200)
                .call(this.removeChild, this, [show1])
                .wait(2000)
                .call(isRight ? this.progressA1 : this.progressB1, this)
                .call(this.removeTweens, this, [show]);
        }

        let event = (e: egret.TouchEvent) => {
            console.log("diamonds!")
            if (this.inRect(e.stageX, e.stageY, 411, 1001, 96, 125)) {
                next(true);
            }
            if (this.inRect(e.stageX, e.stageY, 189, 1001, 96, 125)) {
                next(false);
            }

        }
        show1.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);

    }
    private progressA1() {
        console.log("progressA1")
        let show1 = this.getBitMapByName("A.1_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progressA2();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(1500)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [nextindex])
                    .call(next, this);
                nextindex++;
            }
        };
        ["A.2_jpg", "A.3_jpg", "A.4_jpg", "A.5_jpg", "A.6_jpg", "A.7_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }
    private progressB1() {
        console.log("progressB1")
        let show1 = this.getBitMapByName("B.1_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progressB2();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(1500)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [nextindex])
                    .call(next, this);
                nextindex++;
            }
        };
        ["B.2_jpg", "B.3_jpg", "B.4_jpg", "B.5_jpg", "B.6_jpg", "B.7_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }
    private progressA2() {
        console.log("progressA2");
        let show1 = this.getBitMapByName("A.7_jpg");
        let show2 = this.getBitMapByName("A.8_jpg");
        show2.alpha = 0;
        show2.height = 2580;

        this.addChild(show2);

        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 500)
            .call(this.removeChild, this, [show1])
            .wait(1500)
            .to({ "y": -show2.height + show1.height }, 500)
            .wait(1000)
            .call(this.progressA3, this)
            .call(this.removeTweens, this, [show2]);
    }

    private progressA3() {
        console.log("progressA3");
        let show1 = this.getBitMapByName("A.8_jpg");
        let show2 = this.getBitMapByName("A.9_png");
        let show3 = this.getBitMapByName("A.10_png");

        this.addChild(show2);
        this.addChild(show3);

        show2.alpha = show3.alpha = 0;
        show3.touchEnabled = true;
        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 500)
            .wait(1500)
            .call(() => {
                this.createTween(show3)
                    .wait(1000)
                    .to({ "alpha": 1 }, 500)
                    .wait(1000)
                    .call(show3.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.callback.call(this.parentObject) }, this))
                    .call(this.removeTweens, this, [show3]);
            }, this)
            .call(this.removeTweens, this, [show2]);

    }
    private progressB2() {
        let show1 = this.getBitMapByName("B.8_png");

        this.addChild(show1);
        show1.alpha = 0;
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.callback, this.parentObject)
    }
}