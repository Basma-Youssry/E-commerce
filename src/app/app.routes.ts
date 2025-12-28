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


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: 'register', component: RegisterComponent, title: 'Register page' },
            { path: 'login', component: LoginComponent, title: 'Login page' },
        ],
        canActivate:[inloggedGuard]
    },
    {
        path: '', component: BlankLayoutComponent, children: [
            { path: 'home', component: HomeComponent, title: 'Home page'},
            { path: 'about-us', component: AboutUsComponent, title: 'About page' },
            { path: 'services', component: ServicesComponent, title: 'Services page' },
            { path: 'products', component: ProductsComponent, title: 'Products page' },
            { path: 'details/:slug/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'details/:id', component: DetailsComponent, title: 'Details page'},
            { path: 'contact-us', component: ContactUsComponent, title: 'Contact-us page' },
            { path: 'check-out', component: CheckoutComponent, title: 'check-out page' },
            { path: 'blog', component: BlogComponent, title: 'Blog page' },
        ],
        canActivate:[authGuard]
    },
    {path: '**', component: NotfoundComponent}
];
