class Movie extends Layers {
    private video = new egret.Video();
    constructor() {
        super();
        this.video.x = 0;
        this.video.y = 0;
        this.video.width = 720;
        this.video.height = 1280;
        this.video.fullscreen = false;

    }
    public show(callback: Function, thisObject: egret.DisplayObjectContainer) {

        console.log("video!")
        this.callback = callback;
        this.parentObject = thisObject;

        this.addChild(this.video);
        this.video.load("resource/movie.mp4");
        this.video.volume = ISMUTE ? 0 : 1;
        this.video.play();
        this.video.addEventListener(egret.Event.ENDED, this.callback, this.parentObject);

    }

    public pause() {
        super.pause();
        this.video.pause();
    }
    public resume() {
        super.resume();
        this.video.play();
    }
    public mute() {
        super.mute();
        this.video.volume = 0;
    }
    public unmute() {
        super.unmute();
        this.video.volume = 1;
    }
}