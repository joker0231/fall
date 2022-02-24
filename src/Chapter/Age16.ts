class Age16 extends Chapter {
  constructor() {
    super("/resource/assets/age16/6.1.jpg");
  }

  public main() {
    const sound: Sound = new Sound("/resource/assets/age16/ring.mp3", 1, false);

    const scene = new Scene(this, {
      main() {
        // blank
        const blank = Size.preferedSizeImage("/resource/assets/age8/3.8.jpg");
        const girls = Size.preferedSizeImage("/resource/assets/age16/6.2.jpg");
        const girls2 = Size.preferedSizeImage("/resource/assets/age16/6.3.jpg");
        const girls3 = Size.preferedSizeImage("/resource/assets/age16/6.4.jpg");
        girls2.alpha = 0;
        girls3.alpha = 0;

        let end = false;

        const clock = new Clock({
          init: {
            hour: 4,
            minute: 0,
          },
          event: {
            toStop: (e: ClockEvent) => {
              if (e.now.hour < 3 || e.now.hour > 6) {
                return false;
              }
              return true;
            },
            onChange: (e: ClockEvent) => {
              switch (e.now.hour) {
                case 4: {
                  if (e.now.minute > 8 && e.now.minute < 53) {
                    girls.alpha = 1 - (e.now.minute - 8) / 45;
                    girls2.alpha = (e.now.minute - 8) / 45;
                  }
                  break;
                }
                case 5: {
                  if (e.now.minute > 8 && e.now.minute < 53) {
                    girls2.alpha = 1 - (e.now.minute - 8) / 45;
                    girls3.alpha = (e.now.minute - 8) / 45;
                  }
                  break;
                }
                case 6: {
                  if (girls3.alpha > 0.9 && !end) {
                    clock.end();
                    end = true;
                    this.nextScene();
                  }
                }
              }
            },
          },
        });

        this.addChild(blank);
        this.addChild(girls);
        this.addChild(girls2);
        this.addChild(girls3);
        this.addChild(clock);
      },
    });

    const scene2 = new Scene(this, {
      main() {
        const mirror = Size.preferedSizeImage("/resource/assets/age16/6.5.jpg");
        const mirrorMask = Size.preferedSizeImage(
          "/resource/assets/age16/6.6.png"
        );
        const girl = new eui.Image("/resource/assets/age16/6.7.png");
        girl.x = 50;
        girl.y = 430;
        const drawArea = new DrawArea({
          event: {
            move: (e) => {
              trigger.trigger(e);
            },
          },
        });
        const trigger = new TriggerArea({
          area: new egret.Rectangle(60, 430, 384, 558),
          event: (e, op) => {
            if (op.time > 250) {
              drawArea.end();
              girl.mask = null;
              this.timeTick.registerEvent(2000, () => {
                this.nextScene();
              });
            }
          },
        });
        girl.mask = drawArea;
        this.addChild(mirror);
        this.addChild(mirrorMask);
        this.addChild(girl);
        this.addChild(drawArea);
      },
    });

    const scene3 = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age16/6.8.jpg");
        const girl = Size.preferedSizeImage("/resource/assets/age16/6.9.png");
        const girl2 = Size.preferedSizeImage("/resource/assets/age16/6.10.jpg");
        const tear = Size.preferedSizeImage("/resource/assets/age16/tear.png");
        const alone = Size.preferedSizeImage("/resource/assets/age16/6.12.jpg");
        const mask = Size.preferedSizeImage("/resource/assets/age16/6.13.jpg");

        girl.x = 500;

        const click = () => {
          if (girl.x === 0) {
            girl.removeEventListener(egret.TouchEvent.TOUCH_TAP, click, this);

            const { tw, end } = Transition.in(this, girl2);

            tw.call(() => {
              end();
            });

            const { tw: tw2, end: end2 } = Transition.in(this, tear);

            tw2.call(() => {
              egret.Tween.get(tear)
                .to(
                  {
                    y: 700,
                  },
                  3000
                )
                .call(() => {
                  end2();
                  const { tw: tw3, end: end3 } = Transition.in(this, alone);
                  tw3
                    .call(() => {
                      this.removeChild(girl2);
                      this.removeChild(tear);
                    })
                    .wait(500)
                    .to(
                      {
                        scaleX: 1.4,
                        scaleY: 1.4,
                        y: -Size.height * 0.4,
                      },
                      500
                    )
                    .wait(1000)
                    .call(() => {
                      this.addChild(bgi);
                      this.addChild(mask);
                      const { tw: tw4, end: end4 } = Transition.out(
                        this,
                        mask,
                        {
                          before: 1000,
                          during: 1500,
                        }
                      );
                      tw4.wait(1000).call(() => {
                        this.nextScene();
                        end3();
                        end4();
                      });
                    });
                });
            });
          }
        };

        girl.addEventListener(egret.TouchEvent.TOUCH_TAP, click, this);

        this.addChild(bgi);
        this.addChild(girl);

        this.starter = () => {
          const end = this.tweenTime.time(girl);

          const tw = egret.Tween.get(girl);

          tw.to(
            {
              x: 0,
            },
            1500
          ).call(() => {
            end();
          });
        };
      },
    });

    const scene4 = new Scene(this, {
      main() {
        const girl = Size.preferedSizeImage("/resource/assets/age16/6.16.jpg");
        const button = new eui.Image("/resource/assets/age16/6.17.png");
        const add1 = new eui.Image("/resource/assets/age16/6.19.jpg");

        button.x = 150;
        button.y = -200;
        button.pixelHitTest = true;

        add1.once(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.nextScene();
          },
          this
        );

        const chartBox = new ChartBox(() => {
          this.addChild(add1);
          this.removeChild(chartBox);
        }, this);

        button.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.addChild(chartBox);
            this.removeChild(girl);
            this.removeChild(button);
            this.timeTick.registerEvent(1000, () => {
              chartBox.start();
            });
          },
          this
        );

        this.addChild(girl);
        this.addChild(button);

        this.starter = () => {
          this.timeTick.registerEvent(600, () => {
            sound.play();
            const end = this.tweenTime.time(button);
            const tw = egret.Tween.get(button);
            tw.to({ y: 0 }, 100).call(() => {
              end();
            });
          });
        };
      },
    });

    this.addScene(scene);
    this.addScene(scene2);
    this.addScene(scene3);
    this.addScene(scene4);
  }
}
