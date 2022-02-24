abstract class Layers extends egret.DisplayObjectContainer implements LayerInterface {


    constructor() {
        super();
        this.x = this.y = 0;
        this.width = 720;
        this.height = 1280;
    }

    protected showing: egret.Bitmap[] = [];
    protected names: string[] = [];
    protected objectsWithTweens = [];

    protected callback: Function = null;
    protected parentObject: egret.DisplayObject = null;

    protected sounds: egret.Sound[] = [];
    protected soundschennel: egret.SoundChannel[] = [];

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        this.callback = callback;
        this.parentObject = thisObject;
    };

    protected inRect(x: number, y: number, bx: number, by: number, bwidth: number, bheight: number): boolean {
        if (x > bx && x < bx + bwidth && y > by && y < by + bheight) {
            return true;
        } else {
            return false;
        }
    }


    protected getBitMapByName(name: string): egret.Bitmap {
        return this.showing[this.names.indexOf(name)];
    }

    protected createTween(target: any, props?: {
        loop?: boolean;
        onChange?: Function;
        onChangeObj?: any;
    }, pluginData?: any, override?: boolean): egret.Tween {
        let tween = egret.Tween.get(target, props, pluginData, override);
        if (this.objectsWithTweens.indexOf(target) == -1) {
            this.objectsWithTweens.push(target);
        }
        return tween;
    }

    protected removeTweens(target) {
        egret.Tween.removeTweens(target);
        this.objectsWithTweens[this.objectsWithTweens.indexOf(target)] = null;
    }


    public pause() {
        console.log("pause called!");
        this.objectsWithTweens.forEach(object => {
            if (!(object === null)) {
                egret.Tween.pauseTweens(object);
            }
        });
    }

    public resume() {
        console.log("resume called!");
        this.objectsWithTweens.forEach(object => {
            if (!(object === null)) {
                egret.Tween.resumeTweens(object);
            }
        });
    }

    public mute() {
        this.soundschennel.forEach(chennel => {
            chennel.volume = 0;
        });
    }

    public unmute() {
        this.soundschennel.forEach(chennel => {
            chennel.volume = 1;
        });
    }

}