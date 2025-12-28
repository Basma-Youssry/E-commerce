import { Component, signal, OnInit, afterNextRender, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // private readonly id= inject(PLATFORM_ID);

  // ngOnInit(): void {
  //   if(isPlatformBrowser(this.id)){
  //     this.hamade();
  //   }
  // }


  //   hamade():void{
  //     localStorage.setItem('X', 'Y');
  //   }
}
