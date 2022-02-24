class ChartBox extends egret.DisplayObjectContainer {
  private resources = {
    boy: [
      "/resource/assets/component/ChartBox/boy.1.png",
      "/resource/assets/component/ChartBox/boy.2.png",
      "/resource/assets/component/ChartBox/boy.3.png",
      "/resource/assets/component/ChartBox/boy.4.png",
      "/resource/assets/component/ChartBox/boy.5.png",
    ],
    girl: [
      "/resource/assets/component/ChartBox/girl.1.png",
      "/resource/assets/component/ChartBox/girl.2.png",
      "/resource/assets/component/ChartBox/girl.3.png",
      "/resource/assets/component/ChartBox/girl.4.png",
    ],
  };

  private used = {
    boy: 1,
    girl: 0,
    click: 0,
  };

  // 指示现在的台词数
  private line: number = 0;
  private waiting: boolean = false;
  private e;
  private that: Scene;
  private sound: Sound = new Sound("ring.mp3", 1, false);

  constructor(e, that) {
    super();
    const bgi = new eui.Image("/resource/assets/component/ChartBox/6.18.jpg");
    const boy = new eui.Image(this.resources.boy[0]);
    boy.y = this.line * 120 + 100;
    that.addSound(this.sound);
    this.line++;
    this.addChild(bgi);
    this.addChild(boy);
    this.e = e;
    this.that = that;
  }
  public start() {
    this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
  }
  public end() {
    this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
  }

  private onTap() {
    if (this.line >= 9) {
      this.end();
      this.e();
    }

    if (this.waiting) return;

    if (this.used.click === 0) {
      this.that.childTime(500, this.showGirl.bind(this));
    }
    this.used.click++;
  }

  private showBoy() {
    if (this.waiting || this.line === 9) return;
    this.waiting = true;

    const count = Math.floor(Math.random() * 2);

    this.sound.play();

    for (let i = 0; i <= count; i++) {
      if (this.line < 9) {
        const resource = this.resources.boy[this.used.boy % 5];
        const boy = new eui.Image(resource);
        const line = this.line;
        boy.y = line * 120 + 100;
        this.used.boy++;
        this.line++;
        this.that.childTime(200 * i, () => {
          this.addChild(boy);
          if (i === count || line === 9) {
            this.waiting = false;
            this.used.click = 0;
          }
        });
      }
    }
  }

  private showGirl() {
    if (this.waiting) return;
    this.waiting = true;
    const count = this.used.click > 2 ? 2 : this.used.click;

    for (let i = 1; i <= count; i++) {
      if (this.line < 9) {
        const girl = new eui.Image(this.resources.girl[this.used.girl % 4]);
        this.used.girl++;
        girl.y = this.line * 120 + 100;
        this.line++;
        this.addChild(girl);
      }
    }

    this.waiting = false;

    this.that.childTime(500, this.showBoy.bind(this));
  }
}
