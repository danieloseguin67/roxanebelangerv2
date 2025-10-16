import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Translation } from '../../services/translation';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  faqItems = signal<FaqItem[]>([
    { question: 'faq.q1', answer: 'faq.a1', isOpen: false },
    { question: 'faq.q2', answer: 'faq.a2', isOpen: false },
    { question: 'faq.q3', answer: 'faq.a3', isOpen: false },
    { question: 'faq.q4', answer: 'faq.a4', isOpen: false },
    { question: 'faq.q5', answer: 'faq.a5', isOpen: false },
    { question: 'faq.q6', answer: 'faq.a6', isOpen: false },
    { question: 'faq.q7', answer: 'faq.a7', isOpen: false }
  ]);

  constructor(public translationService: Translation) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  toggleFaq(index: number) {
    const items = this.faqItems();
    items[index].isOpen = !items[index].isOpen;
    this.faqItems.set([...items]);
  }
}
