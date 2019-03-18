import { Component, OnInit } from '@angular/core';

declare const pesquisar: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    effect: 'flip',

  };

  input:any = ''; 
  valor:string;
  conteudo;
  imagens;
  url;

  constructor(){ }

  ngOnInit() {}

  busca() {
    this.valor = this.input;
    pesquisar(this.valor, this.conteudo, this.url, this.imagens);
    console.log(this.conteudo);
    console.log(this.imagens);
    console.log(this.url);
  }

}
