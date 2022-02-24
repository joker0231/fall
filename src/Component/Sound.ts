class Sound {
  private _sound: egret.Sound;

  private _sound_channel: egret.SoundChannel;

  private _pauseTime: number;

  private load: boolean = false;

  private loop: number;

  constructor(source: string, loop?: number, autoplay?: boolean) {
    const sound: egret.Sound = RES.getRes(source);

    if (sound instanceof egret.Sound) {
      this._sound = sound;
      this.loop = loop !== undefined ? loop : 1;

      if (autoplay) {
        this.play();
      }
    }
  }

  public getLoad() {
    return this.load;
  }

  //播放
  public play(): void {
    //sound 播放会返回一个 SoundChannel 对象，暂停、音量等操作请控制此对象

    const channel = this._sound.play(this._pauseTime, this.loop);

    this._sound_channel = channel;

    if (this.loop === 0) {
      channel.addEventListener(
        egret.Event.SOUND_COMPLETE,
        () => {
          this.stop();
          this.play();
        },
        this
      );
    }
  }
  //停止
  public stop(): void {
    if (this._sound_channel) {
      this._sound_channel.stop();
      this._sound_channel = null;
    }
  }

  // 静音
  public mute() {
    this._sound_channel.volume = 0;
  }

  // 取消

  public unmute() {
    this._sound_channel.volume = 1;
  }
}
