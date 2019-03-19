import { Component, OnInit } from '@angular/core';

declare const pesquisar: any;
declare const resumir:any;
// declare const setInfo:any;
declare const teste:any;
declare const arrayJSON:any;
declare const valor:any;

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

  constructor(){ }

  ngOnInit() {
    valor(teste);
    console.log("HOME: "  + teste);

    pesquisar(this.inputLanguage);
    
  }

  busca() {
  }

}
