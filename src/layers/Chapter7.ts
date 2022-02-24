class Chapter7 extends Layers {

    public constructor() {
        super();
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        let p1 = this.createBitmapByName("7_1_jpg");
        this.addChild(p1);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        p1.width = stageW;
        p1.height = stageH;


        let p2: egret.Bitmap = this.createBitmapByName("7_2_jpg");
        this.animation2(p2, 1000);
        p2.width = stageW;
        p2.height = stageH;
        this.animation3(p2, 2300);

        let p3: egret.Bitmap = this.createBitmapByName("7_3_jpg");
        p3.width = stageW;
        p3.x = stageW;
        this.animation1(p3, 2300);

        let p4: egret.Bitmap = this.createBitmapByName("7_4_jpg");
        p4.width = stageW;
        this.animation2(p4, 4600);

        this.createTween(p1)
        .wait(5500)
        .call(()=> {
                this.hair();
        },this)
        .call(this.removeTweens,this,[p1])

        this.touchEnabled = true;
        
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function change() {
            this.play = false;
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, change, this)
        }, this)

        this.callback = callback;
        this.parentObject = thisObject;

    }

    private progress1() {
        let p1: egret.Bitmap = this.createBitmapByName("7_7_jpg");
        this.animation2(p1, 1000);
        let p2: egret.Bitmap = this.createBitmapByName("7_12_png");
        let p3: egret.Bitmap = this.createBitmapByName("7_10_png");
        let p4: egret.Bitmap = this.createBitmapByName("7_8_png");
        p4.x = 0;
        p4.y = 600
        let p5: egret.Bitmap = this.createBitmapByName("7_9_png");
        p5.x = 310;
        p5.y = 480;
        let p6: egret.Bitmap = this.createBitmapByName("7_11_png");

        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 100, 100, 100, 150)) {
                this.animation2(p2, 500);
                this.p2 = true;
            }
            if (this.inArea(e.stageX, e.stageY, 400, 150, 200, 220)) {
                this.animation2(p3, 500);
                this.p3 = true;
            }
            if (this.inArea(e.stageX, e.stageY, 0, 650, 340, 380)) {
                this.animation2(p4, 500);
                this.p4 = true;
            }
            if (this.inArea(e.stageX, e.stageY, 350, 550, 250, 250)) {
                this.animation2(p5, 500);
                this.p5 = true;
            }
            if (this.inArea(e.stageX, e.stageY, 350, 1000, 120, 120)) {
                this.animation2(p6, 500);
                this.p6 = true;
            }
            if (this.p2 && this.p3 && this.p4 && this.p5 && this.p6) {
                this.animation(p1, 2000);
                this.animation3(p2, 2000);
                this.animation3(p3, 2000);
                this.animation3(p4, 2000);
                this.animation3(p5, 2000);
                this.animation3(p6, 2000);
                this.progress2();
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }
            else {
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
            }
        }

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
    }

    private progress2() {
        let p1: egret.Bitmap = this.createBitmapByName("7_13_jpg");
        p1.width = 720;
        p1.height = 1280
        p1.x = 720;
        this.animation1(p1, 2000);
        let p3: egret.Bitmap = this.createBitmapByName("a_1");
        p3.width = 720;
        p3.height = 1280
        p3.x = 720;
        this.animation1(p3, 2000);
        let p4: egret.Bitmap = this.createBitmapByName("a_2");
        let p5: egret.Bitmap = this.createBitmapByName("a_3");

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up() {
            this.animation4(p3, 1000)
            p4.width = 720;
            p4.height = 1280;
            this.animation2(p4, 1000);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up, this)
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up1() {
                this.animation4(p4, 1000)
                p5.width = 720;
                p5.height = 1280;
                this.animation2(p5, 1000);
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up1, this)
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up2() {
                    this.animation4(p5, 500)
                    let p2: egret.Bitmap = this.createBitmapByName("7_13_1png");
                    p2.width = 720;
                    p2.height = 1280;
                    this.addChild(p2);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up2, this)
                    this.progress3();
                }, this)
            }, this)
        }, this)

    }

    private progress3() {
        let p1: egret.Bitmap = this.createBitmapByName("7_14_jpg");
        p1.width = 720;
        p1.height = 1280
        this.animation2(p1, 1000);
        let p3: egret.Bitmap = this.createBitmapByName("a_1");
        p3.width = 720;
        p3.height = 1280
        this.animation2(p3, 1000);
        let p4: egret.Bitmap = this.createBitmapByName("a_2");
        let p5: egret.Bitmap = this.createBitmapByName("a_3");

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up() {
            this.animation4(p3, 1000)
            p4.width = 720;
            p4.height = 1280;
            this.animation2(p4, 1000);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up, this)
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up1() {
                this.animation4(p4, 1000)
                p5.width = 720;
                p5.height = 1280;
                this.animation2(p5, 1000);
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up1, this)
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up2() {
                    this.animation4(p5, 500)
                    let p2: egret.Bitmap = this.createBitmapByName("7_14_1png");
                    p2.width = 720;
                    p2.height = 1280;
                    this.addChild(p2);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up2, this)
                    this.progress4();
                }, this)
            }, this)
        }, this)
    }

    private progress4() {
        let p1: egret.Bitmap = this.createBitmapByName("7_15_jpg");
        p1.width = 720;
        p1.height = 1280
        this.animation2(p1, 1000);
        let p3: egret.Bitmap = this.createBitmapByName("a_1");
        p3.width = 720;
        p3.height = 1280
        this.animation2(p3, 1000);
        let p4: egret.Bitmap = this.createBitmapByName("a_2");
        let p5: egret.Bitmap = this.createBitmapByName("a_3");

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up() {
            this.animation4(p3, 1000)
            p4.width = 720;
            p4.height = 1280;
            this.animation2(p4, 1000);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up, this)
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up1() {
                this.animation4(p4, 1000)
                p5.width = 720;
                p5.height = 1280;
                this.animation2(p5, 1000);
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up1, this)
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function up2() {
                    this.animation4(p5, 500)
                    let p2: egret.Bitmap = this.createBitmapByName("7_15_1png");
                    p2.width = 720;
                    p2.height = 1280;
                    this.addChild(p2);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, up2, this)
                    this.progress5();
                }, this)
            }, this)
        }, this)
    }

    private progress5() {
        let p1: egret.Bitmap = this.createBitmapByName("7_16_jpg");
        p1.width = 720;
        p1.height = 1280
        this.animation2(p1, 1000);

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math() {
            this.number++
            const timer: egret.Timer = new egret.Timer(2000, 1);
            timer.start();
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show() {
                if (this.number >= 2) {
                    let p1: egret.Bitmap = this.createBitmapByName("g_1");
                    p1.width = 720;
                    this.animation2(p1, 500);
                    let p2: egret.Bitmap = this.createBitmapByName("g_2");
                    p2.width = 720
                    this.animation2(p2, 1000);
                    let p3: egret.Bitmap = this.createBitmapByName("b_1");
                    p3.width = 720;
                    this.animation2(p3, 2000);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math, this)

                    this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math1() {
                        this.number1++
                        const timer: egret.Timer = new egret.Timer(2000, 1);
                        timer.start();
                        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show1() {
                            if (this.number1 >= 3) {
                                let p1: egret.Bitmap = this.createBitmapByName("g_1");
                                p1.y = 340;
                                p1.width = 720;
                                this.animation2(p1, 500);
                                let p2: egret.Bitmap = this.createBitmapByName("g_3");
                                p2.width = 720
                                this.animation2(p2, 1000);
                                let p3: egret.Bitmap = this.createBitmapByName("b_3");
                                p3.width = 720;
                                this.animation2(p3, 2000);
                                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math1, this)

                                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math2() {
                                    this.number2++
                                    const timer: egret.Timer = new egret.Timer(2000, 1);
                                    timer.start();
                                    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show2() {
                                        if (this.number2 >= 5) {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("g_4");
                                            p2.y = -40
                                            p2.width = 720
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -70
                                            p3.width = 720;
                                            this.animation2(p3, 2000);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                        else {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("b_4");
                                            p2.width = 720;
                                            p2.y = 80;
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -50
                                            p3.width = 720;
                                            this.animation2(p3, 1500);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                    }, this);
                                }, this)
                            }
                            else {
                                let p1: egret.Bitmap = this.createBitmapByName("g_1");
                                p1.width = 720;
                                p1.y = 330;
                                this.animation2(p1, 0);
                                let p2: egret.Bitmap = this.createBitmapByName("b_1");
                                p2.width = 720;
                                p2.y = 220;
                                this.animation2(p2, 1000);
                                let p3: egret.Bitmap = this.createBitmapByName("b_3");
                                p3.width = 720;
                                this.animation2(p3, 1500);
                                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math1, this)

                                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math2() {
                                    this.number2++
                                    const timer: egret.Timer = new egret.Timer(2000, 1);
                                    timer.start();
                                    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show2() {
                                        if (this.number2 >= 5) {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("g_4");
                                            p2.y = -40
                                            p2.width = 720
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -70
                                            p3.width = 720;
                                            this.animation2(p3, 2000);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                        else {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("b_4");
                                            p2.width = 720;
                                            p2.y = 80;
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -50
                                            p3.width = 720;
                                            this.animation2(p3, 1500);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                    }, this);
                                }, this)
                            }
                        }, this);
                    }, this)


                }
                else {
                    let p1: egret.Bitmap = this.createBitmapByName("g_1");
                    p1.width = 720;
                    this.animation2(p1, 0);
                    let p2: egret.Bitmap = this.createBitmapByName("b_1");
                    p2.width = 720;
                    p2.y = -100;
                    this.animation2(p2, 500);
                    let p3: egret.Bitmap = this.createBitmapByName("b_1");
                    p3.width = 720;
                    this.animation2(p3, 1000);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math, this)

                    this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math1() {
                        this.number1++
                        const timer: egret.Timer = new egret.Timer(2000, 1);
                        timer.start();
                        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show1() {
                            if (this.number1 >= 2) {
                                let p1: egret.Bitmap = this.createBitmapByName("g_1");
                                p1.y = 340;
                                p1.width = 720;
                                this.animation2(p1, 500);
                                let p2: egret.Bitmap = this.createBitmapByName("g_3");
                                p2.width = 720
                                this.animation2(p2, 1000);
                                let p3: egret.Bitmap = this.createBitmapByName("b_3");
                                p3.width = 720;
                                this.animation2(p3, 2000);
                                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math1, this)

                                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math2() {
                                    this.number2++
                                    const timer: egret.Timer = new egret.Timer(2000, 1);
                                    timer.start();
                                    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show2() {
                                        if (this.number2 >= 3) {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("g_4");
                                            p2.y = -40
                                            p2.width = 720
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -70
                                            p3.width = 720;
                                            this.animation2(p3, 2000);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                        else {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("b_4");
                                            p2.width = 720;
                                            p2.y = 80;
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -50
                                            p3.width = 720;
                                            this.animation2(p3, 1500);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                    }, this);
                                }, this)
                            }
                            else {
                                let p1: egret.Bitmap = this.createBitmapByName("g_1");
                                p1.width = 720;
                                p1.y = 330;
                                this.animation2(p1, 0);
                                let p2: egret.Bitmap = this.createBitmapByName("b_1");
                                p2.width = 720;
                                p2.y = 220;
                                this.animation2(p2, 1000);
                                let p3: egret.Bitmap = this.createBitmapByName("b_3");
                                p3.width = 720;
                                this.animation2(p3, 1500);
                                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math1, this)

                                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function math2() {
                                    this.number2++
                                    const timer: egret.Timer = new egret.Timer(2000, 1);
                                    timer.start();
                                    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function show2() {
                                        if (this.number2 >= 2) {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("g_4");
                                            p2.y = -40
                                            p2.width = 720
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -70
                                            p3.width = 720;
                                            this.animation2(p3, 2000);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                        else {
                                            let p1: egret.Bitmap = this.createBitmapByName("g_3");
                                            p1.y = 210;
                                            p1.width = 720;
                                            this.animation2(p1, 500);
                                            let p2: egret.Bitmap = this.createBitmapByName("b_4");
                                            p2.width = 720;
                                            p2.y = 80;
                                            this.animation2(p2, 1000);
                                            let p3: egret.Bitmap = this.createBitmapByName("b_5");
                                            p3.y = -50
                                            p3.width = 720;
                                            this.animation2(p3, 1500);
                                            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, math2, this)
                                            this.progress6()
                                        }
                                    }, this);
                                }, this)
                            }
                        }, this);
                    }, this)
                }
            }, this);
        }, this)
    }


    private progress6() {
        let p1: egret.Bitmap = this.createBitmapByName("7_17_jpg");
        p1.width = 720;
        p1.height = 1280
        this.animation2(p1, 3500);
        let p2: egret.Bitmap = this.createBitmapByName("7_18_jpg");
        p2.width = 720;
        p2.height = 1280
        this.animation2(p2, 4500);
        let p3: egret.Bitmap = this.createBitmapByName("7_19_jpg");
        p3.width = 720;
        p3.height = 1280
        this.animation2(p3, 5500);
        this.play = true;

        this.createTween(p1)
        .wait(6500)
        .call(()=> {
            this.electrocardiogram();
        },this)
        .call(this.removeTweens,this,[p1])

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function change() {
            this.play = false;
            console.log(this.play)
        }, this)

    }

    private progress7() {
        let p1: egret.Bitmap = this.createBitmapByName("7_29_jpg");
        p1.x = 720;
        p1.width = 720;
        p1.height = 1280
        this.animation1(p1, 1500);
        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 80, 500, 280, 250)) {
                let p2: egret.Bitmap = this.createBitmapByName("7_30_jpg");
                p2.width = 720;
                p2.height = 1280
                this.animation2(p2, 500);
                let p3: egret.Bitmap = this.createBitmapByName("7_31_jpg");
                p3.width = 720;
                p3.height = 1280
                this.animation2(p3, 2500);
                this.progress8();
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
            }
            else {
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
    }

    private progress8() {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function chat() {
            let p2: egret.Bitmap = this.createBitmapByName("7_32_jpg");
            p2.width = 720;
            p2.height = 1280
            this.animation2(p2, 500);
            let p1: egret.Bitmap = this.createBitmapByName("i_1");
            p1.width = 720;
            p1.height = 1280
            this.animation2(p1, 500);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, chat, this)
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function chat1() {
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, chat1, this)
                let p2: egret.Bitmap = this.createBitmapByName("7_33_jpg");
                p2.width = 720;
                p2.height = 1280
                this.animation2(p2, 500);
                let p1: egret.Bitmap = this.createBitmapByName("i_1");
                p1.width = 720;
                p1.height = 1280
                this.animation2(p1, 500);
                let p3: egret.Bitmap = this.createBitmapByName("7_34_jpg");
                p3.width = 720;
                p3.height = 1280
                this.animation2(p3, 2000);
                let p4: egret.Bitmap = this.createBitmapByName("7_35_png");
                p4.x = 170;
                p4.y = -150;
                p4.width = 350;
                this.animation5(p4, 3500);
                this.progress9();
            }, this)
        }, this);
    }

    private progress9() {
        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 170, 0, 300, 100)) {
                let p2: egret.Bitmap = this.createBitmapByName("7_36_jpg");
                p2.width = 720;
                p2.height = 1280
                this.animation2(p2, 500);
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this)
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function chat() {
                    let p2: egret.Bitmap = this.createBitmapByName("7_37_png");
                    p2.width = 720;
                    p2.height = 1280
                    this.animation2(p2, 500);
                    let p1: egret.Bitmap = this.createBitmapByName("7_38_png");
                    p1.width = 720;
                    p1.height = 1280
                    this.animation2(p1, 2000);
                    this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, chat, this)
                    this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function chat1() {
                        let p2: egret.Bitmap = this.createBitmapByName("7_39_png");
                        p2.width = 720;
                        p2.height = 1280
                        this.animation2(p2, 500);
                        let p1: egret.Bitmap = this.createBitmapByName("7_40_png");
                        p1.width = 720;
                        p1.height = 1280
                        this.animation2(p1, 2000);
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, chat1, this)
                        let p3: egret.Bitmap = this.createBitmapByName("7_41_jpg");
                        p3.width = 720;
                        p3.height = 1280
                        this.animation2(p3, 3500);
                        let p4: egret.Bitmap = this.createBitmapByName("7_42_jpg");
                        p4.width = 720;
                        p4.height = 1280
                        this.animation2(p4, 5000);
                        let p5: egret.Bitmap = this.createBitmapByName("7_43_jpg");
                        p5.width = 720;
                        p5.height = 1280
                        this.animation2(p5, 7000);

                        this.createTween(this.p2)
                        .wait(9000)
                        .call(() => {
                            this.callback.call(this.parentObject);
                        },this)
                        .call(this.removeTweens,[this.p2])
                    }, this)
                }, this)
            }
            else {
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);

       

    }

    private electrocardiogram() {
        let p4: egret.Bitmap = this.createBitmapByName("7_20_jpg");
        p4.width = 720;
        p4.height = 1280
        this.animation2(p4, 0);
        let p5: egret.Bitmap = this.createBitmapByName("7_21_jpg");
        p5.width = 720;
        p5.height = 1280
        this.animation2(p5, 700);
        let p6: egret.Bitmap = this.createBitmapByName("7_22_jpg");
        p6.width = 720;
        p6.height = 1280
        this.animation2(p6, 1400);
        if (this.play) {
            this.createTween(p4)
                .wait(2100)
                .call(() => {
                    this.electrocardiogram1()
                }, this)
                .call(this.removeTweens, this, [p4])
        }
        else {
            this.progress7();
        }
    }

    private electrocardiogram1() {
        let p7: egret.Bitmap = this.createBitmapByName("7_23_jpg");
        p7.width = 720;
        p7.height = 1280
        this.animation2(p7, 0);
        let p8: egret.Bitmap = this.createBitmapByName("7_24_jpg");
        p8.width = 720;
        p8.height = 1280
        this.animation2(p8, 700);
        let p9: egret.Bitmap = this.createBitmapByName("7_25_jpg");
        p9.width = 720;
        p9.height = 1280
        this.animation2(p9, 1400);
        if (this.play) {
            this.createTween(p7)
            .wait(2100)
            .call(() => {
                this.electrocardiogram2()
            }, this)
            .call(this.removeTweens, this, [p7])
        }
        else {
            this.progress7();
        }
    }

    private electrocardiogram2() {
        let p10: egret.Bitmap = this.createBitmapByName("7_26_jpg");
        p10.width = 720;
        p10.height = 1280
        this.animation2(p10, 0);
        let p11: egret.Bitmap = this.createBitmapByName("7_27_jpg");
        p11.width = 720;
        p11.height = 1280
        this.animation2(p11, 700);
        let p12: egret.Bitmap = this.createBitmapByName("7_28_jpg");
        p12.width = 720;
        p12.height = 1280
        this.animation2(p12, 1400);
        if (this.play) {
            this.createTween(p10)
                .wait(2100)
                .call(() => {
                    this.electrocardiogram();
                }, this)
                .call(this.removeTweens, this, [p10])
        }
        else {
            this.progress7();
        }
    }


    private hair() {
        let p1: egret.Bitmap = this.createBitmapByName("7_5_jpg");
        p1.width = 720;
        this.animation2(p1, 0);

        let p2: egret.Bitmap = this.createBitmapByName("7_6_jpg");
        p2.width = 720;
        this.animation2(p2, 600);
        if (this.play) {
            this.createTween(p1)
                .wait(1200)
                .call(() => {
                    this.hair();
                }, this)
                .call(this.removeTweens, this, [p1])
        }
        else {
            this.progress1();
        }

    }


    private play: boolean = true;
    private number: number = 0;
    private number1: number = 0;
    private number2: number = 0;
    private p2: boolean = false;
    private p3: boolean = false;
    private p4: boolean = false;
    private p5: boolean = false;
    private p6: boolean = false;

    private inArea(x: number, y: number, bx: number, by: number, bwidth: number, bheight: number): boolean {
        if (x <= bx + bwidth && x >= bx && y >= by && y <= by + bheight) {
            return true;
        }
        else {
            return false;
        }
    }

    private animation(e, num1) {
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": -740 }, 500);
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
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 300);
    }

    private animation3(e, num1) {
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "x": -720 }, 500);
    }

    private animation4(e, num1) {
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 0 }, 300);
    }

    private animation5(e, num1) {
        const timer: egret.Timer = new egret.Timer(2500, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function message() {
            var sound = new egret.Sound();
            var url: string = "resource/assets/music/message.mp3";
            sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            sound.load(url)
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, message, this)
        }, this);

        this.addChild(e);
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "y": 0 }, 500);
    }

    private onLoadComplete(event: egret.Event): void {
        //获取加载到的 Sound 对象
        var sound: egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel: egret.SoundChannel = sound.play(0, 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onSoundComplete(event: egret.Event): void {
        console.log("onSoundComplete");
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}
