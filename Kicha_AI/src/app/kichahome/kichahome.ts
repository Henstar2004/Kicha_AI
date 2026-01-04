import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Introduction } from '../home_pages/introduction/introduction';

@Component({
  selector: 'app-kichahome',
  imports: [CommonModule,Introduction],
  templateUrl: './kichahome.html',
  styleUrl: './kichahome.scss',
})
export class Kichahome {
mode="Introduction"
  navbar_content=[

  {item:'Introduction'},
  {item:'Basics'},

  ]
  content_item(an:any){


    this.mode=an;
  }

}
