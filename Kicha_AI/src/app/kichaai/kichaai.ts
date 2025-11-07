import { Component } from '@angular/core';
import { Kichahome } from '../kichahome/kichahome';
import { CommonModule } from '@angular/common';
import { Kichacontact } from '../kichacontact/kichacontact';
import { Kichacontainer } from '../kichacontainer/kichacontainer';
import { Kichasettings } from '../kichasettings/kichasettings';

@Component({
  selector: 'app-kichaai',
  imports: [
    Kichahome,
    CommonModule,
    Kichacontact,
    Kichacontainer,
    Kichasettings
  ],
  templateUrl: './kichaai.html',
  styleUrl: './kichaai.scss',
})
export class Kichaai {
  kichahome = true;
  kichacontainer = false;
  kichaSettings = false;
  kichaContact = false;

  selectMode(mode: string) {
    // Reset all
    this.kichahome = false;
    this.kichacontainer = false;
    this.kichaSettings = false;
    this.kichaContact = false;

    // Activate selected
    if (mode === 'home') this.kichahome = true;
    else if (mode === 'container') this.kichacontainer = true;
    else if (mode === 'settings') this.kichaSettings = true;
    else if (mode === 'contact') this.kichaContact = true;
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
