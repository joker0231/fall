class Movable extends egret.DisplayObjectContainer {
  private movableChildren: movableChild[] = [];
  private upperLayer = [];

  private moveCode: number;
  private _distance: egret.Point = new egret.Point();

  constructor() {
    super();
    Size.preferedSize(this);
  }

  public addMovableChild(movableChild: movableChild) {
    this.addChild(movableChild.entity);
    if (movableChild.entity instanceof eui.Image) {
      if (movableChild?.special?.pixelHitTest === false) {
        movableChild.entity.pixelHitTest = false;
      } else {
        movableChild.entity.pixelHitTest = true;
      }
    }

    movableChild.entity.addEventListener(
      egret.TouchEvent.TOUCH_BEGIN,
      this.mouseDown,
      this
    );

    movableChild.entity.addEventListener(
      egret.TouchEvent.TOUCH_END,
      this.mouseUp,
      this
    );

    this.movableChildren.push({
      ...movableChild,
      code: movableChild.entity.hashCode,
    });
  }

  public removeMovableChild(removename: string | string[]) {
    let names = [];
    if (typeof removename === "string") {
      names.push(removename);
    } else if (typeof removename === "object") {
      names = removename;
    }

    names.map((name) => {
      const [removeChild] = this.movableChildren.filter((c) => c.name === name);
      if (removeChild === undefined) {
        return;
      }
      // 移除监听
      removeChild.entity.removeEventListener(
        egret.TouchEvent.TOUCH_BEGIN,
        this.mouseDown,
        this
      );
      removeChild.entity.removeEventListener(
        egret.TouchEvent.TOUCH_END,
        this.mouseUp,
        this
      );
    });

    this.movableChildren = this.movableChildren.filter(
      (c) => names.indexOf(c.name) === -1
    );
  }

  public setMoveAbility(name: string | string[], able: boolean) {
    let names = [];
    if (typeof name === "string") {
      names.push(name);
    } else if (typeof name === "object") {
      names = name;
    }

    names.map((name) => {
      const [child] = this.movableChildren.filter((c) => c.name === name);
      if (child === undefined) {
        return;
      }

      child.able = able;
    });
  }

  public addStaticChild(
    staticChild: staticChild,
    options?: {
      index?: number;
      through?: boolean;
    }
  ) {
    this.upperLayer.push(staticChild);

    if (options?.through) {
      staticChild.entity.pixelHitTest = options.through;
    }

    if (options?.index) {
      this.addChildAt(staticChild.entity, options.index);
    } else {
      this.addChild(staticChild.entity);
    }
  }

  private limitPosition(p: number, limit?: [number, number]) {
    if (limit === undefined || (p >= limit[0] && p <= limit[1])) {
      return {
        p,
        limit: 0,
      };
    } else if (p < limit[0]) {
      return {
        p: limit[0],
        limit: 1,
      };
    } else if (p > limit[1]) {
      return {
        p: limit[1],
        limit: 2,
      };
    }
  }

  private mouseUp(event: egret.TouchEvent) {
    const [movableChild] = this.movableChildren.filter(
      (c) => c.code === this.moveCode
    );

    if (movableChild === undefined || movableChild.able === false) {
      return;
    }

    if (movableChild?.event?.up) {
      movableChild.event.up(event, {
        name: movableChild.name,
        entity: movableChild.entity,
      });
    }

    this.moveCode = 0;

    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_END,
      this.mouseUp,
      this
    );

    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.mouseMove,
      this
    );
  }

  private mouseMove(event: egret.TouchEvent) {
    const [movableChild] = this.movableChildren.filter(
      (c) => c.code === this.moveCode
    );

    if (movableChild === undefined || movableChild.able === false) {
      return;
    }

    const Px = this.limitPosition(
      event.stageX - this._distance.x,
      movableChild?.special?.limit?.hori
    );
    const Py = this.limitPosition(
      event.stageY - this._distance.y,
      movableChild?.special?.limit?.veri
    );

    if (movableChild?.event?.move) {
      // 执行额外事件， 如果事件返回 false 终止后续事件;
      const flag = movableChild.event.move(
        event,
        {
          x: Px.p,
          y: Py.p,
        },
        {
          name: movableChild.name,
          entity: movableChild.entity,
        }
      );
      if (flag === false) {
        return;
      }
    }

    if (Px.limit && movableChild?.event?.limit) {
      movableChild?.event?.limit(
        event,
        {
          limit: movableChild?.special?.limit?.hori,
          direction: "x",
          border: Px.limit - 1,
        },
        {
          name: movableChild.name,
          entity: movableChild.entity,
        }
      );
    }

    if (Py.limit && movableChild?.event?.limit) {
      movableChild?.event?.limit(
        event,
        {
          limit: movableChild?.special?.limit?.veri,
          direction: "y",
          border: Py.limit - 1,
        },
        {
          name: movableChild.name,
          entity: movableChild.entity,
        }
      );
    }

    if (this.moveCode >= 1) {
      if (movableChild?.special) {
        if (movableChild?.special?.direction === "hori") {
          movableChild.entity.x = Px.p;
        } else if (movableChild?.special?.direction === "veri") {
          movableChild.entity.y = Py.p;
        }
      } else {
        movableChild.entity.x = Px.p;
        movableChild.entity.y = Py.p;
      }
    }
  }

  private mouseDown(event: egret.TouchEvent) {
    const [movableChild] = this.movableChildren.filter(
      (c) => c.code === event.target.hashCode
    );
    if (movableChild === undefined || movableChild.able === false) {
      return;
    }

    // 事件存在
    if (movableChild?.event?.down) {
      // 执行额外事件， 如果事件返回 false 终止后续事件;
      const flag = movableChild.event.down(event, {
        name: movableChild.name,
        entity: movableChild.entity,
      });
      if (flag === false) {
        return;
      }
    }

    this.moveCode = event.target.hashCode;
    // stage X Y 整个画布
    this._distance.x = event.stageX - movableChild.entity.x;
    this._distance.y = event.stageY - movableChild.entity.y;

    this.stage.addEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.mouseMove,
      this
    );

    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
  }

  public end() {
    this.moveCode = 0;
    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.mouseMove,
      this
    );
    this.removeChildren();
  }
}

interface movableChild {
  name: string;
  code?: number;
  entity: eui.Image | egret.DisplayObject;
  able?: boolean;
  special?: {
    direction?: "hori" | "veri";
    pixelHitTest?: boolean;
    limit?: {
      hori?: [number, number];
      veri?: [number, number];
    };
  };
  event?: {
    up?: (
      e: egret.TouchEvent,
      extra?: {
        name?: string;
        entity?: egret.DisplayObject;
      }
    ) => boolean | void;
    move?: (
      e: egret.TouchEvent,
      position: { x: number; y: number },
      extra?: {
        name?: string;
        entity?: egret.DisplayObject;
      }
    ) => boolean | void;
    down?: (
      e: egret.TouchEvent,
      extra?: {
        name?: string;
        entity?: egret.DisplayObject;
      }
    ) => boolean | void;
    limit?: (
      e: egret.TouchEvent,
      limitEvent: {
        limit: [number, number];
        direction: "x" | "y";
        border: number;
      },
      extra?: {
        name?: string;
        entity?: egret.DisplayObject;
      }
    ) => boolean | void;
  };
}

interface staticChild {
  name: string;
  code?: number;
  entity: eui.Image;
}
