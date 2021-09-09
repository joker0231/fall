class DrawArea extends egret.DisplayObjectContainer {
  private shape: egret.Shape;
  private size;
  private position;
  private event: {
    up?: (e: egret.TouchEvent) => boolean | void;
    move?: (e: egret.TouchEvent) => boolean | void;
    down?: (e: egret.TouchEvent) => boolean | void;
  } = {};

  constructor(props?: DrawAreaProps) {
    super();
    const size = {
      width: 720,
      height: 1280,
      ...props?.size,
    };

    const position = {
      x: 0,
      y: 0,
      ...props?.position,
    };
    const shape = new egret.Shape();

    this.size = size;
    this.shape = shape;
    this.position = position;

    this.width = size.width;
    this.height = size.height;

    this.x = position.x;
    this.y = position.y;

    shape.width = size.width;
    shape.height = size.height;

    if (props?.event) {
      this.event = props.event;
    }

    this.addChild(shape);

    this.addEventListener(
      egret.Event.ADDED_TO_STAGE,
      () => {
        this.stage.addEventListener(
          egret.TouchEvent.TOUCH_BEGIN,
          this.onDraw,
          this
        );
        this.stage.addEventListener(
          egret.TouchEvent.TOUCH_MOVE,
          this.onMoueMove,
          this
        );
      },
      this
    );
  }

  private onDraw(e: egret.TouchEvent) {
    this.shape.graphics.beginFill(0xff0000, 1);
    this.shape.graphics.drawCircle(
      e.stageX - this.position.x,
      e.stageY - this.position.y,
      30
    );
    this.shape.graphics.endFill();
  }

  private onMoueMove(e: egret.TouchEvent) {
    if (this.event.move) {
      this.event.move(e);
    }
    this.onDraw(e);
  }

  public end() {
    if (this.parent) {
      this.stage.removeEventListener(
        egret.TouchEvent.TOUCH_BEGIN,
        this.onDraw,
        this
      );
      this.stage.removeEventListener(
        egret.TouchEvent.TOUCH_MOVE,
        this.onMoueMove,
        this
      );
      this.parent.removeChild(this);
    }
  }
}

interface DrawAreaProps {
  position?: {
    x: number;
    y: number;
  };
  size?: {
    width: number;
    height: number;
  };
  event?: {
    up?: (e: egret.TouchEvent) => boolean | void;
    move?: (e: egret.TouchEvent) => boolean | void;
    down?: (e: egret.TouchEvent) => boolean | void;
  };
}
