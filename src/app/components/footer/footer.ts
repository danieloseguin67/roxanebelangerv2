import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(public translationService: Translation) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
