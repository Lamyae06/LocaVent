import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { ProduitComponent } from './app/produits/produits.component';
import { ProductsComponent } from './app/products/products.component';
import { CategoriesComponent } from './app/categories/categories.component';
import { ContactComponent } from './app/contact/contact.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'produits', component: ProduitComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]),
    importProvidersFrom(HttpClientModule, FormsModule), // Ajoute HttpClientModule ici
    provideAnimations(),
  ]
}).catch(err => console.error(err));
