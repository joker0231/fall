class Progress extends egret.DisplayObjectContainer {
  public progress: number = 0;

  private progressEntity: eui.Image;

  private currentStage: number;
  private totalStage: number;

  private event: {
    progress: number;
    func: Function;
    hasTriggerd?: boolean;
  }[] = [];

  constructor(options?: ProgressOptions) {
    super();
    const progressBar1 = new eui.Image(
      "/resource/assets/component/Progress/progress bar.png"
    );
    const progressBar2 = new eui.Image(
      "/resource/assets/component/Progress/progress bar.4.png"
    );

    const op = {
      position: {
        x: Size.centerX(464),
        y: 1050,
      },
      stage: {
        total: 0,
        current: 0,
        progress: 0,
      },
      ...options,
    };

    this.width = 464;
    this.height = 51;

    this.x = op.position.x;
    this.y = op.position.y;
    this.totalStage = op.stage.total || 0;
    this.currentStage = op.stage.current || 0;
    this.progressEntity = progressBar2;

    this.event = options.event || [];

    if (op.stage.progress !== undefined) {
      this.progress = op.stage.progress;
      this.updateProgress(this.progress, true);
    } else if (this.currentStage !== 0) {
      this.updateProgress((this.currentStage / this.totalStage) * 100, true);
    } else {
      this.updateProgress(0, true);
    }

    // 内置进度条的遮罩层 不知道为啥就一个 rectangle 没用
    const square: egret.Shape = new egret.Shape();
    square.graphics.beginFill(0xff0000);
    square.graphics.drawRect(10, 8, 440, 32);
    square.graphics.endFill();
    progressBar2.mask = square;

    this.addChild(progressBar1);
    this.addChild(progressBar2);

    this.addChild(square);
  }

  public updateProgress(now: number, imme?: boolean) {
    this.progress = now;
    const events = this.EventAction(now);
    if (imme) {
      this.progressEntity.x = (now / 100 - 1) * this.width;
    } else {
      const tw = egret.Tween.get(this.progressEntity);
      tw.to(
        {
          x: (now / 100 - 1) * this.width,
        },
        500
      ).call(() => {
        events.map((e) => {
          e.hasTriggerd = true;
          e.func();
        });
      });
    }
  }

  public nextStage() {
    if (this.currentStage < this.totalStage) {
      this.currentStage++;
      // 触发事件
      this.updateProgress((100 * this.currentStage) / this.totalStage);
    }
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
    return todoEvent;
  }

  public resetStage() {
    this.currentStage = 0;
    this.updateProgress(0);
  }
}

interface ProgressOptions {
  position?: {
    x: number;
    y: number;
  };
  stage?: {
    total?: number;
    current?: number;
    progress?: number;
  };
  event?: {
    progress: number;
    func: Function;
  }[];
}
