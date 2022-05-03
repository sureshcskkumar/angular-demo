import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { HeaderComponent } from './components/header/header.component';


  
  @NgModule({
    declarations: [AppComponent, ButtonComponent, HeaderComponent],  // Components, Directives, Pipes
    imports : [BrowserModule], // Other Modules
    providers : [], // reusable classes -> services
    bootstrap: [AppComponent] // Starting component
  })
 export class AppModule {}