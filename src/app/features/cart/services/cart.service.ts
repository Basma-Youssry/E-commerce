import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);

  countNumber:WritableSignal<number> = signal(0);

  addProductToCart(id:string):Observable<any>{
    return this.httpClient.post(environment.baseUrl + 'cart', {
      productId: id
    });
  }

  getLoggedUserCart():Observable<any>{
    return this.httpClient.get(environment.baseUrl + 'cart')
  }

  removeSpecificCartItem(id:string):Observable<any>{
    return this.httpClient.delete(environment.baseUrl + `cart/${id}`);
  }

  updateCartProductCount(id:string, count:number):Observable<any>{
       return this.httpClient.put(environment.baseUrl + `cart/${id}`, 
      {
       count: count
      }
    )
  }
  checkOutSession(id:string | null, obj:object):Observable<any>{
    return this.httpClient.post(environment.baseUrl + `orders/checkout-session/${id}?url=http://localhost:4200`, 
      obj
    )
  }
  createCashOrder(id:string | null, obj:object):Observable<any>{
    return this.httpClient.post(environment.baseUrl + `orders/${id}`,
        obj
       );
  }
  getUserOrders(id:string | null):Observable<any>{
    return this.httpClient.get(environment.baseUrl + `orders/user/${id}`)
  }
}
