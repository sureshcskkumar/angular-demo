import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: `app.component.html`,
    styleUrls: ["app.component.scss"]
  })
export class AppComponent{
    name:string = "Maulik";

    updateName(n:string) {
      this.name=n;
    }

    doTask() {
      console.log("Method called");
    }
}