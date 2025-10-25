import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  constructor(public translationService: Translation) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
