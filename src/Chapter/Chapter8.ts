class Chapter8 extends Chapter {
  constructor() {
    super("/resource/assets/age19/8.1.jpg");
  }

  main() {
    const scene = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age19/black.jpg");
        const animate = new Animate({
          prefix: "/resource/assets/age19/",
          frames: [
            "8.2.jpg",
            {
              sourse: "8.3.jpg",
              trigger: "tap",
            },
            {
              sourse: "8.4.jpg",
              trigger: "tap",
            },
            {
              sourse: "8.5.jpg",
              trigger: "tap",
            },
            {
              sourse: "8.6.jpg",
              trigger: "tap",
            },
            "8.7.jpg",
          ],
          event: {
            over: {
              before: 1500,
              func: () => {
                this.nextScene("hori");
                animate.end(this);
              },
            },
          },
          common: {
            during: 2500,
            out: 1000,
          },
        });

        this.addChild(bgi);
        this.addChild(animate);

        this.addFrameChild(animate);

        this.starter = () => {
          animate.start();
        };
      },
    });

    const scene2 = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age19/black.jpg");
        const tree = new eui.Image("/resource/assets/age19/8.13.png");
        const movable = new Movable();
        const animate = new Animate({
          prefix: "/resource/assets/age19/",
          frames: ["8.8.jpg", "8.9.jpg", "8.10.jpg", "8.11.jpg", "8.12.jpg"],
          event: {
            over: {
              before: 1500,
              func: () => {
                movable.setMoveAbility("move", true);
              },
            },
          },
          common: {
            during: 1000,
            out: 500,
          },
        });

        const animate2 = new Animate({
          prefix: "/resource/assets/age19/",
          frames: [
            "8.14.png",
            "8.15.png",
            "8.16.png",
            "8.17.png",
            "8.18.png",
            "8.19.png",
            "8.20.png",
          ],
          common: {
            during: 200,
            out: 200,
          },
          loop: true,
        });

        animate2.y = 1806 - 1280;

        movable.addMovableChild({
          name: "move",
          entity: tree,
          special: {
            direction: "veri",
            limit: {
              veri: [1280 - 1806, 0],
            },
            pixelHitTest: false,
          },
          event: {
            move: (e, p) => {
              animate.y = p.y;
              animate2.y = p.y - 1280 + 1806;
            },
            limit: (e, p) => {
              if (p.border === 0) {
                animate.end(this);
                this.setChildIndex(animate2, 5);
                animate2.play();
                movable.setMoveAbility("move", false);
              }
            },
          },
        });

        movable.setMoveAbility("move", false);

        animate2.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.nextScene();
          },
          this
        );

        this.addChild(bgi);
        this.addChild(animate);
        this.addChild(animate2);
        this.addChild(movable);

        this.addFrameChild(animate);
        this.addFrameChild(animate2);

        this.starter = () => {
          this.timeTick.registerEvent(1000, () => {
            animate.start();
            animate2.start();
            animate2.pause();
          });
        };
      },
    });

    const scene3 = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age19/8.21.jpg");

        const prefix = "/resource/assets/age19/";
        let sleep = false;
        let page = 0;
        const lines = [
          "8.22.png",
          "8.23.png",
          "",
          "8.24.png",
          // girl
          "8.25.png",
          "8.26.png",
          "",
          "8.27.png",
          //
          "8.28.png",
          "8.29.png",
          "8.30.png",
        ];

        const listen = () => {
          if (!sleep && page < lines.length) {
            sleep = true;
            if (lines[page] !== "") {
              const entity = Size.preferedSizeImage(prefix + lines[page]);

              entity.addEventListener(egret.TouchEvent.TOUCH_TAP, listen, this);
              const { tw, end } = Transition.in(this, entity, {
                during: 500,
              });
              tw.call(() => {
                end();
              });
            } else {
              return;
            }

            // 下一张是男生的
            if (page < lines.length - 1 && lines[page + 1] === "") {
              const entity = Size.preferedSizeImage(prefix + lines[page + 2]);

              entity.addEventListener(egret.TouchEvent.TOUCH_TAP, listen, this);

              const { tw, end } = Transition.in(this, entity, {
                before: 1500,
                during: 500,
              });
              tw.call(() => {
                end();
              });

              page += 3;

              this.timeTick.registerEvent(2500, () => {
                sleep = false;
              });
            } else {
              page++;

              this.timeTick.registerEvent(800, () => {
                sleep = false;
              });
            }
          }
        };

        this.addChild(bgi);

        bgi.once(egret.TouchEvent.TOUCH_TAP, listen, this);
        this.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            if (page === lines.length && !sleep) {
              this.nextScene();
            }
          },
          this
        );
      },
    });

    const scene4 = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age19/8.31.jpg");

        const rain = new Animate({
          prefix: "/resource/assets/age19/",
          frames: ["rain.1.png", "rain.2.png"],
          common: {
            during: 10,
            out: 0,
          },
          loop: true,
        });

        const animate = new Animate({
          prefix: "/resource/assets/age19/",
          frames: [
            "black.jpg",
            "8.36.jpg",
            "black.jpg",
            "8.37.jpg",
            "black.jpg",
          ],
          event: {
            over: {
              before: 0,
              func: () => {
                rain.end(this);
                animate.end(this);
                water.end(this);
                this.nextScene();
              },
            },
          },
          common: {
            in: 500,
            out: 1000,
          },
        });

        const water = new Animate({
          prefix: "/resource/assets/age19/",
          frames: ["8.33.png", "8.34.png", "8.35.png"],
          event: {
            over: {
              before: 800,
              func: () => {
                const endBike = this.tweenTime.time(bike);

                const { tw, end } = Transition.out(this, water);
                tw.call(() => {
                  end();
                });
                // 自行车
                egret.Tween.get(bike)
                  .wait(500)
                  .to({ x: (-Size.width * 2) / 3 }, 2000)
                  .call(() => {
                    endBike();
                    // 变黑动画
                    this.addChild(animate);
                    animate.start();
                  });
              },
            },
          },
          common: {
            during: 10,
            out: 0,
          },
        });

        const bike = Size.preferedSizeImage("/resource/assets/age19/8.32.png");

        this.addChild(bgi);
        this.addChild(rain);
        this.addChild(water);
        this.addChild(bike);

        this.addFrameChild(animate);

        rain.start();
        this.starter = () => {
          water.start();
        };
      },
    });

    const scene5 = new Scene(this, {
      main() {
        const black = Size.preferedSizeImage(
          "/resource/assets/age19/black.jpg"
        );

        const drug = Size.preferedSizeImage("/resource/assets/age19/8.38.jpg");

        const drug2 = Size.preferedSizeImage("/resource/assets/age19/8.39.jpg");

        const text = Size.preferedSizeImage("/resource/assets/age19/8.40.png");

        const LongComputer = new eui.Image("/resource/assets/age19/8.58.jpg");

        const sound = new Sound("/resource/assets/age19/8.58.jpg", 1, false);

        this.addSound(sound);

        const animatePc = new Animate({
          prefix: "/resource/assets/age19/",
          frames: ["8.41.jpg", "8.42.jpg"],
          loop: true,
          common: {
            in: 1000,
            out: 1000,
          },
        });

        const cupAnimate = new Animate({
          prefix: "/resource/assets/age19/",
          frames: [
            "8.46.jpg",
            "8.47.jpg",
            "8.48.jpg",
            "8.49.jpg",
            "8.50.jpg",
            "8.51.jpg",
            "8.52.jpg",
            "8.53.jpg",
            "8.54.jpg",
          ],
          common: {
            in: 500,
            during: 200,
            out: 1000,
          },
          event: {
            over: {
              before: 500,
              func: () => {
                this.addChild(animateError);
                this.timeTick.registerEvent(500, () => {
                  animateError.start();
                });
                cupAnimate.end(this);
              },
            },
          },
        });

        const movable = new Movable();

        const animateError = new Animate({
          prefix: "/resource/assets/age19/",
          frames: ["8.55.jpg", "8.56.jpg", "8.57.jpg", movable],
          common: {
            in: 500,
            during: 500,
            out: 1000,
          },
        });

        movable.addMovableChild({
          name: "pc",
          entity: LongComputer,
          special: {
            direction: "veri",
            limit: {
              veri: [1280 - 2231, 0],
            },
          },
          event: {
            limit: () => {
              this.nextScene();
              movable.end();
            },
          },
        });

        animatePc.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            if (animatePc.getRunCircleTime() >= 2) {
              animatePc.end(this);
              egret.ExternalInterface.call("zd", "5");
              this.timeTick.registerEvent(2000, () => {
                console.log("震动结束");
                this.addChild(cupAnimate);
                cupAnimate.start();
                sound.play();
              });
            }
          },
          this
        );

        const trigger = new TriggerArea({
          area: new egret.Rectangle(71, 335, 70, 110),
          event: () => {
            this.addChild(drug2);

            const { tw, end } = Transition.in(this, text, {
              before: 1000,
            });
            tw.wait(1500).call(() => {
              end();

              this.removeChild(drug2);
              this.removeChild(text);

              // 文字出现之后的动画
              this.addChild(animatePc);
              animatePc.start();
            });
            this.removeChild(drug);
          },
        });

        drug.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          (e) => {
            trigger.trigger(e);
          },
          this
        );

        this.addFrameChild(animatePc);
        this.addFrameChild(cupAnimate);
        this.addFrameChild(animateError);

        this.addChild(black);
        this.addChild(drug);
      },
    });

    const scene6 = new Scene(this, {
      main() {
        const bgi = Size.preferedSizeImage("/resource/assets/age19/8.59.jpg");
        const prefix = "/resource/assets/age19/";
        const black = Size.preferedSizeImage(prefix + "black.jpg");
        const li = Size.preferedSizeImage(prefix + "8.77.png");
        const last = Size.preferedSizeImage(prefix + "8.78.png");

        li.once(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.addChild(last);
          },
          this
        );

        last.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.nextScene();
          },
          this
        );

        let sleep = false;
        let page = 0;
        const lines = [
          "8.60.png",
          "8.61.png",
          "8.62.png",
          "8.63.png",
          "",
          "8.64.png",
          // girl
          "8.65.png",
          "8.66.png",
        ];

        const listen = () => {
          if (!sleep && page < lines.length) {
            sleep = true;
            if (lines[page] !== "") {
              const entity = Size.preferedSizeImage(prefix + lines[page]);

              entity.addEventListener(egret.TouchEvent.TOUCH_TAP, listen, this);

              const { tw, end } = Transition.in(this, entity, {
                during: 500,
              });
              tw.call(() => {
                end();
              });
            } else {
              return;
            }

            // 下一张是男生的
            if (page < lines.length - 1 && lines[page + 1] === "") {
              const entity = Size.preferedSizeImage(prefix + lines[page + 2]);

              entity.addEventListener(egret.TouchEvent.TOUCH_TAP, listen, this);

              const { tw, end } = Transition.in(this, black, {
                before: 1500,
                during: 500,
              });
              tw.call(() => {
                this.addChildAt(entity, 3);
                end();
                const { tw: tw2, end: end2 } = Transition.out(this, black, {
                  before: 1500,
                });
                tw2.call(() => {
                  end2();
                });
              });

              page += 3;

              this.timeTick.registerEvent(3500, () => {
                sleep = false;
              });
            } else {
              page++;

              this.timeTick.registerEvent(800, () => {
                sleep = false;
              });
            }
          }
        };

        const animate = new Animate({
          prefix: "/resource/assets/age19/",
          frames: [
            "8.67.1.jpg",
            "8.67.jpg",
            "8.68.jpg",
            "8.69.jpg",
            "8.70.jpg",
            "8.71.jpg",
            "8.72.jpg",
            "8.73.jpg",
            "8.74.jpg",
            "8.75.jpg",
            "8.76.jpg",
            "black.jpg",
          ],
          event: {
            over: {
              before: 0,
              func: () => {
                this.addChild(li);
                this.removeChild(black);
                animate.end(this);
              },
            },
          },
          common: {
            in: 500,
            during: 500,
            out: 5000,
          },
        });

        this.addChild(bgi);

        bgi.once(egret.TouchEvent.TOUCH_TAP, listen, this);
        this.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            if (page === lines.length && !sleep) {
              this.addChild(black);
              this.addChild(animate);
              animate.start();
              sleep = true;
            }
          },
          this
        );

        this.addFrameChild(animate);
      },
    });

    const scene7 = new Scene(this, {
      main() {
        const eat = Size.preferedSizeImage("/resource/assets/age19/8.79.jpg");
        const food = new eui.Image("/resource/assets/age19/8.80.jpg");
        const text = new eui.Image("/resource/assets/age19/8.81.jpg");
        const hand = new eui.Image("/resource/assets/age19/8.82.png");
        hand.pixelHitTest = true;
        const hand2 = new eui.Image("/resource/assets/age19/8.83.png");
        const hand3 = new eui.Image("/resource/assets/age19/8.84.png");
        const trigger = new TriggerArea({
          area: new egret.Rectangle(128, 789, 400, 220),
          event: (e) => {
            this.addChild(movavle);
            this.removeChild(eat);
          },
        });
        const trigger2 = new TriggerArea({
          area: new egret.Rectangle(11, 475, 400, 800),
          event: (e) => {
            this.addChild(hand3);
          },
        });

        const movavle = new Movable();
        movavle.addMovableChild({
          name: "food",
          entity: food,
          special: {
            direction: "veri",
            limit: {
              veri: [1280 - 1806, 0],
            },
          },
          event: {
            limit: () => {
              hand.x = 100;

              const { tw, end } = Transition.in(this, text);
              tw.call(() => {
                end();
                const { tw: tw2, end: end2 } = Transition.in(this, hand, {
                  before: 1000,
                  index: 10,
                });
                tw2.to({ x: 0 }, 1000).call(() => {
                  this.addChildAt(hand2, 1);
                  end2();
                });
              });
              movavle.end();
              this.removeChild(movavle);
            },
          },
        });

        eat.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          (e) => {
            trigger.trigger(e);
          },
          this
        );

        hand2.addEventListener(
          egret.TouchEvent.TOUCH_TAP,
          (e) => {
            trigger2.trigger(e);
          },
          this
        );

        hand3.once(
          egret.TouchEvent.TOUCH_TAP,
          () => {
            this.nextScene();
          },
          this
        );

        this.starter = () => {
          this.addChild(eat);
        };
      },
    });

    this.addScene(scene);
    this.addScene(scene2);
    this.addScene(scene3);
    this.addScene(scene4);
    this.addScene(scene5);
    this.addScene(scene6);
    this.addScene(scene7);
  }
}
