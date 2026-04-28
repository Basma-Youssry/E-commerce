import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
    faqs = signal([
  {
    question: 'landingpage.faq.payment_methods.question',
    answer: 'landingpage.faq.payment_methods.answer',
    open: false
  },
  {
    question: 'landingpage.faq.refunds.question',
    answer: 'landingpage.faq.refunds.answer',
    open: false
  },
  {
    question: 'landingpage.faq.support.question',
    answer: 'landingpage.faq.support.answer',
    open: false
  }
]);
  toggle(index: number): void {
    this.faqs.update(faqs =>
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false
      }))
    );
  }
}
