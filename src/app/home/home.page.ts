import { Component, OnInit } from '@angular/core';


declare const pesquisar:any;

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
  teste2: any;
  
  constructor(){ }

  ngOnInit() {
    //valor(teste);
    //console.log("HOME: "  + teste);

    //this.teste2 = pesquisar(this.inputLanguage);
    
    console.log("HOMEFUNCTION: " + pesquisar(this.inputLanguage));
    
  }

  busca() {
  }

}
