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
  valor:string;

  constructor(){ }

  ngOnInit() {
    // console.log("HOME: " + array);
    valor(teste);
    console.log("HOME: "  + teste);

    pesquisar("Michael Jackson");
    console.log("HOME: " + arrayJSON);
    
  }

  busca() {
    this.valor = this.input;
  }

}
