abstract class Layers extends egret.DisplayObjectContainer implements LayerInterface {

    protected showings: eui.Image[] = [];
    protected names: string[] = [];
    protected objectsWithTweens = [];

    protected callback: Function = null;
    protected parentObject: egret.DisplayObject = null;

    protected sounds: egret.Sound[] = [];
    protected soundnames: string[] = [];
    protected soundchennels: egret.SoundChannel[] = [];

    constructor() {
        super();
        this.x = this.y = 0;
        this.width = 720;
        this.height = 1280;
    }

    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
        this.callback = callback;
        this.parentObject = thisObject;
    };


    private preferedSizeImage(sourse: string): eui.Image {
        const image = new eui.Image(sourse);
        return image;
    }


    protected getBitMapByName(name: string) {
        let i = this.names.indexOf(name)
        if (i == -1) {
            this.showings.push(this.preferedSizeImage(name));
            this.names.push(name);
            return this.showings[this.showings.length - 1];
        } else {
            return this.showings[i];
        }
    }

    protected inRect(x: number, y: number, bx: number, by: number, bwidth: number, bheight: number): boolean {
        if (x > bx && x < bx + bwidth && y > by && y < by + bheight) {
            return true;
        } else {
            return false;
        }
    }

    protected createTween(target: any, props?: {
        loop?: boolean;
        onChange?: Function;
        onChangeObj?: any;
    }, pluginData?: any, override?: boolean): egret.Tween {
        let tween = egret.Tween.get(target, props, pluginData, override);
        if (this.objectsWithTweens.indexOf(target) == -1) {
            console.log("not seen");
            this.objectsWithTweens.push(target);
        } else {
            console.log("seen");
        }
        return tween;
    }

    protected removeTweens(target) {
        egret.Tween.removeTweens(target);
    }

    protected playSound(soundname: string, startTime: number, loops: number) {
        let sound = this.sounds[this.soundnames.indexOf(soundname)];
        let channel = sound.play(startTime, loops);
        if (ISMUTE) {
            channel.volume = 0;
        }
        this.soundchennels.push(channel);
    }

    protected loadSounds(paths: string[], dirpath: string) {
        console.log("loadsounds called!");
        console.log(paths);
        paths.forEach(str => {
            console.log("loading sound " + str)
            this.soundnames.push(str);
            let sound = new egret.Sound();
            this.sounds.push(sound);
            sound.load(dirpath + str + ".mp3");
        })
    }

    protected stopSounds() {
        this.soundchennels.forEach(channel => {
            channel.stop();
        });
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
        this.soundchennels.forEach(chennel => {
            chennel.volume = 0;
        });
    }

    public unmute() {
        this.soundchennels.forEach(chennel => {
            chennel.volume = 1;
        });
    }

}
