import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kichacontainer',
  imports: [FormsModule,CommonModule],
  templateUrl: './kichacontainer.html',
  styleUrl: './kichacontainer.scss',
})
export class Kichacontainer {

   searchText = '';

  containers = [
    { name: 'AI Engine', description: 'Processes and analyzes large data intelligently.' },
    { name: 'Vision Module', description: 'Recognizes images, faces, and real-world objects.' },
    { name: 'Chat Core', description: 'Builds human-like conversational systems.' },
    { name: 'Automation Hub', description: 'Automates workflows and repetitive tasks.' },
    { name: 'Data Processor', description: 'Cleans and transforms datasets efficiently.' },
    { name: 'Speech System', description: 'Converts speech to text and vice versa.' },
  ];

}
