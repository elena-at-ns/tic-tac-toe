import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { Logic } from "./logic";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Logic],
})
export class AppComponent implements OnInit {
  constructor(public game: Logic) {}

  ngOnInit(): void {}

  startGame(): void {
    this.game.gameStart();
  }

  clickField(field: any): any {
    const position = field.currentTarget.getAttribute("position");
    console.log(position);
  }
}
