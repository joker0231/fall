class Age3 extends Layers {

    public constructor() {
        super();
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        let sky = this.createBitmapByName("1_1_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let cloud1: egret.Bitmap = this.createBitmapByName("c1_png");
        cloud1.y = 500;
        cloud1.width = stageW
        this.animation(cloud1, 2500);

        let cloud2: egret.Bitmap = this.createBitmapByName("c2_png");
        cloud2.y = 0;
        cloud2.width = stageW
        this.animation(cloud2, 500);

        let cloud3: egret.Bitmap = this.createBitmapByName("c3_png");
        cloud3.y = 0;
        cloud3.width = stageW
        this.animation(cloud3, 4000);

        let cloud4: egret.Bitmap = this.createBitmapByName("c4_png");
        cloud4.y = 500;
        cloud4.width = stageW
        this.animation(cloud4, 5500);

        let bg1: egret.Bitmap = this.createBitmapByName("1_2_jpg");
        this.animation(bg1, 6000);

        var bg = new eui.Image("1_3_jpg");
        bg.width = stageW;
        this.animation(bg, 9500);
        var group = new eui.Group();
        group.addChild(bg);
        var myScroller = new eui.Scroller();
        myScroller.width = stageW;
        myScroller.height = stageH;
        myScroller.viewport = group;
        myScroller.scrollPolicyH = "off";
        this.addChild(myScroller);

        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 330, 1050, 80, 80)) {
                myScroller.addEventListener(egret.TouchEvent.TOUCH_TAP, this.book, this);
                this.createTween(cloud3)
                .wait(2500)
                .call(() => {
                    bg.parent.removeChild(bg);
                    group.parent.removeChild(group);
                    myScroller.parent.removeChild(myScroller);
                },this)
                .call(this.removeTweens,[cloud3])
            }
            else {
                myScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);
            }
        }
        myScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, this);

        this.callback = callback;
        this.parentObject = thisObject;
    }

    private book() {
        let bg = this.createBitmapByName("1_4_jpg");
        bg.width = 720;
        this.addChild(bg);
        this.animation2(bg, 500);


        this.createTween(bg)
        .wait(1000)
        .call(()=> {
            this.stage.once(egret.TouchEvent.TOUCH_TAP, this.middle, this);
        },this)
        .call(this.removeTweens,this,[bg])

    }

    private middle() {
        var sound = new egret.Sound();
        var url: string = "resource/assets/music/book.mp3";
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        sound.load(url);
        let bg1 = this.createBitmapByName("1_5_jpg");
        bg1.width = 720;
        this.addChild(bg1);
        this.animation(bg1, 500);

        this.p1 = this.createBitmapByName("1_6_png");
        this.p1.width = 720;
        this.p1.alpha = 0;
        this.addChild(this.p1);

        this.p2 = this.createBitmapByName("1_7_png");
        this.p2.width = 720;
        this.p2.alpha = 0;
        this.addChild(this.p2);

        this.p3 = this.createBitmapByName("1_8_png");
        this.p3.width = 720;
        this.p3.alpha = 0;
        this.addChild(this.p3);

        this.p4 = this.createBitmapByName("1_9_png");
        this.p4.width = 720;
        this.p4.alpha = 0;
        this.addChild(this.p4);

        this.p8 = this.createBitmapByName("p_0");
        this.p8.width = 720;
        this.p8.alpha = 0;
        this.p8.y = -950;
        this.addChild(this.p8);

        this.p5 = this.createBitmapByName("p_1");
        this.p5.width = 720;
        this.p5.alpha = 0;
        this.p5.y = -950;
        this.addChild(this.p5);

        this.p6 = this.createBitmapByName("p_2");
        this.p6.width = 720;
        this.p6.alpha = 0;
        this.p6.y = -950;
        this.addChild(this.p6);

        this.p7 = this.createBitmapByName("p_3");
        this.p7.width = 720;
        this.p7.alpha = 0;
        this.p7.y = -950;
        this.addChild(this.p7);

        this.p9 = this.createBitmapByName("p_4");
        this.p9.width = 720;
        this.p9.alpha = 0;
        this.p9.y = -950;
        this.addChild(this.p9);

        this.h1 = this.createBitmapByName("h11_png");
        this.h1.x = 160;
        this.h1.y = 280;
        this.addChild(this.h1);
        this.animation(this.h1, 2000);

        this.h2 = this.createBitmapByName("h22_png");
        this.h2.x = 280;
        this.h2.y = 530;
        this.addChild(this.h2);
        this.animation(this.h2, 2500);

        this.createTween(bg1)
        .wait(2500)
        .call(()=> {
            this.stage.once(egret.TouchEvent.TOUCH_TAP,
                function change() {
                    this.h2.x = 280;
                    this.h2.y = 300;
                    this.p8.alpha = 1;
                }, this)
        },this)
        .call(this.removeTweens,this,[bg1])

        let move: Function;
        move = (e: egret.TouchEvent) => {
            if (this.inArea(e.stageX, e.stageY, 430, 700, 300, 550)) {
                this.h2.touchEnabled = true;
                this.h2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                this.h2.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
            }
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, move, this)
        

    }


    private end() {
        let bg2: egret.Bitmap = this.createBitmapByName("1_10_jpg");
        bg2.width = 720;
        this.animation(bg2, 5000);

        let bg3: egret.Bitmap = this.createBitmapByName("1_11_jpg");
        bg3.width = 720;
        this.animation(bg3, 6500);

        let bg4: egret.Bitmap = this.createBitmapByName("1_12_jpg");
        this.animation(bg4, 8000);

        let bg5: egret.Bitmap = this.createBitmapByName("1_13_jpg");
        this.animation(bg5, 9500);

        this.createTween(bg2)
        .wait(11500)
        .call(()=> {
            this.callback.call(this.parentObject);
        },this)
        .call(this.removeTweens,this,[bg2])

    }

    private p1: egret.Bitmap;
    private p2: egret.Bitmap;
    private p3: egret.Bitmap;
    private p4: egret.Bitmap;
    private p5: egret.Bitmap;
    private p6: egret.Bitmap;
    private p7: egret.Bitmap;
    private p8: egret.Bitmap;
    private p9: egret.Bitmap;
    private h1: egret.Bitmap;
    private h2: egret.Bitmap;
    private _touchStatus: boolean = false;
    private _distance: egret.Point = new egret.Point();
    private point1 :number
    private point2 :number
    private index = 0;
    private mouseDown(evt: egret.TouchEvent) {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.h2.x;
        this._distance.y = evt.stageY - this.h2.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.point1 = this.h1.x;
        this.point2 = this.h1.y;
    }

    private mouseMove(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            // console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            this.h2.x = evt.stageX - this._distance.x;
            this.h2.y = evt.stageY - this._distance.y;
            this.h1.x = evt.stageX - this._distance.x -120;
            this.h1.y = evt.stageY - this._distance.y -10;


            if(this.h1.x<= -150 || this.h1.x>= 300 || this.h1.y <= -50 || this.h1.y>= 500){
                this._touchStatus = false;
            }

            if(this.h1.x - this.point1 >=200 || this.h1.x - this.point1 <=-200){
                this.progress(this.index)
                this.index++;
                this.point1 = this.h1.x;
                this.point2 = this.h1.y;
            }
            else if(this.h1.y - this.point2 >=200 || this.h1.y - this.point2<=-200){
                this.progress(this.index)
                this.index++;
                this.point1 = this.h1.x;
                this.point2 = this.h1.y;
            }

            if(this.index>3){
                this.end();
            }
            
        }
    }

    private mouseUp(evt: egret.TouchEvent) {
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        
    }

    private progress(index){
        let bar = [this.p5, this.p6, this.p7, this.p9]
        let drew = [this.p1, this.p2, this.p3,this.p4]

        this.animation1(bar[index], 0)
        this.animation1(drew[index], 0)
        var sound1 = new egret.Sound();
        var url: string = "resource/assets/music/draw.mp3";
        sound1.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        sound1.load(url);

    }


    private inArea(x: number, y: number, bx: number, by: number, bwidth: number, bheight: number): boolean {
        if (x <= bx + bwidth && x >= bx && y >= by && y <= by + bheight) {
            return true;
        }
        else {
            return false;
        }
    }

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private animation(e, num1) {
        this.addChild(e);
        e.alpha = 0;
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 1500);
    }

    private animation1(e, num1) {
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 1500);
    }

    private animation2(e, num1) {
        this.addChild(e);
        e.alpha = 0;
        e = egret.Tween.get(e);
        e.wait(num1);
        e.to({ "alpha": 1 }, 0);
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


}