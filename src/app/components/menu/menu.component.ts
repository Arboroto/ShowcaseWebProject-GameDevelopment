import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  Navigate(elem: HTMLElement){
    elem.scrollIntoView({ behavior:'smooth' });
  }
  
  constructor() { }

  ngOnInit(){}
}
