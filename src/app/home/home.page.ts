import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    effect: 'flip',

  };

  input:any = ''; 

  valor:string;

  constructor(){
    console.log(this.valor);
  }

  pesquisar() {
    this.valor = this.input;
    console.log(this.valor);
  }

}
