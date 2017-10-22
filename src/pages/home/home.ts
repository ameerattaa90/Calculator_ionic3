import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    firstNumber: number;
    secondNumber: number;
    constructor(public navCtrl: NavController) { }

    add() {
       
        var a = +(this.firstNumber) + +(this.secondNumber);
        document.getElementById("ressult").innerHTML = "" + a;
        

    }
    subtract() {
        var a = +(this.firstNumber) - +(this.secondNumber);
        document.getElementById("ressult").innerHTML = "" + a;


    }
    division() {

        var a = +(this.firstNumber) / +(this.secondNumber);
        document.getElementById("ressult").innerHTML = "" + a;


    }
    multiply() {

        var a = +(this.firstNumber) * +(this.secondNumber);
        document.getElementById("ressult").innerHTML = "" + a;


    }

}

