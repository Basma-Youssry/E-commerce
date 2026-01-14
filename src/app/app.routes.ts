import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ServicesComponent } from './features/services/services.component';
import { ProductsComponent } from './features/products/products.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { DetailsComponent } from './features/details/details.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { BlogComponent } from './features/blog/blog.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { inloggedGuard } from './core/guards/inlogged-guard';
import { CartComponent } from './features/cart/cart.component';
import { AllordersComponent } from './features/allorders/allorders.component';
import { ForgetPasswordComponent } from './core/auth/forget-password/forget-password.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: AuthLayoutComponent, canActivate:[inloggedGuard],
        children: [
            { path: 'register', component: RegisterComponent, title: 'Register page' },
            { path: 'login', component: LoginComponent, title: 'Login page' },
            { path: 'forgetpassword', component: ForgetPasswordComponent, title: 'forget password page' }
        ]   
    },
    {
        path: '', component: BlankLayoutComponent, canActivate:[authGuard],
         children: [
            { path: 'home', component: HomeComponent, title: 'Home page'},
            { path: 'about-us', component: AboutUsComponent, title: 'About page' },
            { path: 'services', component: ServicesComponent, title: 'Services page' },
            { path: 'products', component: ProductsComponent, title: 'Products page' },
            { path: 'details', component: DetailsComponent, title: 'Details page'},
            { path: 'details/:slug/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'details/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'contact-us', component: ContactUsComponent, title: 'Contact-us page' },
            { path: 'check-out', component: CheckoutComponent, title: 'check-out page' },
            { path: 'check-out/:id', component: CheckoutComponent, title: 'check-out page' },
            { path: 'blog', component: BlogComponent, title: 'Blog page' },
            { path: 'allorders', component: AllordersComponent, title: 'allorders page' },
            { path: 'cart', component: CartComponent, title: 'Cart page' }
        ]
        
    },
    {path: '**', component: NotfoundComponent}
];
