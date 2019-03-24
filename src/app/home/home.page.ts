import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';


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
    "articleName": "Michael Jackson",
    "lang": "pt"
  };

  infos: any;
  
  constructor(){ }

  ngOnInit() {

    async function chamar(input: string) {
      return await pesquisar(input);
    } 
    
    this.infos = chamar(this.inputLanguage).then(result => console.log(result[0].result));
  }

  busca(input) {
    
  }
  

}
