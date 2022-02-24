class Main extends eui.UILayer {

    private children: LayerInterface[] = [];
    private chapternow = 0;
    private bgm = new egret.Sound();
    private bgmchannel: egret.SoundChannel = null;
    private bgmstopat: number = 0;
    // 运行游戏
    private async runGame() {
        //加载资源
        await this.loadResource();
        this.loadChapters();
        this.showChapter();

        //登录
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private loadChapters() {
        [
<<<<<<< HEAD
            // new Begin(),
            // new Movie(),
            // new Age3(),
            // new Age6(),
            // new Age8(),
            // new Age12(),
            // new Age13(),
            //   new Age16(),
            new Age18(),
            // new Age19(),
            // new age20(),
            // new End()
=======
                new Begin(),
                new Movie(),
                new Age3(),
                new Age6(),
                new Age8(),
            new Age12(),
            new Age13(),
            new Age16(),
            new Age18(),
            new Age19(),
            new age20(),
            new End()
>>>>>>> 170ff9e7dff51cb741710c3984ecfff3f65cd02d
        ].forEach(layer => {
            this.children.push(layer);
        });
    }

    // 按章节显示
    private showChapter() {
        console.log("showing the " + this.chapternow + "th layer!");
        console.log(this.children[this.chapternow]);
        //清空
        egret.Tween.removeAllTweens();
        this.removeChildren();
        if (this.chapternow != 0 && this.chapternow != this.children.length - 1) {
            let pause = new Pause();
            this.addChild(pause);
            pause._show(this, this.pauseGame, this.resumeGame, this.mute, this.unmute, this.exit);
            if (this.bgmchannel == null) {
                this.bgmchannel = this.bgm.play(0, 0);
            }
        }
        this.addChildAt(this.children[this.chapternow], 0);
        this.children[this.chapternow].show(this.nextChapter, this);
    }

    private nextChapter() {

        console.log("End of The" + this, this.chapternow + " Chapter!");

        this.chapternow++;
        console.log("Now is opening the " + this.chapternow + "th layer, and the length of the layers is " + this.children.length);
        if (this.chapternow < this.children.length) {
            this.showChapter();
        } else {
            console.log("the end of the game!");
        }
    }
    //加载资源
    private async loadResource() {
        try {
            //显示loading界面
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            //加载config文件
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadConfig("resource/assets.res.json", "resource/");
            this.bgm.load("/resource/audio/BGM.mp3");
        } catch (e) {
            console.error(e);
        }
    }

    private pauseGame() {
        this.bgmstopat = this.bgmchannel.position;
        this.bgmchannel.stop();
        this.children[this.chapternow].pause();
    }

    private resumeGame() {
        this.bgmchannel = this.bgm.play(this.bgmstopat, 0);
        this.bgmchannel.volume = ISMUTE ? 0 : 1;
        this.children[this.chapternow].resume();
    }

    private mute() {
        this.bgmchannel.volume = 0;
        this.children[this.chapternow].mute();
        ISMUTE = true;
    }

    private unmute() {
        this.bgmchannel.volume = 1;
        this.children[this.chapternow].unmute();
        ISMUTE = false;
    }

    private exit() {
        this.removeChildren();
    }


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }
}


