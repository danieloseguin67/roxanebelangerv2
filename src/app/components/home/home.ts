import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  currentSlide = signal(0);
  
  slides = [
    { image: '/assets/images/mom_kid_playing.jpg', alt: 'Mother and child learning with blocks' },
    { image: '/assets/images/dad_child_reading.jpg', alt: 'Father and child reading together' },
    { image: '/assets/images/growing_tree.jpg', alt: 'Growing and learning' }
  ];

  constructor(public translationService: Translation) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentSlide.set((this.currentSlide() - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
