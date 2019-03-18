import { Component } from '@angular/core';

//declare const pesquisar:any;
declare const pesquisar: any;

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

  busca() {
    this.valor = this.input;
    console.log(this.valor);
    pesquisar(this.valor);
  }

}
