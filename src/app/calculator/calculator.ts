import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { operate } from 'rxjs/internal/util/lift';

@Component({
  selector: 'app-calculator',
  imports: [ FormsModule ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class CalculatorComponent {

  number1: number = 0;
  number2: number = 0;
  sum: number = 0;

  /* getNumber1(e : any){
    this.number1 = +e.target.value;
  }

  getNumber2(e : any){
    this.number2 = +e.target.value;
  } */

  operate(){
    this.sum = this.number1 + this.number2;
  }

}
