import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: #00274D; font-weight: bold;">
          <i class="bi bi-car-front" style="color: #F5A623;"></i> LocaVent
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon" style="background-color: #00274D;"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" style="color: #00274D;">
                <i class="bi bi-box-seam" style="color: #F5A623;"></i> Produits
              </a>
            </li>

            <!-- Catégories avec sous-menu -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #00274D;">
                <i class="bi bi-list" style="color: #F5A623;"></i> Catégories
              </a>
              <ul class="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><a class="dropdown-item" routerLink="/categories/voitures">🚗 Voitures</a></li>
                <li><a class="dropdown-item" routerLink="/categories/scooters">🛵 Scooters</a></li>
                <li><a class="dropdown-item" routerLink="/categories/trottinettes">🛴 Trottinettes</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" style="color: #00274D;">
                <i class="bi bi-envelope" style="color: #F5A623;"></i> Contacts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/login" style="color: #00274D;">
                <i class="bi bi-person" style="color: #F5A623;"></i> Se connecter
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/register" style="color: #00274D;">
                <i class="bi bi-person-plus" style="color: #F5A623;"></i> S'inscrire
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-warning px-3" routerLink="/cart" style="background-color: #F5A623; border-radius: 20px; color: #FFFFFF;">
                <i class="bi bi-cart"></i> Panier
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin: 10px;
    }
    .navbar-nav .nav-link {
      padding: 10px 15px;
      transition: background-color 0.3s ease;
    }
    .navbar-nav .nav-link:hover {
      background-color: #EAEAEA;
      border-radius: 5px;
    }
    .btn-warning {
      border-radius: 20px;
    }
    .navbar-toggler-icon {
      background-color: #00274D;
    }
  `]
})
export class NavbarComponent { }
