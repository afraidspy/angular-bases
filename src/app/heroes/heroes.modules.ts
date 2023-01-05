import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations: [
        HeroeComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
    CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class HeroesModule { }