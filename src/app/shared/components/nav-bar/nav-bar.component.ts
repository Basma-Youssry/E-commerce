import { Component, computed, inject, Input, PLATFORM_ID, Signal } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/service/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
private readonly authService  = inject(AuthService);

constructor(private flowbiteService: FlowbiteService) {}

 @Input({required:true}) isLogin!:boolean;
 
 private readonly cartService = inject(CartService);
 private readonly  pLATFORM_ID= inject(PLATFORM_ID);
 
 count:Signal<number> = computed(()=> this.cartService.countNumber());

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
}
