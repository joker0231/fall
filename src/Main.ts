//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

  private children: LayerInterface[] = [];
  private chapternow = 0;


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
  // 运行游戏
  private async runGame() {
    //加载资源
    await this.loadResource();
    this.loadChapters();
    this.showChapter();

    //开始动画
    // const result = await RES.getResAsync("description_json")
    // this.startAnimation(result);

    //登录
    await platform.login();
    const userInfo = await platform.getUserInfo();
    console.log(userInfo);

  }

  private loadChapters() {
    [
      // new Begin(),
      // new Movie(),
      // new Age3(),
      // new Age6(),
      // new Age8(),
      // new Age12(),
      // new Chapter5(),
      // new Age16(),
      new Chapter7(),
      new Age19(),
      new age20(),
      new End()
    ].forEach(layer => {
      this.children.push(layer);
    });
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


  protected createGameScene(): void {
    const age8 = new Age8();
    this.addChild(age8);
  }

  // 按章节显示
  private showChapter() {
    console.log("showing the " + this.chapternow + "th layer!");
    console.log(this.children[this.chapternow]);
    //清空
    egret.Tween.removeAllTweens();
    this.removeChildren();
    let pause = new Pause();
    this.addChild(pause);
    pause._show(
      this,
      this.pauseGame,
      this.resumeGame,
      this.mute,
      this.unmute,
      this.exit
    );
    this.addChildAt(this.children[this.chapternow], 0);
    this.children[this.chapternow].show(this.nextChapter, this);
  }

  //加载资源
  private async loadResource() {
    try {
      //显示loading界面
      const loadingView = new LoadingUI();
      this.stage.addChild(loadingView);
      //加载数据
      //加载config文件
      await RES.loadConfig("resource/default.res.json", "resource/");
      await RES.loadConfig("resource/assets.res.json", "resource/");
      //等待加载完成，在LoadingView中进行显示
      await RES.loadGroup("暂停", 0, loadingView);
      await RES.loadGroup("全局", 0, loadingView);

      await RES.loadGroup("preload", 0, loadingView);
      await RES.loadGroup("6岁", 0, loadingView);
      await RES.loadGroup("12岁", 0, loadingView);
      await RES.loadGroup("20岁", 0, loadingView);
      await RES.loadGroup("开始", 0, loadingView);
      await RES.loadGroup("结束", 0, loadingView);

      //加载完成则去除loadingView，准备进入
      this.stage.removeChild(loadingView);
    } catch (e) {
      console.error(e);
    }
  }

  private pauseGame() {
    console.log(
      "function pauseGame called at " +
      this +
      "the children are " +
      this.children
    );
    this.children[this.chapternow].pause();
  }

  private resumeGame() {
    this.children[this.chapternow].resume();
  }

  private mute() {
    this.children[this.chapternow].mute();
    ISMUTE = true;
  }

  private unmute() {
    this.children[this.chapternow].unmute();
    ISMUTE = false;
  }

  private exit() {
    this.removeChildren();
  }
}


