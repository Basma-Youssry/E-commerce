import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../shared/components/input/input.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  private readonly fb = inject(FormBuilder);
  private readonly ActivatedRoute = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);



  checkOutForm!: FormGroup;
  id: string | null = null;
  paymentMethod:string = '';


  ngOnInit(): void {
    this.initForm();
    this.getCartId();
  }

  initForm():void{
    this.checkOutForm = this.fb.group({
      shippingAddress: this.fb.group({
        details: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
        city:  [null, [Validators.required]]
      })
    })
  }

  getCartId():void{
    this.ActivatedRoute.paramMap.subscribe({
      next: (urlParams)=>{
       this.id =  urlParams.get('id');

       console.log(this.id);
       
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  submitForm():void{
    if(this.checkOutForm.valid){
      //For Payment button
      if(this.paymentMethod === 'visa'){
        this.cartService.checkOutSession(this.id, this.checkOutForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            window.open(res.session.url, '_self')
          }
        })        

      }else if(this.paymentMethod === 'cash'){
        this.cartService.createCashOrder(this.id, this.checkOutForm.value).subscribe({
          next:(res)=>{
            console.log(res);
          }
        })        
      }
    }
  }
}
