// 改变大小的函数
class Size {
  // static width = 640;
  // static height = 1138;

  static width = 720;
  static height = 1280;

  static centerX(width: number) {
    return (this.width - width) / 2;
  }

  static preferedSize(entity: egret.DisplayObject) {
    entity.width = this.width;
    entity.height = this.height;
  }

  static preferedCenter(entity: egret.DisplayObject) {
    entity.anchorOffsetX = this.width / 2;
    entity.anchorOffsetY = this.height / 2;
    entity.x = this.width / 2;
    entity.y = this.height / 2;
  }

  static setCenter(
    entity: egret.DisplayObject,
    position: {
      x: number;
      y: number;
    }
  ) {
    entity.x = position.x;
    entity.y = position.y;
    entity.anchorOffsetX = position.x;
    entity.anchorOffsetY = position.y;
  }

  static preferedSizeImage(sourse: string) {
    const image = new eui.Image(sourse);
    this.preferedSize(image);
    return image;
  }

  // 提供图片真正的像素， 按比例计算出真实高
  static widthDecideHeight(entity: egret.DisplayObject, realWidth) {
    entity.width = this.width;
    entity.height = (this.width / realWidth) * this.height;
  }
}
