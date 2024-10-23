import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <h3>couter: {{counter}}</h3>
<button (click)="increasBy(+1)">+1</button>
<button (click)="resetby()">reset</button>
<button (click)="increasBy(-1)">-1</button>


  `
})

export class CounterComponent{
    public counter: number = 10;

    increasBy(value: number):void {
      this.counter += value;
    }
    resetby() {
      this.counter = 10;
    }
}
