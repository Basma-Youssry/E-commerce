import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class TranslateServicee {

  private readonly renderer2 = inject(RendererFactory2).createRenderer(null, null);
  
  constructor(private TranslateService: TranslateService, @Inject(PLATFORM_ID) private id: object) {

    if (isPlatformBrowser(this.id)) {
      this.TranslateService.setDefaultLang('en');  //Default

      const savedLang = localStorage.getItem('lang');

      if (savedLang) {
        this.TranslateService.use(savedLang!);
      }

      this.changeDirection();
    }
  }

  changeDirection():void{
    if(localStorage.getItem('lang') === 'en'){
      this.renderer2.setAttribute(document.documentElement, 'dir', 'ltr');
      this.renderer2.setAttribute(document.documentElement, 'lang', 'en');

    }else if(localStorage.getItem('lang') === 'ar'){
      this.renderer2.setAttribute(document.documentElement, 'dir', 'rtl');
      this.renderer2.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }

  changeLang(lang:string):void{
    localStorage.setItem('lang', lang);
    this.TranslateService.use(lang);
    this.changeDirection();
  }
}
