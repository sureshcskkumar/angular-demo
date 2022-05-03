import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// import { UserService } from "./services/user.service";


// NOTE: There are two ways to use Providers:
// One is to add in the providers in @NgModule, 
// and the other is to add the @Injectable decorator in the service class itself

  @NgModule({
    declarations: [AppComponent],  // Components, Directives, Pipes
    imports : [BrowserModule, HttpClientModule], // Other Modules
    // providers : [UserService], // reusable classes -> services 
    bootstrap: [AppComponent] // Starting component
  })
 export class AppModule {}