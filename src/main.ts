import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { ProductsComponent } from './app/products/products.component';  // Exemple de produit
import { CategoriesComponent } from './app/categories/categories.component';  // Exemple de catégories
import { ContactComponent } from './app/contact/contact.component';  // Exemple de contact
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/products', pathMatch: 'full' },  // Exemple de route par défaut
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]),
    importProvidersFrom(FormsModule),
    provideAnimations(),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
