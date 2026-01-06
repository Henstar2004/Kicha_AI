import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Openai } from '../openai';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kichacontainer',
  imports: [FormsModule, CommonModule],
  templateUrl: './kichacontainer.html',
  styleUrl: './kichacontainer.scss',
})
export class Kichacontainer {
  chats: any[] = [];
  isMenuOpen= false;

mode="Introduction"
user_name="K"
ngOnInit(){
this.getChatHistory()
}
  constructor(private openai: Openai,private route:Router) {

  }

  getChatHistory(){
    this.openai.getChatHistory().subscribe({
      next: (res) => {
        this.chats = res; 
        this.containers.unshift(...this.chats)
               // save to component variable
        console.log('All chat history:', res);
        console.log('All chat history:', this.containers);
        
      },
      error: (err) => {
        console.error('Failed to load chat history', err);
      }
    });
  }
 

  searchText = '';
  
onSearchChange(value: string) {
  console.log('Search text changed:', value);

  this.openai.sendToSearch(value).subscribe({
    next: (res) => {
      console.log('Search response:', res);
      console.log('Search response:', res.reply);

      // use res.reply here
    },
    error: (err) => {
      console.error('Search API error:', err);
    }
  });
}


  containers = [
    { name: 'AI Engine', discription: 'Processes and analyzes large data intelligently.' },
    { name: 'Vision Module', discription: 'Recognizes images, faces, and real-world objects.' },
    { name: 'Chat Core', discription: 'Builds human-like conversational systems.' },
    { name: 'Automation Hub', discription: 'Automates workflows and repetitive tasks.' },
    { name: 'Data Processor', discription: 'Cleans and transforms datasets efficiently.' },
    { name: 'Speech System', discription: 'Converts speech to text and vice versa.' },
  ];

  opencontainer(name:any){

  }
   content_item(an:any){


    this.mode=an;
  }
  selectMode(mode: string) {
  this.route.navigate([mode]);
}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}


