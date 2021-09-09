// 触发区域
class TriggerArea {
  private triggered_area: egret.Rectangle;
  private triggered_time: number = 0;
  private triggered_event;
  private point: egret.Point;
  /**
   * 触发的范围
   * 触发的条件
   * 触发后执行的事件
   */
  constructor(props: TriggerAreaProps) {
    this.triggered_area = props.area;
    this.triggered_event = props.event;
    this.point = new egret.Point();
  }

  public trigger(event: egret.TouchEvent, extra?: Record<string, any>) {
    if (this.triggered_area.contains(event.stageX, event.stageY)) {
      this.triggered_event(
        event,
        {
          time: this.triggered_time,
        },
        extra
      );
      this.triggered_time++;
      this.point.x = event.stageX;
      this.point.y = event.stageY;
    }
  }
  public resetTime() {
    this.triggered_time = 0;
  }
}

interface TriggerAreaProps {
  area: egret.Rectangle;
  event: (
    e?: egret.TouchEvent,
    options?: {
      time: number;
    },
    extra?: Record<string, any>
  ) => any;
}
