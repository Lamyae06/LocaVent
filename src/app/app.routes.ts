import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProduitComponent } from './produits/produits.component'; // Utilisation du bon composant  // Exemple de produit
import { ProductsComponent } from './products/products.component'; 


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'produits', component: ProduitComponent },
    { path: 'products', component: ProductsComponent },

];
