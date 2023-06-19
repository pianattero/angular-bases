import { Component } from "@angular/core";

@Component({ // es lo que transforma mi clase en un componente
  selector: 'app-counter', // nombre que le quiero dar
  template: `
  <h3>Counter: {{ counter }} </h3>

  <button (click)="increaseBy(-1)" >-1</button>
  <button (click)="resetCounter(10)" >Reset</button>
  <button (click)="increaseBy(1)" >+1</button>
  `, // uso basticks
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value
  };

  resetCounter( value: number ):void {
    this.counter = value
  };
};
