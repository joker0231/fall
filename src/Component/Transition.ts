class Transition {
  static in(
    that: Chapter | Scene | Animate,
    item: egret.DisplayObjectContainer | egret.DisplayObject,
    options?: {
      index?: number;
      during?: number;
      before?: number;
      after?: number;
    }
  ) {
    item.alpha = 0;

    const tween = egret.Tween.get(item);

    if (options?.before) {
      tween.wait(options.before);
    }

    tween.to({ alpha: 1 }, options?.during || 500);

    if (options?.after) {
      tween.wait(options.after);
    }

    if (options?.index) {
      that.addChildAt(item, options.index);
    } else {
      that.addChild(item);
    }

    return {
      tw: tween,
      end: that.getTweenTime().time(item),
    };
  }

  static out(
    that: Chapter | Scene | Animate,
    item: egret.DisplayObjectContainer | egret.DisplayObject,
    options?: {
      during?: number;
      before?: number;
      after?: number;
    }
  ) {
    const tween = egret.Tween.get(item);

    if (options?.before) {
      tween.wait(options.before);
    }

    tween.to({ alpha: 0 }, options?.during || 500);

    if (options?.after) {
      tween.wait(options.after);
    }

    tween.call(() => {
      that.removeChild(item);
    });

    return {
      tw: tween,
      end: that.getTweenTime().time(item),
    };
  }

  static sceneHori(preScene: Scene, aftScene: Scene, time = 1000) {
    const tw1 = egret.Tween.get(preScene);
    const tw2 = egret.Tween.get(aftScene);

    aftScene.x = Size.width;

    aftScene.start();

    tw1.to({ x: -Size.width }, time);
    tw2
      .to({ x: 0 }, time)
      .wait(100)
      .call(() => {
        preScene.end();
      });

    return [tw1, tw2];
  }

  static sceneVeri(preScene: Scene, aftScene: Scene, time = 1000) {
    const tw1 = egret.Tween.get(preScene);
    const tw2 = egret.Tween.get(aftScene);

    aftScene.y = -Size.height;

    tw1.to({ y: Size.height }, time);
    tw2
      .to({ y: 0 }, time)
      .wait(100)
      .call(() => {
        aftScene.start();
        preScene.end();
      });

    return [tw1, tw2];
  }
}
