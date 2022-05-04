import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from './components/login/login.component';


  
  @NgModule({
    declarations: [AppComponent, LoginComponent], // Components, Directives, Pipes
    imports: [BrowserModule, ReactiveFormsModule], // Other Modules
    providers: [], // reusable classes -> services
    bootstrap: [AppComponent] // Starting component
  })
 export class AppModule {}