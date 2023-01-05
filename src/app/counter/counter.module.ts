import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";

import { CounterComponent } from "./counter/counter.component";

@NgModule ({
    declarations:[
        CounterComponent
    ],
    exports: [
        CounterComponent
    ],
    imports: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class CounterModule {

}