import { Component, OnInit } from '@angular/core';
import { utils } from 'protractor';


declare const pesquisar: any;
declare const resumir:any;

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

  inputLanguage:any = {
    "articleName": "Lebron James",
    "lang": "pt"
  };

  infos: any;
  url: any;
  conteudo: any;
  images: any;

  constructor(){ }

  ngOnInit() {

    async function chamar(input: string) {
      return await pesquisar(input);
    } 
    
    chamar(this.inputLanguage).then(result => this.getValue(result[0].result));
        
  }

  busca(input) {
    
  }

  getValue(dado) {
    this.infos = dado; 
    this.url = this.infos.url;
    resumir(this.url).then(result => this.getConteudo(result[0].result));
    this.getImages(this.infos.images);
    console.log(this.infos);
    console.log(this.url);
    console.log(this.images[0]);
  }

  getUrl(dado) {
    this.url = dado;
    console.log(this.url);
  }

  getConteudo(dado) {
    this.conteudo = dado;
    console.log(this.conteudo);
  }

  getImages(dado) {
    this.images = dado;
  }
  

}
