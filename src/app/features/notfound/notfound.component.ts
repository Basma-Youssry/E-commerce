import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [NavBarComponent, RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  
}
