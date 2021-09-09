class Pause extends Layers {

    private pausecallback: Function;
    private resumecallback: Function;
    private mutecallback: Function;
    private unmutecallback: Function;
    private exitcallback: Function;

    constructor() {
        super();
        // ["暂停"].forEach(group_name => {
        //     RES.getGroupByName(group_name).forEach(item => {
        //         // console.log(item);
        //         let texture = RES.getRes(item.name);
        //         let bitmap = new egret.Bitmap(texture);
        //         if (item.name == "pause_png") {
        //             bitmap.x = 595;
        //             bitmap.y = 54;
        //             bitmap.width = 57;
        //             bitmap.height = 65;
        //         } else {
        //             bitmap.x = bitmap.y = 0;
        //             bitmap.width = 720;
        //             bitmap.height = 1280;
        //         }
        //         this.names.push(item.name);
        //         this.showing.push(bitmap);
        //     });
        // });
    }
    public _show(thisObject: egret.DisplayObjectContainer, pausecallback: Function, resumecallback: Function, mutecallback: Function, unmutecallback: Function, exitcallback: Function) {
        this.pausecallback = pausecallback;
        this.resumecallback = resumecallback;
        this.mutecallback = mutecallback;
        this.unmutecallback = unmutecallback;
        this.exitcallback = exitcallback;
        this.parentObject = thisObject;
        this.progress0();
    }

    private progress0() {
        let show = this.getBitMapByName("pause_png");
        show.touchEnabled = true;
        show.x = 595;
        show.y = 54;
        this.addChild(show);
        let event: Function;
        event = (e: egret.TouchEvent) => {
            // if (this.inRect(e.stageX, e.stageY, show.x, show.y, show.width, show.height)) {
            this.removeChild(show);
            show.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
            this.pausecallback.call(this.parentObject);
            this.progress1();
            // }
        };
        show.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    }

    private progress1() {
        let show = this.getBitMapByName("灰色_png");
        let cont = this.getBitMapByName("继续_png");
        let ex = this.getBitMapByName("退出_png");
        let music = this.getBitMapByName("音乐_png");
        let not = this.getBitMapByName("音乐.1_png")
        cont.touchEnabled = false;
        ex.touchEnabled = false;
        music.touchEnabled = false;
        not.touchEnabled = false;
        console.log(show);
        this.addChild(show);
        this.addChild(cont);
        this.addChild(ex);
        this.addChild(music);
        if (ISMUTE)
            this.addChild(not);
        let event: Function;
        event = (e: egret.TouchEvent) => {
            if (this.inRect(e.stageX, e.stageY, 164, 350, 391, 134)) {
                this.removeChild(show);
                this.removeChild(cont);
                this.removeChild(ex);
                this.removeChild(music);
                if (ISMUTE)
                    this.removeChild(not);
                show.removeEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
                this.resumecallback.call(this.parentObject);
                this.progress0();
            }
            if (this.inRect(e.stageX, e.stageY, 164, 491, 391, 134)) {
                if (ISMUTE) {
                    this.removeChild(not);
                    this.unmutecallback.call(this.parentObject);
                }
                else {
                    this.addChild(not);
                    this.mutecallback.call(this.parentObject);
                }
            }
            if (this.inRect(e.stageX, e.stageY, 164, 625, 391, 134)) {
                this.exitcallback.call(this.parentObject);
            }
        };
        show.addEventListener(egret.TouchEvent.TOUCH_TAP, event, this);
    }



}