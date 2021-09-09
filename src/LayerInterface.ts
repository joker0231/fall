interface LayerInterface extends egret.DisplayObjectContainer {
    /**
    * 外部调用本函数以开始播放，当播放结束后调用parentObject.callback()返回,应当覆盖此方法并添加入口
    * @param callback 回调函数
    * @param thisObject 回调函数作用域
    */
    show(callback: Function, thisObject: egret.DisplayObjectContainer);
    resume();
    pause();
    mute();
    unmute();
}