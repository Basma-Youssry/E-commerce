import { Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { FaqComponent } from './components/faq/faq.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-landing-layout',
  imports: [NavBarComponent, HeroComponent, FeaturesComponent, FaqComponent, PricingComponent, ContactComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {
 
}
