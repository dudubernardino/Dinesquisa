import { Component, OnInit } from '@angular/core';


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
  title:any;
  banner:boolean = true;
  inicio:boolean = true;
  name:string;

  inputLanguage:any = {
    "articleName": '',
    "lang": "pt"
  };

  infos: any;
  url: any;
  conteudo: any;
  images: any;


  constructor(){ }

  ngOnInit() {
        
  }

  busca() {
    this.banner = false;

    this.inputLanguage.articleName = this.input;
    
    async function chamar(input: string) {
      return await pesquisar(input);
    } 

    chamar(this.inputLanguage).then(result => this.getValue(result[0].result));
    console.log("VAR: " + this.title);   
    console.log("TITLE: " + JSON.stringify(this.inputLanguage.articleName));
    console.log("LANG: " + JSON.stringify(this.inputLanguage.lang));
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

  backHome() {
    this.banner = true;
    this.infos = null;
    this.input = '';
  }
  

}
