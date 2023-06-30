import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent implements OnInit{

  weight!:number;
  height!:number;
  bmi!:number;


  calculateBmi(){

    const heightInMeters = this.height/100;
    this.bmi = this.weight /(heightInMeters*heightInMeters)
    console.log("Bmi "+ this.bmi.toFixed(2))
    return this.bmi.toFixed(2);

  }

  ngOnInit(): void {}
}





