class Scene extends egret.DisplayObjectContainer {
  /**
   * @param name 名字
   *
   * @param options 可选参数
   *
   * @param that 所属章节
   */
  constructor(that: Chapter, options) {
    super();
    this.chapter = that;
    this.option = options;
    this.tweenTime;
    if (options.main) {
      this.main = options.main;
      this.main();
    }
    if (options.starter) this.starter = options.starter;
  }

  private chapter: Chapter;

  private option: Record<string, any>;

  // 掌控现在正在执行的 缓动
  private tweenTime: TweenTime = new TweenTime();
  private frameChildren = [];
  private timeTick: TimeTick = new TimeTick();

  /**
   * @intro 把自身加入到chapter中
   */
  public start() {
    egret.startTick(this.timeTick.update, this.timeTick);
    this.starter();
    // last 时间之后 自动下一场景
    if (this.option.last) {
      this.timeTick.registerEvent(2000, () => {
        this.nextScene();
      });
    }
    this.play();
    this.chapter.addChild(this);
  }

  private starter() {}

  public play() {
    this.frameChildren.map((c) => {
      c.play();
    });

    this.tweenTime.play();
    this.timeTick.start();
  }

  public pause() {
    this.frameChildren.map((c) => {
      c.pause();
    });

    this.tweenTime.pause();
    this.timeTick.stop();
  }

  public getTweenTime() {
    return this.tweenTime;
  }

  public addSound(sound: Sound) {
    this.chapter.addSound(sound);
  }

  public addFrameChild(frameChild: {
    pause: Function;
    play: Function;
    [a: string]: any;
  }) {
    this.frameChildren.push(frameChild);
  }

  // 这里面直接写， 该干啥干啥
  public main() {}

  public childTime(t: number, f: Function, a?: any[]) {
    this.timeTick.registerEvent(t, f, a);
  }

  public nextScene(transition?: "hori") {
    console.log("runed");
    this.chapter.nextScene(this, transition);
    this.pause();
  }

  public end() {
    if (this.parent === this.chapter) {
      this.removeChildren();
      this.chapter.removeChild(this);
    }
  }
}
