import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({
  declarations: [],  // Components, Directives, Pipes
  imports : [BrowserModule], // Other Modules
  providers : [], // reusable classes -> services
  bootstrap: [] // Starting component
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);