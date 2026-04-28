import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private readonly translateService = inject(TranslateService);

  
  currentLang = this.translateService.currentLang;

}
