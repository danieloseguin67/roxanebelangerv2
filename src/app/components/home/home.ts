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
    { image: '/assets/images/home-main.svg', alt: 'Mother and child learning with blocks' },
    { image: '/assets/images/slide2.svg', alt: 'Slide 2' },
    { image: '/assets/images/slide3.svg', alt: 'Slide 3' }
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
