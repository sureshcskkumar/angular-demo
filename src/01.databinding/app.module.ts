import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";



@NgModule({
  declarations: [AppComponent],  // Components, Directives, Pipes
  imports: [BrowserModule, FormsModule], // Other Modules
  providers: [], // reusable classes -> services
  bootstrap: [AppComponent] // Starting component
})
export class AppModule {
}