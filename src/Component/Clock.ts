class Clock extends egret.DisplayObjectContainer {
  constructor(props?: ClockProps) {
    super();
    const clock = new eui.Image("/resource/assets/component/Clock/clock.1.png");
    const clock2 = new eui.Image(
      "/resource/assets/component/Clock/clock.2.png"
    );
    const clock3 = new eui.Image(
      "/resource/assets/component/Clock/clock.3.png"
    );

    this.addChild(clock);
    // h
    this.addChild(clock2);
    // min
    this.addChild(clock3);

    Size.setCenter(clock2, this.clockCenter);
    Size.setCenter(clock3, this.clockCenter);

    clock3.pixelHitTest = true;

    clock2.rotation = -75;

    this.hour = {
      entity: clock2,
      time: 0,
    };

    this.minute = {
      entity: clock3,
      time: 0,
      last: 0,
    };

    clock3.addEventListener(
      egret.TouchEvent.TOUCH_BEGIN,
      this.onMouseDown,
      this
    );

    this.addEventListener(
      egret.Event.ADDED_TO_STAGE,
      () => {
        this.stage.addEventListener(
          egret.TouchEvent.TOUCH_END,
          this.onMouseUp,
          this
        );
      },
      this
    );
    if (props?.event) {
      this.event = props.event;
    }
    if (props?.init) {
      this.setTime(props.init.hour, props.init.minute);
    }
  }
  private hour: {
    entity: eui.Image;
    time: number;
    last?: number;
  };
  private minute: {
    entity: eui.Image;
    time: number;
    last?: number;
  };

  private event: {
    onHour?: (hour: number) => void;
    onChange?: (e: ClockEvent) => void;
    toStop?: (e: ClockEvent) => boolean;
  } = {};

  private touching: boolean = false;

  private clockCenter = { x: 360, y: 984 };

  public enable = true;

  private onMouseDown(e: egret.TouchEvent) {
    if (!this.enable) {
      return;
    }
    this.touching = true;
    this.stage.addEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.onMouseMove,
      this
    );
  }
  private onMouseMove(e: egret.TouchEvent) {
    if (!this.touching || !this.enable) {
      return;
    }
    // 计算部分
    let angle = 0;

    const quadrant = this.getQuadrant({
      x: e.stageX,
      y: e.stageY,
    });

    if (e.stageY - this.clockCenter.y !== 0) {
      angle =
        (Math.atan(
          -(e.stageX - this.clockCenter.x) / (e.stageY - this.clockCenter.y)
        ) /
          Math.PI) *
        180;
    }

    switch (quadrant) {
      case 1:
      case 7: {
        angle = angle;
        break;
      }
      case 2:
      case 3:
      case 8: {
        angle = angle + 180;
        break;
      }
      case 4: {
        angle = angle + 360;
        break;
      }
      // x
      case 5: {
        angle = 90;
        break;
      }
      case 6: {
        angle = 270;
        break;
      }
      default: {
        angle = undefined;
      }
    }
    if (angle === undefined) {
      return;
    }

    const nowMinute = Math.floor(this.in360(angle / 6));
    const offsetMin = this.minute.time - nowMinute;
    // 靠角度会产生偏差 依靠分针变化计算
    const nowHour =
      this.hour.time + (offsetMin > 50 ? 1 : offsetMin < -50 ? -1 : 0);

    const clockEvent = {
      now: {
        hour: nowHour,
        minute: nowMinute,
      },
      last: {
        hour: this.hour.time,
        minute: this.minute.time,
      },
      changed: {
        hour: nowHour - this.hour.time,
        minute: nowMinute - this.minute.time,
      },
    };

    // 事件部分

    // 简陋的 prevent
    if (this.event.toStop) {
      if (!this.event.toStop(clockEvent)) {
        this.onMouseUp(e);
        return;
      }
    }
    if (this.event.onChange) {
      // 事件处理
      this.event.onChange(clockEvent);
    }

    if (nowHour !== this.hour.time) {
      // 小时变化处理
      if (this.event.onHour) {
        this.event.onHour(nowHour * (nowHour - this.hour.time > 0 ? 1 : -1));
      }
      this.hour.time = nowHour;
    }

    // 更新部分

    if (Math.abs(angle - this.minute.last) < 180) {
      this.hour.entity.rotation = this.in360(
        this.hour.entity.rotation + (angle - this.minute.last) / 12
      );
    } else if (angle - this.minute.last > 180) {
      this.hour.entity.rotation = this.in360(
        this.hour.entity.rotation + (angle - this.minute.last - 360) / 12
      );
    } else {
      this.hour.entity.rotation = this.in360(
        this.hour.entity.rotation - (angle - this.minute.last + 360) / 12
      );
    }

    this.minute.last = angle;
    this.minute.time = nowMinute;
    this.minute.entity.rotation = angle;
  }

  private in360(angle) {
    return ((angle % 360) + 360) % 360;
  }

  private getQuadrant(
    p: { x: number; y: number },
    base: { x: number; y: number } = this.clockCenter
  ) {
    // 相对于一般坐标系
    if (p.x > base.x) {
      if (p.y > base.y) {
        // 第二象限
        return 2;
      } else if (p.y < base.y) {
        // 第一象限
        return 1;
      } else {
        // x +
        return 5;
      }
    } else if (p.x < base.x) {
      if (p.y > base.y) {
        // 第三象限
        return 3;
      } else if (p.y < base.y) {
        // 第四象限
        return 4;
      } else {
        // x -
        return 6;
      }
    } else {
      if (p.y > base.y) {
        // y -
        return 8;
      } else if (p.y < base.y) {
        // y +
        return 7;
      } else {
        // O
        return 9;
      }
    }
  }

  private onMouseUp(e: egret.TouchEvent) {
    this.touching = false;
    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.onMouseMove,
      this
    );
  }

  public setTime(hour: number, minute: number) {
    this.hour.entity.rotation = -75 + (hour + minute / 60) * 30;
    this.hour.time = hour;
    this.minute.entity.rotation = minute * 60;
    this.minute.last = minute * 6;
    this.minute.time = minute;
  }

  public end() {
    this.minute.entity.removeEventListener(
      egret.TouchEvent.TOUCH_BEGIN,
      this.onMouseDown,
      this
    );

    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_MOVE,
      this.onMouseMove,
      this
    );

    this.stage.removeEventListener(
      egret.TouchEvent.TOUCH_END,
      this.onMouseUp,
      this
    );
  }
}

interface ClockProps {
  init?: { hour: number; minute: number };
  event?: {
    /**
     * hour 时间变化 指示当前小时 正数表示 8:00 -> 9:00 负数表示 9:00 -> 8:00
     */
    onHour?: (hour: number) => void;
    onChange?: (e: ClockEvent) => void;
    toStop?: (e: ClockEvent) => boolean;
  };
}

interface ClockEvent {
  now: {
    hour: number;
    minute: number;
  };
  last: {
    hour: number;
    minute: number;
  };
  changed: {
    hour: number;
    minute: number;
  };
}
