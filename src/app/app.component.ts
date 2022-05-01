import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: "<h1>This is my first angular component</h1>",
    styles: ["h1{text-align: center;}"]
  })
  export class AppComponent{
      constructor() {
          console.log("This is component");
      }
  }