import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  iniciarRecorrido(){
    introJs().start();
  }

}
