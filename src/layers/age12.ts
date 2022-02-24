class Age12 extends Layers {

    constructor() {
        super();
        this.loadSounds(
            ["boob", "book", "door", "glass1", "glass2", "glass3", "lamp"],
            "/resource/audio/12/")
        this.getBitMapByName("4.20_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("glass1", 0, 1);
        }, this);
        this.getBitMapByName("4.21_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("glass2", 0, 1);
        }, this);
        this.getBitMapByName("4.22_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("glass3", 0, 1);
        }, this);
        this.getBitMapByName("4.50_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("lamp", 0, 1);
        }, this);
        this.getBitMapByName("4.43_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("book", 0, 1);
        }, this);
        this.getBitMapByName("4.17_jpg").once(egret.Event.ADDED_TO_STAGE, () => {
            this.playSound("door", 0, 1);
        }, this);
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        this.callback = callback;
        this.parentObject = thisObject;
        // let show1 = this.getBitMapByName("4.38_jpg");
        // this.addChild(show1);
        // this.progress13();
        this.progress0();
    }

    private progress0() {
        let show1 = this.getBitMapByName("4.1_jpg");

        this.addChild(show1);
        show1.alpha = 0;
        let tween = this.createTween(show1);
        tween.to({ "alpha": 1 }, 200)
            .wait(2000)
            .call(this.removeTweens, this, [show1])
            .call(this.progress1, this);
    };


    private progress1() {
        console.log("progress1");
        let show1 = this.getBitMapByName("4.1_jpg");
        let show2 = this.getBitMapByName("4.2_jpg");

        show2.x = show2.width;
        this.addChild(show2);
        let tween1 = this.createTween(show1);
        let tween2 = this.createTween(show2);
        let movetime = 500;
        tween1.to({ "x": -show2.width }, movetime)
            .call(this.removeChild, this, [show1])
            .call(this.removeTweens, this, [show1]);
        tween2.to({ "x": 0 }, movetime)
            .wait(1500)
            .call(this.removeTweens, this, [show2])
            .call(this.progress2, this);
    }


    private progress2() {
        console.log("progress2");
        let show1 = this.getBitMapByName("4.2_jpg");
        let show2 = this.getBitMapByName("4.3_jpg");

        this.addChildAt(show2, 0);
        show2.alpha = 1;
        let tween1 = this.createTween(show1);
        tween1.to({ "alpha": 0 }, 1000)
            .call(this.removeChild, this, [show1])
            .wait(1000)
            .call(this.progress3, this)
            .call(this.removeTweens, this, [show1]);
    }


    private progress3() {
        console.log("progress3")
        let show1 = this.getBitMapByName("4.3_jpg");
        let shows: egret.Bitmap[] = [];
        let _y = 0;
        let index = 0;
        let downboard = 1000 / 6;
        let touching = false;
        let eventdown: Function,
            eventup: Function,
            eventmove: Function;

        eventmove = (e: egret.TouchEvent) => {
            if (e.stageY - _y > 150) {
                shows[index].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, eventdown, this);
                shows[index].removeEventListener(egret.TouchEvent.TOUCH_END, eventup, this);
                shows[index].removeEventListener(egret.TouchEvent.TOUCH_MOVE, eventmove, this);
                _y = e.stageY;
                index++;
                if (index == shows.length - 1) {
                    this.progress4();
                } else {
                    this.addChild(shows[index])
                    this.createTween(shows[index - 1])
                        .wait(50)
                        .call(this.removeChild, this, [shows[index - 1]])
                }
            }
        }
        eventdown = (e: egret.TouchEvent) => {
            touching = this.inRect(e.stageX, e.stageY, 112, 0, 238, downboard * (index + 1))
        }
        eventup = (e: egret.TouchEvent) => {
            touching = false;
        }
        ["4.4_jpg", "4.5_jpg", "4.6_jpg", "4.7_jpg", "4.8_jpg", "4.9_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.touchEnabled = true;
            console.log(eventdown)
            bitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN, eventdown, this);
            bitmap.addEventListener(egret.TouchEvent.TOUCH_END, eventup, this);
            bitmap.addEventListener(egret.TouchEvent.TOUCH_MOVE, eventmove, this);
            shows.push(bitmap);
        });

        this.addChildAt(shows[index], 0);
        let tween1 = this.createTween(show1);
        tween1.to({ "alpha": 0 }, 1000)
            .call(this.removeChild, this, [show1])
            .call(this.removeTweens, this, [show1]);
    }

    private progress4() {

        console.log(this);
        let show1 = this.getBitMapByName("4.8_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let event = (e: egret.TouchEvent) => {
            console.log("touched the door!")
            if (this.inRect(e.stageX, e.stageY, 279, 436, 119, 122)) {
                shows[nextindex - 1].removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.progress5();
            }
        }
        let next = () => {
            console.log(nextindex + " " + shows.length);
            if (nextindex == shows.length) {
                shows[nextindex - 1].touchEnabled = true;
                shows[nextindex - 1].addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.removeTweens(shows[nextindex - 1]);
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(2000)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [shows[nextindex]])
                    .call(next, this);
                nextindex++;
            }
        };
        ["4.10_jpg", "4.11_jpg", "4.12_jpg", "4.13_jpg", "4.14_jpg", "4.15_jpg", "4.16_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }


    private progress5() {
        let show1 = this.getBitMapByName("4.16_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress6();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(2000)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [shows[nextindex]])
                    .call(next, this);
                nextindex++;
            }
        };
        ["4.17_jpg", "4.18_jpg", "4.19_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }

    private progress6() {
        console.log("progress6");
        let show1 = this.getBitMapByName("4.19_jpg");
        show1.touchEnabled = true;
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let event = (e: egret.TouchEvent) => {
            console.log("tap!")
            if (this.inRect(e.stageX, e.stageY, 452, 337, 97, 103)) {
                next();
            }
        }
        let next = () => {
            let lastshow = nextindex == 0 ? show1 : shows[nextindex - 1];
            let nextshow = shows[nextindex];
            this.addChild(nextshow);
            lastshow.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
            nextshow.alpha = 0;
            nextshow.touchEnabled = true;
            console.log(nextindex)
            if (nextindex == shows.length - 1) {
                this.createTween(nextshow)
                    .to({ "alpha": 1 }, 200)
                    .wait(2000)
                    .call(this.removeChild, this, [lastshow])
                    .call(this.progress7, this)
                    .call(this.removeTweens, this, [nextshow])

            } else {
                nextshow.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                let tween = this.createTween(nextshow);
                tween.to({ "alpha": 1 }, 200)
                    .call(this.removeChild, this, [lastshow])
                    .call(this.removeTweens, this, [shows[nextindex]])
                nextindex++;
            }
        };
        ["4.20_jpg", "4.21_jpg", "4.22_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            bitmap.touchEnabled = true;
            shows.push(bitmap);
        });
        show1.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    }

    private progress7() {
        console.log("progress7");
        let show1 = this.getBitMapByName("4.22_jpg");
        let show2 = this.getBitMapByName("4.23_jpg");
        this.addChild(show2);
        show2.alpha = 0;
        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 500)
            .wait(500)
            .call(() => {
                this.removeTweens(show1);
                this.removeChild(show1);
                this.progress8();
            }, this)
    }

    private progress8() {
        console.log("progress8")
        let show1 = this.getBitMapByName("4.23_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress9();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(500)
                    .call(this.removeChild, this, [last])
                    .call(this.removeTweens, this, [shows[nextindex]])
                    .call(next, this);
                nextindex++;
            }
        };
        ["4.24_jpg", "4.25_jpg", "4.26_jpg", "4.27_jpg", "4.28_jpg", "4.29_jpg"].forEach(string => {
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        });
        next();
    }

    private progress9() {
        console.log("progress9");
        let show1 = this.getBitMapByName("4.30_png")
        show1.x = show1.width;
        this.addChild(show1);
        let tw = this.createTween(show1);
        tw.to({ "x": 0 }, 2000)
            .wait(1000)
            .call(this.removeTweens, this, [show1])
            .call(this.progress10, this);
    }

    private progress10() {
        console.log("progress10");
        let show1 = this.getBitMapByName("4.29_jpg");
        let show2 = this.getBitMapByName("4.30_png");
        let show3 = this.getBitMapByName("4.31_jpg");

        this.addChild(show3);
        show3.alpha = 0;
        let tween1 = this.createTween(show3);
        tween1.to({ "alpha": 1 }, 1000)
            .wait(2000)
            .call(() => {
                this.removeChild(show1);
                this.removeChild(show2);
                this.removeTweens(show3);
                this.progress11();
            })
    }

    private progress11() {
        console.log("progress11")
        let talks: egret.Bitmap[] = [];
        let arrows: egret.Bitmap[] = [];
        let movetw: egret.Tween[] = [];
        let showing: boolean[] = [];
        [32, 33, 34].forEach(num => {
            let talk = this.getBitMapByName("4." + num + "_png")
            talks.push(talk);
            talk.alpha = 0;
            talk.touchEnabled = true;
            talk.pixelHitTest = true;
            movetw.push(this.createTween(talk, { loop: true }));
            let arrow = this.getBitMapByName("4." + (num + 3) + "_png");
            arrow.alpha = 0;
            arrow.touchEnabled = false;
            arrows.push(arrow);
            showing.push(false);
        });
        movetw[0].to({ "y": -20 }, 500).to({ "y": 0 }, 500);
        movetw[1].to({ "y": -10, "x": -11 }, 500).to({ "y": 0, "x": 0 }, 500);
        movetw[2].to({ "y": -20, "x": 10 }, 530).to({ "y": 0, "x": 0 }, 590);

        let events = [
            () => {
                this.addChild(arrows[0]);
                this.playSound("boob", 0, 1);
                this.createTween(arrows[0])
                    .to({ "alpha": 1 }, 500)
                    .call(addtrue, this, [0])
                    .call(this.removeTweens, this, [arrows[0]]);
            },
            () => {
                this.addChild(arrows[1]);
                this.playSound("boob", 0, 1);
                this.createTween(arrows[1])
                    .to({ "alpha": 1 }, 500)
                    .call(addtrue, this, [1])
                    .call(this.removeTweens, this, [arrows[1]]);
            },
            () => {
                this.addChild(arrows[2]);
                this.playSound("boob", 0, 1);
                this.createTween(arrows[2])
                    .to({ "alpha": 1 }, 500)
                    .call(addtrue, this, [2])
                    .call(this.removeTweens, this, [arrows[2]]);
            },
        ]
        for (let i = 0; i < 3; i++) {
            talks[i].addEventListener(egret.TouchEvent.TOUCH_TAP, events[i], this);
        }

        let addtrue = (i) => {
            console.log(i);
            showing[i] = true;
            if (showing[0] && showing[1] && showing[2]) {
                let show = this.getBitMapByName("4.38_jpg");
                show.alpha = 0;
                this.addChild(show);
                let tw = this.createTween(show);
                tw.to({ "alpha": 0 }, 1000)
                    .call(this.progress12, this);
            }
        }

        let show = (i: number) => {
            if (i == 3) return;
            talks[i].alpha = 0;
            this.addChild(talks[i]);
            this.createTween(talks[i])
                .to({ alpha: 1 }, 200)
                .wait(1000)
                .call(show, this, [i + 1]);
        }
        show(0);
    }
    private progress12() {
        console.log("progress12")
        let show1 = this.getBitMapByName("4.38_jpg");
        show1.alpha = 0;
        this.addChild(show1);

        let removelast = () => {
            this.removeChild(this.getBitMapByName("4.31_jpg"));
            for (let i = 32; i < 38; i++) {
                let show = this.getBitMapByName("4." + i + "_png");
                this.removeChild(show);
                this.removeTweens(show);
            }
        }

        this.createTween(show1)
            .to({ "alpha": 1 }, 1000)
            .call(removelast, this)
            .call(this.progress13, this);
    }

    private progress13() {
        console.log("progress13");
        let show1 = this.getBitMapByName("4.38_jpg");
        let show2 = this.getBitMapByName("4.39_jpg");
        let show3 = this.getBitMapByName("4.40_png");
        let show4 = this.getBitMapByName("4.41_png");
        show2.touchEnabled = true;
        show3.touchEnabled = show4.touchEnabled = false;
        show2.alpha = show3.alpha = 0;
        show2.height = show3.height = show4.height = 2231;
        // show3.y = 
        show4.y = show1.height - show3.height;
        let lasty = null;
        let mousedown = (e: egret.TouchEvent) => {
            if (show4.y - show2.y + this.height == 0 && this.inRect(e.localX, e.localY, 447, 984, 107, 269)) {
                show3.y = show4.y = -951;
                this.addChild(show3);
                this.addChild(show4);
                show3.y = show4.y;
                this.createTween(show3)
                    .to({ alpha: 1 }, 500)
                    .wait(2000)
                    .call(this.progress14, this)
                    .call(this.removeTweens, this, [show3]);
            } else {
                lasty = e.stageY;
                show2.addEventListener(egret.TouchEvent.TOUCH_MOVE, mousemove, this);
            }
        }
        let mouseup = () => {
            show2.removeEventListener(egret.TouchEvent.TOUCH_MOVE, mousemove, this);
        }
        let mousemove = (e: egret.TouchEvent) => {
            let dy = e.stageY - lasty;
            if (dy < 0) {
                console.log(show4.y - show2.y + this.height);
                console.log(dy);
                if (dy < show4.y - show2.y + this.height) {
                    dy = show4.y - show2.y + this.height
                }
                show2.y += dy;
            }
            lasty = e.stageY;
        }

        this.addChild(show2);
        this.createTween(show2)
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.removeChild, this, [show1])
            // .to({ "y": show3.y }, 1000)
            .call(() => {
                show2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, mousedown, this);
                show2.addEventListener(egret.TouchEvent.TOUCH_END, mouseup, this);
            }, this)
            .call(this.removeTweens, this, [show2]);
    }

    private progress14() {
        console.log("progress14");
        let show1 = this.getBitMapByName("4.39_jpg");
        let show2 = this.getBitMapByName("4.40_png");
        let show3 = this.getBitMapByName("4.41_png");
        let show4 = this.getBitMapByName("4.42_jpg");
        show4.touchEnabled = true;

        let event = (e: egret.TouchEvent) => {
            if (this.inRect(e.stageX, e.stageY, 58, 298, 632, 719)) {
                show4.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.progress15();
            }
        }

        this.addChild(show4);

        this.createTween(show4)
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.removeChild, this, [show1])
            .call(this.removeChild, this, [show2])
            .call(this.removeChild, this, [show3])
            .call(show4.addEventListener, this, [egret.TouchEvent.TOUCH_TAP, event, this])
            .call(this.removeTweens, this, [show4]);
    }

    private progress15() {
        console.log("progress15");
        let show1 = this.getBitMapByName("4.42_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                shows[nextindex - 1].touchEnabled = true;
                shows[nextindex - 1].addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
                    if (this.inRect(e.stageX, e.stageY, 504, 808, 126, 103)) {
                        this.progress16();
                    }
                }, this);
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(1000)
                    .call(this.removeChild, this, [last])
                    .call(next, this)
                    .call(this.removeTweens, this, [shows[nextindex]]);
                nextindex++;
            }
        };
        for (let i = 43; i < 50; i++) {
            let string = "4." + i + "_jpg";
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        }
        next();
    }

    private progress16() {
        console.log("progress16");
        let show1 = this.getBitMapByName("4.49_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress17();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .wait(1000)
                    .call(this.removeChild, this, [last])
                    .call(next, this)
                    .call(this.removeTweens, this, [shows[nextindex]]);
                nextindex++;
            }
        };
        for (let i = 50; i < 53; i++) {
            let string = "4." + i + "_jpg";
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        }
        next();
    }
    private progress17() {
        console.log("progress17");
        let show1 = this.getBitMapByName("4.52_jpg");
        let show2 = this.getBitMapByName("4.53_jpg");
        this.addChild(show2);
        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 1000)
            .call(this.removeChild, this, [show1])
            .wait(1000)
            .call(this.progress18, this);
    }
    private progress18() {
        console.log("progress18");
        let show1 = this.getBitMapByName("4.53_jpg");
        let shows: egret.Bitmap[] = [];
        let nextindex = 0;
        let next = () => {
            if (nextindex == shows.length) {
                this.progress19();
            } else {
                let last = nextindex == 0 ? show1 : shows[nextindex - 1];
                this.addChild(shows[nextindex]);
                show1.alpha = 0;
                let tween = this.createTween(shows[nextindex]);
                tween.to({ "alpha": 1 }, 200)
                    .call(this.removeChild, this, [last])
                    .call(next, this)
                    .call(this.removeTweens, this, [shows[nextindex]]);
                nextindex++;
            }
        };
        for (let i = 54; i < 63; i++) {
            let string = "4." + i + "_jpg";
            let bitmap = this.getBitMapByName(string);
            bitmap.alpha = 0;
            shows.push(bitmap);
        }
        next();
    }

    private progress19() {
        console.log("progress19");
        let show1 = this.getBitMapByName("4.62_jpg");
        let show2 = this.getBitMapByName("4.63_jpg");
        this.addChild(show2);
        this.createTween(show2)
            .wait(1000)
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.callback, this.parentObject);
    }
}