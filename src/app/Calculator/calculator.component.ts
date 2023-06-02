import { Component } from '@angular/core';
@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calcualtor.component.css'],
})
export default class CalculatorComponent {
  private number1: number = 0;
  private number2: number = 0;
  private result: number = 0;
  setNumber1(number1: number): void {
    this.number1 = number1;
  }

  getNumber1(): number {
    return this.number1;
  }

  setNumber2(number2: number): void {
    this.number2 = number2;
  }

  getNumber2(): number {
    return this.number2;
  }

  setResult(result: number): void {
    this.result = result;
  }

  getResult(): number {
    return this.result;
  }

  Add(): void {
    this.setResult(this.getNumber1() + this.getNumber2());
  }
}
