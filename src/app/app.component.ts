import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    //template: "<h1>This is my first angular component</h1>",
    //styles: ["h1{text-align: center;}"]
    templateUrl: `app.component.html`,
    styleUrls: ["app.component.scss"]
  })
  export class AppComponent{
      constructor() {
          console.log("This is component");
      }
  }