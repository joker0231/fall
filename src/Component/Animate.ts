class Animate extends egret.DisplayObjectContainer {
  private prefix: string;
  private frames: (string | egret.DisplayObject | AnimateFrame)[] = [];
  private timeTick: TimeTick;
  private common: FrameCommon;
  /** 动画播放次数 */
  private runCircleTime: number = 0;
  private loop: boolean;

  private event: {
    over?:
      | (() => void)
      | {
          before: number;
          func: () => void;
        };
  } = {};

  private tweenTime: TweenTime = new TweenTime();

  private currentFrame: {
    index: number;
    entity: egret.DisplayObject;
  } = {
    index: -1,
    entity: null,
  };

  constructor(props: AnimateProps) {
    super();
    this.frames = props.frames;
    this.timeTick = new TimeTick();
    this.prefix = props.prefix;
    this.common = {
      before: 0,
      in: 500,
      during: 1000,
      out: 500,
      after: 0,
      ...props?.common,
    };
    this.loop = props.loop;
    this.event = props?.event;

    if (props.preLoad) {
      const nextFrame = this.frames[0];

      let entity = null;

      if (
        typeof nextFrame === "string" ||
        nextFrame instanceof egret.DisplayObject
      ) {
        entity =
          typeof nextFrame === "string"
            ? new eui.Image(
                this.prefix === undefined ? nextFrame : this.prefix + nextFrame
              )
            : nextFrame;
        if (this.loop) {
          this.frames[this.currentFrame.index + 1] = entity;
        }
      } else {
        entity =
          typeof nextFrame.sourse === "string"
            ? new eui.Image(
                nextFrame.usePrefix === false
                  ? nextFrame.sourse
                  : this.prefix + nextFrame.sourse
              )
            : nextFrame.sourse;
      }

      this.addChild(entity);

      if (
        typeof nextFrame === "string" ||
        nextFrame instanceof egret.DisplayObject ||
        nextFrame.trigger === undefined
      ) {
        entity.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            if (entity.alpha === 1) {
              this.nextFrame();
            }
          },
          this
        );
      }

      this.currentFrame = {
        index: 0,
        entity,
      };
    }
  }

  /** 获取动画播放次数 */
  public getRunCircleTime() {
    return this.runCircleTime;
  }

  public setFrames(frames: (string | egret.DisplayObject | AnimateFrame)[]) {
    this.frames = frames;
  }

  public everTick(timeStemp: number) {
    this.timeTick.update(timeStemp);

    return false;
  }

  public getTweenTime() {
    return this.tweenTime;
  }

  private nextFrame() {
    if (this.currentFrame.index === this.frames.length) {
      return;
    }

    // 处理前一帧
    if (
      this.currentFrame.index !== -1 ||
      (this.loop === true && this.currentFrame.entity !== null)
    ) {
      const nowFrame = this.frames[this.currentFrame.index];
      const entity = this.currentFrame.entity;

      const { tw, end } = Transition.out(this, entity, {
        during:
          typeof nowFrame === "string" ||
          nowFrame instanceof egret.DisplayObject ||
          nowFrame?.common?.during === undefined
            ? this.common?.out
            : nowFrame?.common?.out,
        after:
          typeof nowFrame === "string" ||
          nowFrame instanceof egret.DisplayObject ||
          nowFrame?.common?.after === undefined
            ? this.common?.after
            : nowFrame?.common?.after,
      });

      tw.call(() => {
        end();
      });
    }

    // 当前将要显示的帧
    const nextFrame = this.frames[this.currentFrame.index + 1];

    // 得到当前帧 实体
    let entity: egret.DisplayObject = null;
    if (
      typeof nextFrame === "string" ||
      nextFrame instanceof egret.DisplayObject
    ) {
      entity =
        typeof nextFrame === "string"
          ? new eui.Image(
              this.prefix === undefined ? nextFrame : this.prefix + nextFrame
            )
          : nextFrame;
      if (this.loop) {
        this.frames[this.currentFrame.index + 1] = entity;
      }
    } else {
      entity =
        typeof nextFrame.sourse === "string"
          ? new eui.Image(
              nextFrame.usePrefix === false
                ? nextFrame.sourse
                : this.prefix + nextFrame.sourse
            )
          : nextFrame.sourse;
      if (this.loop) {
        nextFrame.sourse = entity;
      }
    }

    // 显示当前帧
    const { tw, end } = Transition.in(this, entity, {
      during:
        typeof nextFrame === "string" ||
        nextFrame instanceof egret.DisplayObject ||
        nextFrame?.common?.in === undefined
          ? this.common?.in
          : nextFrame?.common?.in,
      before:
        typeof nextFrame === "string" ||
        nextFrame instanceof egret.DisplayObject ||
        nextFrame?.common?.before === undefined
          ? this.common?.before
          : nextFrame?.common?.before,
    });
    tw.call(() => {
      end();
    });

    // 调用下一帧
    if (this.currentFrame.index < this.frames.length - 2 || this.loop) {
      if (
        typeof nextFrame === "string" ||
        nextFrame instanceof egret.DisplayObject ||
        nextFrame.trigger === undefined
      ) {
        // 决定下一个next的调用时机
        const time =
          (typeof nextFrame === "string" ||
          nextFrame instanceof egret.DisplayObject ||
          nextFrame?.common.before === undefined
            ? this.common.before
            : nextFrame?.common.before) +
          (typeof nextFrame === "string" ||
          nextFrame instanceof egret.DisplayObject ||
          nextFrame?.common.in === undefined
            ? this.common.in
            : nextFrame?.common.in) +
          (typeof nextFrame === "string" ||
          nextFrame instanceof egret.DisplayObject ||
          nextFrame?.common.during === undefined
            ? this.common.during
            : nextFrame?.common.during) +
          500;

        this.timeTick.registerEvent(time, () => {
          this.nextFrame();
        });
      } else {
        // 根据事件产生监听
        entity.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            if (entity.alpha === 1) {
              this.nextFrame();
            }
          },
          this
        );
      }
    }

    // 整个动画结束 不循环

    if (this.currentFrame.index === this.frames.length - 2) {
      if (!this.loop) {
        if (
          typeof nextFrame !== "string" &&
          !(nextFrame instanceof egret.DisplayObject) &&
          nextFrame.trigger !== undefined
        ) {
          // 最后一帧存在点击事件， 点击触发over函数

          entity.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            () => {
              if (entity.alpha === 1) {
                if (typeof this.event?.over === "function") {
                  this.event?.over();
                } else if (typeof this.event?.over === "object") {
                  this.event?.over.func();
                }
              }
            },
            this
          );
        } else {
          if (typeof this.event?.over === "function") {
            this.event?.over();
          } else if (typeof this.event?.over === "object") {
            this.timeTick.registerEvent(
              this.event?.over.before + 500 || 500,
              this.event?.over.func
            );
          }
        }
      }
      this.runCircleTime++;
    }

    this.currentFrame = {
      index: this.currentFrame.index + 1,
      entity: entity,
    };

    if (this.loop && this.currentFrame.index + 1 === this.frames.length) {
      this.currentFrame.index = -1;
    }
  }

  public pause() {
    this.timeTick.stop();
    this.tweenTime.pause();
  }
  public play() {
    this.timeTick.start();
    this.tweenTime.play();
  }

  public start() {
    egret.startTick(this.everTick, this);
    this.timeTick.start();
    this.nextFrame();
  }

  public end(that) {
    this.removeChildren();
    this.pause();
    egret.stopTick(this.everTick, this);
    that.removeChild(this);
  }
}

interface AnimateProps {
  frames: (string | egret.DisplayObject | AnimateFrame)[];
  prefix?: string;
  /**
   * 淡入前 淡入中 画面保持时间 淡出中 淡出后
   */
  common?: FrameCommon;
  /** 循环动画禁用事件， */
  loop?: boolean;
  preLoad?: boolean;
  event?: {
    over:
      | (() => void)
      | {
          before: number;
          func: () => void;
        };
  };
}

interface AnimateFrame {
  usePrefix?: boolean;
  sourse: string | egret.DisplayObject;
  common?: FrameCommon;
  trigger?: "tap";
}

interface FrameCommon {
  before?: number;
  in?: number;
  during?: number;
  out?: number;
  after?: number;
}
