class TimeTick {
  public state = 0;
  private pass: number = 0;
  private last: number = 0;

  private eventList: {
    time: number;
    callback: Function;
    argus?: any[];
  }[] = [];

  public start() {
    this.state = 1;
  }

  public stop() {
    this.state = 2;
  }

  private runEvents() {
    const events = this.eventList.filter((e) => e.time <= this.pass);
    this.eventList = this.eventList.filter((e) => e.time > this.pass);

    events.map((e) => {
      if (e.argus) {
        e.callback(...e.argus);
      } else {
        e.callback();
      }
    });
  }

  public update(timeStemp: number) {
    if (this.state === 0) {
      this.pass = this.pass + timeStemp - this.last;
      this.last = timeStemp;
    } else if (this.state === 1) {
      this.last = timeStemp;
      this.state = 0;
    }
    this.runEvents();
    return false;
  }

  public getPass() {
    return this.pass;
  }

  public registerEvent(time: number, callback: Function, argus?: any[]) {
    
    this.eventList.push({
      time: time + this.pass,
      callback,
      argus,
    });

    this.eventList.sort((x, y) => x.time - y.time);
  }
}
