import { Component } from '@angular/core';
@Component({
  selector: 'calculator',
  templateUrl: './calculator.componenet.html',
  styleUrls: ['./calcualtor.component.css'],
})
export class CalculatorComponent {
  private number1: number = 0;
  private number2: number = 0;
  private operator: string = '';

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

  setOperator(operator: string): void {
    this.operator = operator;
  }

  getOperator(): string {
    return this.operator;
  }
}
