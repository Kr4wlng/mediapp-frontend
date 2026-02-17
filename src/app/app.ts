import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaComponent } from './compa/compa';
import { CompbComponent } from './compb/compb';
import { CalculatorComponent } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompaComponent, CompbComponent, CalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tittle = 'coders';
  appMessage = 'TITTLE FROM APP COMPONENT';
  sum: number = 0;

  getSum(e: number){
    this.sum = 0;
  }
}
