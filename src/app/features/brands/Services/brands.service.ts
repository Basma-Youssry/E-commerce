import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly  httpClient = inject(HttpClient);

  GetAllBrands():Observable<any>{
    return this.httpClient.get(environment.baseUrl + 'brands');
  }
}
