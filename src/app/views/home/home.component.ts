import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  public user: string = "Gabriel Braga";

  public image: any = {
    source: "https://avatars.githubusercontent.com/u/66652642?v=4",
    alternative: "Avatar Gabriel Braga"
  };

  public clicar(): void {
    alert("Clicou!");
  }

}
