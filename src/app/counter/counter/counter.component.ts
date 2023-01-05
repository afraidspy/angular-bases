
import { Component } from "@angular/core";

@Component({
    selector: 'counter-app',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
    title = 'Counter app';
    number:number = 10;
  
    sum(){
      this.number += 5;
    }
  
    substract(){
      this.number -= 5;
    }
}
