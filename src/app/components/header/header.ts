import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public translationService: Translation) {}

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
