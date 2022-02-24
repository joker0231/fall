class Age8 extends Chapter {
  constructor() {
    super("/resource/assets/age8/3.1.jpg");
  }

  public main() {
    this.background = "/resource/assets/age8/3.8.jpg";
    const sound = new Sound("clockRing.mp3", 0, false);

    // ----------------------------------------------------------

    const scene = new Scene(this, {
      main() {
        const clock = Size.preferedSizeImage("/resource/assets/age8/3.2.png");

        this.addSound(sound);

        Size.preferedCenter(clock);
        const tw = egret.Tween.get(clock, {
          loop: true,
        });

        tw.to({ rotation: 3 }, 40)
          .to({ rotation: -3 }, 40)
          .to({ rotation: 3 }, 40);

        // 将动画添加到控制列表
        this.tweenTime.time(clock);

        clock.once(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            tw.pause();
            sound.stop();

            const tw2 = egret.Tween.get(clock);

            tw2
              .to({ rotation: 0 }, 100)
              .wait(1000)
              .call(() => {
                this.nextScene("hori");
              });
          },
          this
        );

        this.addChild(clock);

        this.starter = () => {
          sound.play();
        };
      },
    });

    const scene1 = new Scene(this, {
      main() {
        // 完整 无人物
        const bgi = Size.preferedSizeImage("/resource/assets/age8/3.3.jpg");

        // 三个梳子
        const comb1 = Size.preferedSizeImage(
          "/resource/assets/age8/comb.1.png"
        );

        const comb2 = Size.preferedSizeImage(
          "/resource/assets/age8/comb.2.png"
        );

        const comb3 = Size.preferedSizeImage(
          "/resource/assets/age8/comb.3.png"
        );

        comb3.x = 65;

        // 有人物 人物
        const staticPart1 = Size.preferedSizeImage(
          "/resource/assets/age8/3.5.jpg"
        );

        // 有人物 杯子
        const staticPart2 = Size.preferedSizeImage(
          "/resource/assets/age8/box.png"
        );

        const tidyGirl = Size.preferedSizeImage(
          "/resource/assets/age8/3.6.jpg"
        );

        const tidyGirl2 = Size.preferedSizeImage(
          "/resource/assets/age8/3.7.jpg"
        );

        // 移动容器
        const movable = new Movable();

        // 进度条
        const ProgressBar = new Progress({
          stage: {
            total: 6,
          },
          event: [
            {
              progress: 100,
              func: () => {
                this.addChild(tidyGirl);
                // 移除被遮住的部分;
                this.removeChild(movable);
                this.removeChild(ProgressBar);

                const { tw, end } = Transition.in(this, tidyGirl2, {
                  before: 1000,
                });

                tw.wait(2000).call(() => {
                  this.removeChild(tidyGirl);
                  this.removeChild(tidyGirl2);
                  end();
                  this.timeTick.registerEvent(2000, () => {
                    this.nextScene();
                  });
                });
              },
            },
          ],
        });

        let add = false;

        const trigger = new TriggerArea({
          area: new egret.Rectangle(104, 529, 342, 320),
          event: (e, option) => {
            if (option.time > 30) {
              trigger.resetTime();
              ProgressBar.nextStage();
            }
          },
        });

        const trigger2 = new TriggerArea({
          area: new egret.Rectangle(485, 911, 200, 220),
          event: (e, option, extra) => {
            const { entity, name } = extra;
            const tw = egret.Tween.get(entity);

            const end = this.tweenTime.time(entity);
            if (name === "comb0" || name === "comb1") {
              tw.to(
                {
                  x: 0,
                  y: 0,
                },
                50
              ).call(() => {
                end();
              });
            } else if (name === "comb2") {
              tw.to(
                {
                  x: 65,
                  y: 0,
                },
                50
              ).call(() => {
                end();
              });
            }
          },
        });

        movable.addStaticChild({
          name: "bgi-mirror",
          entity: staticPart1,
        });

        [comb1, comb2, comb3].map((comb, index) => {
          movable.addMovableChild({
            name: "comb" + index,
            entity: comb,
            event: {
              move: (e) => {
                trigger.trigger(e);
              },
              up: (e, extra) => {
                trigger2.trigger(e, extra);
              },
            },
          });
          comb.addEventListener(
            egret.TouchEvent.TOUCH_BEGIN,
            () => {
              if (!add) {
                this.addChild(ProgressBar);
                add = true;
              }
            },
            this
          );
        });

        movable.addStaticChild(
          {
            name: "cup-box",
            entity: staticPart2,
          },
          {
            through: true,
          }
        );

        // index 1
        this.addChild(movable);
        this.addChild(bgi);

        // start
        this.starter = () => {
          const { tw, end } = Transition.out(this, bgi, {
            before: 1500,
          });
          tw.call(() => {
            end();
          });
        };
      },
    });

    const scene2 = new Scene(this, {
      main() {
        const GirlAlone = Size.preferedSizeImage(
          "/resource/assets/age8/3.9.jpg"
        );

        const Girls = Size.preferedSizeImage("/resource/assets/age8/3.11.jpg");

        const boy = Size.preferedSizeImage("/resource/assets/age8/boy.png");

        const coloredGirl = Size.preferedSizeImage(
          "/resource/assets/age8/3.15.jpg"
        );
        const coloredGirl2 = Size.preferedSizeImage(
          "/resource/assets/age8/3.16.jpg"
        );

        const friendText = Size.preferedSizeImage(
          "/resource/assets/age8/3.17.jpg"
        );

        boy.x = -250;

        const lineBind = new LineBind({
          binder: boy,
          limit: {
            left: -250,
            right: 0,
            offset: 0,
          },
          event: [
            {
              progress: 98,
              func: () => {
                this.addChild(coloredGirl);

                const { tw, end } = Transition.in(this, coloredGirl2, {
                  before: 1000,
                });

                tw.wait(1000).call(() => {
                  this.removeChild(Girls);
                  this.removeChild(lineBind);
                  this.removeChild(coloredGirl);
                  end();
                });
              },
            },
          ],
        });

        coloredGirl2.once(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.addChild(friendText);

            const { tw, end } = Transition.out(this, coloredGirl2);
            tw.wait(1000).call(() => {
              this.nextScene("hori");
              end();
            });
          },
          this
        );

        this.addChild(GirlAlone);

        const end1 = this.tweenTime.time(Girls);
        const end2 = this.tweenTime.time(boy);
        const end3 = this.tweenTime.time(lineBind);
        this.starter = () => {
          const { tw, end } = Transition.in(this, Girls, {
            before: 1500,
          });
          tw.wait(1000).call(() => {
            this.removeChild(GirlAlone);
            const { tw: tw2, end: end2 } = Transition.in(this, boy);
            tw2.call(() => {
              end2();
            });
            const { tw: tw3, end: end3 } = Transition.in(this, lineBind);
            tw3.call(() => {
              end3();
            });

            end();
          });
        };
      },
    });

    const scene3 = new Scene(this, {
      main() {
        const animate = new Animate({
          prefix: "/resource/assets/age8/",
          preLoad: true,
          frames: [
            "3.18.jpg",
            "3.19.jpg",
            "3.20.jpg",
            {
              sourse: "3.21.jpg",
              trigger: "tap",
            },
          ],

          event: {
            over: () => {
              this.nextScene();
            },
          },
        });

        this.starter = () => {
          this.addChild(animate);
          this.timeTick.registerEvent(1000, () => {
            animate.start();
          });
        };
      },
    });

    // 实际由 chapter 自动管理

    this.addScene(scene);
    this.addScene(scene1);
    this.addScene(scene2);
    this.addScene(scene3);
  }
}
