import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Introduction } from '../home_pages/introduction/introduction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kichahome',
  imports: [CommonModule,Introduction],
  templateUrl: './kichahome.html',
  styleUrl: './kichahome.scss',
})
export class Kichahome {
isMenuOpen= false;
   constructor(private route:Router){}
mode="Introduction"
user_name="K"
 selectedIndex: number = 0; 
  navbar_content=[

  {item:'Introduction'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},
  {item:'Basics'},

  ]
  content_item(an:any){


    this.mode=an;
  }
  selectMode(mode: string) {
  this.route.navigate([mode]);
}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selectItem(i: number) {
  this.selectedIndex = i;
}

}
