import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Openai } from '../openai';

@Component({
  selector: 'app-kichacontainer',
  imports: [FormsModule, CommonModule],
  templateUrl: './kichacontainer.html',
  styleUrl: './kichacontainer.scss',
})
export class Kichacontainer {
  chats: any[] = [];
ngOnInit(){
this.getChatHistory()
}
  constructor(private openai: Openai) {

  }

  getChatHistory(){
    this.openai.getChatHistory().subscribe({
      next: (res) => {
        this.chats = res; 
        this.containers.push(...this.chats)
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
    { name: 'AI Engine', description: 'Processes and analyzes large data intelligently.' },
    { name: 'Vision Module', description: 'Recognizes images, faces, and real-world objects.' },
    { name: 'Chat Core', description: 'Builds human-like conversational systems.' },
    { name: 'Automation Hub', description: 'Automates workflows and repetitive tasks.' },
    { name: 'Data Processor', description: 'Cleans and transforms datasets efficiently.' },
    { name: 'Speech System', description: 'Converts speech to text and vice versa.' },
  ];

}
