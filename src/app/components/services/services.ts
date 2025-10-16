import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  constructor(public translationService: Translation) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
