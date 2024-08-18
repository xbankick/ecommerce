import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { ProductComponent } from './layout/pages/product/product.component';
import { BrandComponent } from './layout/pages/brand/brand.component';
import { CategoryComponent } from './layout/pages/category/category.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { CartComponent } from './layout/pages/cart/cart.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "product", component: ProductComponent },
    { path: "brands", component: BrandComponent },
    { path: "category", component: CategoryComponent },
    { path: "cart", component: CartComponent },
    { path: "**", component: NotfoundComponent },
];
