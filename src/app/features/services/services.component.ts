import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';


@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

number:Signal<number> = signal(0).asReadonly()




price:WritableSignal<number> = signal(100);
quantity:WritableSignal<number> = signal(3);

totalPrice :Signal<number> = computed(()=> this.price() * this.quantity());  //Only readonly

changePrice():void{

  this.price.update((value)=> value + 10);

  console.log(this.price());

  console.log(this.number());
  
  
}

}
