import { Component, signal, OnInit, afterNextRender, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';
import { NgxSpinnerComponent } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NgxSpinnerComponent],
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
