import { Component, computed, ElementRef, inject, input, Input, PLATFORM_ID, signal, Signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/service/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateServicee } from '../../../core/services/translate/TranslateServicee';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
private readonly authService  = inject(AuthService);

constructor(private flowbiteService: FlowbiteService) {}

isLangOpen:WritableSignal<boolean> = signal(false);

 @Input({required:true}) isLogin!:boolean;
@Input({ required: true }) landing!: boolean;
@Input({ required: true }) landingpage!: boolean;

 private readonly cartService = inject(CartService);
 private readonly  pLATFORM_ID= inject(PLATFORM_ID);
 private readonly  translateServicee= inject(TranslateServicee);
 private readonly  translateService= inject(TranslateService);
 
 count:Signal<number> = computed(()=> this.cartService.countNumber());

  @ViewChild('dropdownNavbar') dropdownNavbar!:ElementRef<HTMLDivElement>;
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    if(isPlatformBrowser(this.pLATFORM_ID)){
      this.getAllDataCart();
    }
  }

  signOut():void{
    this.authService.signOut();
  }

  getAllDataCart():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
       this.cartService.countNumber.set(res.numOfCartItems);
      }
    })
  }


  change(lang:string):void{
    this.translateServicee.changeLang(lang);

    this.dropdownNavbar.nativeElement.classList.toggle('hidden');

  }

  currentLang(lang:string):boolean{
   return this.translateService.currentLang === lang;
  }
}
