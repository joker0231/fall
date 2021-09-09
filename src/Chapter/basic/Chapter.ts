interface DisplayObject {
  name: string;
  entity: egret.DisplayObject;
}

/**
 * 章节
 */
class Chapter extends egret.DisplayObjectContainer {
  // 背景
  public background: string = "";
  private age: string;

  private scenesList: Scene[] = [];

  private tweenTime: TweenTime;
  private timeTick: TimeTick;

  private sounds: Sound[] = [];

  private nextChapter: {
    callback: Function;
    that: egret.DisplayObjectContainer;
  } = {
    callback: () => {},
    that: null,
  };

  constructor(age: string) {
    super();
    this.age = age;
    this.tweenTime = new TweenTime();
    this.timeTick = new TimeTick();
    this.addEventListener(
      egret.Event.ADDED_TO_STAGE,
      this.onAddedToStage,
      this
    );
  }

  /**
   * @OverRide show
   */

  public show(callback: Function, thisObject: egret.DisplayObjectContainer) {
    this.nextChapter = {
      callback,
      that: thisObject,
    };
  }

  private onAddedToStage() {
    const age = Size.preferedSizeImage(this.age);

    this.addScene(
      new Scene(this, {
        last: 2000,
        starter() {
          this.addChild(age);
        },
      })
    );

    this.main();
    if (this.background !== "") {
      const bgi = new eui.Image();
      Size.preferedSize(bgi);
      bgi.source = this.background;
      this.addChildAt(bgi, 0);
    }

    egret.startTick(this.timeTick.update, this.timeTick);
    this.resume();
    if (this.scenesList.length) {
      this.scenesList[0].start();
    }
  }

  /**
   * 场景
   *
   * 在画面发生 大幅度变化的时候 将 画面元素分为两个场景
   *
   * 方便对 暂停元素进行管理， 方便进行转场转换
   *
   */

  public addScene(scene: Scene) {
    this.scenesList.push(scene);
    this.tweenTime.time(scene);
  }

  /**
   * 暂停
   */
  public pause() {
    this.timeTick.stop();

    if (this.scenesList.length) {
      this.scenesList.map((s) => {
        s.pause();
      });
    }

    this.tweenTime.pause();
  }

  /**
   * 播放
   */
  public resume() {
    this.timeTick.start();
    if (this.scenesList.length) {
      this.scenesList.map((s) => {
        s.play();
      });
    }

    this.tweenTime.play();
  }

  public mute() {
    this.sounds.map((s) => {
      s.mute();
    });
  }
  public unmute() {
    this.sounds.map((s) => {
      s.unmute();
    });
  }

  public addSound(sound: Sound) {
    this.sounds.push(sound);
  }

  public main() {}

  public getTweenTime() {
    return this.tweenTime;
  }

  public nextScene(the_scene: Scene, transition?: string) {
    this.scenesList.shift();

    if (this.scenesList.length) {
      switch (transition) {
        case undefined: {
          this.scenesList[0].start();
          this.timeTick.registerEvent(0, () => {
            the_scene.end();
          });
          break;
        }
        case "hori": {
          Transition.sceneHori(the_scene, this.scenesList[0]);
          break;
        }
        case "veri": {
          Transition.sceneVeri(the_scene, this.scenesList[0]);
          break;
        }
      }
    } else {
      this.nextChapter.callback.call(this.nextChapter.that);
    }
  }
}
