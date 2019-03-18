import { Component } from '@angular/core';

declare const pesquisar: any;
declare const resumir:any;

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
  conteudo;
  imagens;
  url;

  constructor(){ }

  busca() {
    this.valor = this.input;
    pesquisar(this.valor, this.conteudo, this.url, this.imagens);
  }

  // resumeTexto() {
  //   resumir(this.url, this.conteudo);
  // }

}
