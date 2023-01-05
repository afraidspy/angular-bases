import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  heroes: string[] = ['Spiderman','Ironman','Hulk','American captain']
  deletedHero :any
  isDeleted = false;

  delete(){
    this.deletedHero = this.heroes.shift()||'';
    if (this.deletedHero == ''){
      this.isDeleted = false;
    }else{
      this.isDeleted = true;
    }
  }

}
