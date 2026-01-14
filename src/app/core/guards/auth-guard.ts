import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService= inject(CookieService);
  const  router= inject(Router);
  const platFormId = inject(PLATFORM_ID);

  //IF you didn't in Browser(in SSR)
  if(!isPlatformBrowser(platFormId)){
    return true;
  }

  if(cookieService.get('token')){
    return true;

  }else{

   return router.parseUrl('/login');
  }

};
