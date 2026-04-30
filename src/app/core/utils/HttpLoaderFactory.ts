import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/E-commerce/i18n/', '.json');
}
// export class CustomTranslateLoader implements TranslateLoader {
//   constructor(private http: HttpClient) {}

//   getTranslation(lang: string): Observable<any> {
//     return this.http.get(`/i18n/${lang}.json`);
//   }
// }
