import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = "blue";
    }, 3000);
  }

  public user: string = "Gabriel Braga";

  public image: any = {
    source: "https://avatars.githubusercontent.com/u/66652642?v=4",
    alternative: "Avatar Gabriel Braga"
  };

  public clicar(): void {
    alert("Clicou!");
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
  }

  public isError: boolean = false;
  public classCor: string = "pink";

  public sapinho: boolean = true;
  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

  public peixes: string[] = [
    "tubarão",
    "polvo",
    "peixe palhaço",
    "baiacu",
    "cavalo-marinho",
    "lula",
    "carpa"
  ];

  public textoPipe: string = "Texto de Exemplo (pipe)";
  public numberPipe: number = 30.3334;
  public nowPipe = new Date();
  public objProfPipe = {
    nome: "Gabriel Braga",
    idade: 20,
    area: "Tecnologia"
  }
}
