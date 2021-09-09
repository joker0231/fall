class LineBind extends egret.DisplayObjectContainer {
  private binder: egret.DisplayObject;
  private _distance: egret.Point = new egret.Point();
  private ball: eui.Image;
  private limit: {
    left: number;
    right: number;
    offset: number;
  };
  private event: {
    progress: number;
    func: Function;
    hasTriggerd?: boolean;
  }[] = [];

  constructor(props: LineBindProps) {
    super();
    this.binder = props.binder;
    this.limit = props.limit;
    this.event = props.event;
    const line = Size.preferedSizeImage("/resource/assets/component/LineBind/button.1.png");
    const ball = Size.preferedSizeImage("/resource/assets/component/LineBind/button2.png");

    this.addChild(line);
    this.addChild(ball);

    ball.pixelHitTest = true;

    ball.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
    ball.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    ball.x = -20;
    this.ball = ball;
  }

  private EventAction(progress: number) {
    const todoEvent = this.event.filter((event) => {
      // 触发了的过滤
      if (event.hasTriggerd) {
        return false;
      }
      // 进度不够过滤
      if (event.progress > progress) {
        return false;
      }

      return true;
    });
    todoEvent.map((e) => {
      e.hasTriggerd = true;
      e.func();
    });
  }

  private mouseUp(event: egret.TouchEvent) {
    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.mouseMove,
      this
    );
  }
  private mouseMove(event: egret.TouchEvent) {
    const ballLimit = {
      left: -20,
      right: 240,
    };

    if (
      event.stageX - this._distance.x > ballLimit.left &&
      event.stageX - this._distance.x < ballLimit.right
    ) {
      this.ball.x = event.stageX - this._distance.x;
      // 移动绑定
      const percent =
        (event.stageX - this._distance.x - ballLimit.left) /
        (ballLimit.right - ballLimit.left);
      this.binder.x =
        percent * (this.limit.right - this.limit.left) +
        this.limit.left +
        this.limit.offset;
      this.EventAction(percent * 100);
    }
  }
  private mouseDown(event: egret.TouchEvent) {
    this._distance.x = event.stageX - this.ball.x;
    this.stage.addEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.mouseMove,
      this
    );
  }
}

interface LineBindProps {
  binder: egret.DisplayObject;
  limit: {
    left: number;
    right: number;
    offset: number;
  };
  event?: {
    progress: number;
    func: Function;
  }[];
}
