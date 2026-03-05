import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ProductsComponent } from './features/products/products.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { DetailsComponent } from './features/details/details.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { inloggedGuard } from './core/guards/inlogged-guard';
import { CategoriesComponent } from './features/categories/categories.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: AuthLayoutComponent, canActivate:[inloggedGuard],
        children: [
            { path: 'register',  loadComponent: ()=> import('./core/auth/register/register.component').then((c)=>c.RegisterComponent), title: 'Register page' },
            { path: 'login',  loadComponent: ()=> import('./core/auth/login/login.component').then((c)=>c.LoginComponent), title: 'Login page' },
            { path: 'forgetpassword',  loadComponent: ()=> import('./core/auth/forget-password/forget-password.component').then((c)=>c.ForgetPasswordComponent), title: 'forget password page' }
        ]   
    },
    {
        path: '', component: BlankLayoutComponent, canActivate:[authGuard],
         children: [
            { path: 'home',   loadComponent: ()=> import('./features/home/home.component').then((c)=>c.HomeComponent),title: 'Home page'},
            { path: 'about-us', loadComponent: ()=> import('./features/about-us/about-us.component').then((c)=>c.AboutUsComponent), title: 'About page' },
            { path: 'brands', loadComponent: ()=> import('./features/brands/brands.component').then((c)=>c.BrandsComponent), title: 'Brands page' },
            { path: 'products', loadComponent: ()=> import('./features/products/products.component').then((c)=>c.ProductsComponent),title: 'Products page' },
            { path: 'details', component: DetailsComponent, title: 'Details page'},
            { path: 'details/:slug/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'details/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'contact-us', component: ContactUsComponent, title: 'Contact-us page' },
            { path: 'check-out', component: CheckoutComponent, title: 'check-out page' },
            { path: 'check-out/:id', component: CheckoutComponent, title: 'check-out page' },
            { path: 'categories', component: CategoriesComponent, title: 'categories page' },
            { path: 'allorders', loadComponent: ()=> import('./features/allorders/allorders.component').then((c)=>c.AllordersComponent),title: 'allorders page' },
            { path: 'cart', loadComponent: ()=> import('./features/cart/cart.component').then((c)=>c.CartComponent),title: 'Cart page' }
        ]
        
    },
    {path: '**', component: NotfoundComponent}
];
