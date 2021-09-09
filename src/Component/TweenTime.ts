class TweenTime {
  private tweenList: TweenListItem[] = [];

  private code = 0;

  private getCode() {
    const code = this.code;
    this.code = this.code + 1;
    return code;
  }

  private removeTween(code: number) {
    this.tweenList = this.tweenList.filter((tw) => tw.code !== code);
  }

  public time(target: egret.DisplayObject | egret.DisplayObject[]) {
    const code = this.getCode();

    this.tweenList.push({
      target,
      code,
    });

    return () => {
      egret.Tween.removeTweens(target);
      this.removeTween(code);
    };
  }

  public pause() {
    this.tweenList.map((tw: TweenListItem) => {
      if (tw.target instanceof egret.DisplayObject) {
        egret.Tween.pauseTweens(tw.target);
      } else {
        tw.target.map((t) => {
          egret.Tween.pauseTweens(t);
        });
      }
    });
  }

  public play() {
    this.tweenList.map((tw: TweenListItem) => {
      if (tw.target instanceof egret.DisplayObject) {
        egret.Tween.resumeTweens(tw.target);
      } else {
        tw.target.map((t) => {
          egret.Tween.resumeTweens(t);
        });
      }
    });
  }
}

interface TweenListItem {
  code: number;
  target: egret.DisplayObject | egret.DisplayObject[];
}
