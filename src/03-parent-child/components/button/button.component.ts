import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: `button.component.html`,
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnChanges{
      @Input()
      color:string = "black"
      constructor() {
          console.log("This is button component:" + this.color);
      }
    ngOnChanges(changes: SimpleChanges): void {
        // throw new Error("Method not implemented.");
        console.log("Color: " + this.color);
        console.log(changes);
    }
  }