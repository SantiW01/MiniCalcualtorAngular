import { Component } from '@angular/core';
@Component({
  selector: 'calculator',
  templateUrl: './calculator.componenet.html',
  styleUrls: ['./calcualtor.component.css'],
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  operator: string = '';
}
