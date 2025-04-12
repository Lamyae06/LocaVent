import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../produit.service'; // ← Le service pour récupérer les produits
import { Router } from '@angular/router'; // Importer Router pour la navigation

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  // Fonction pour naviguer vers les détails d'un produit
  goToProductDetails(productId: string): void {
    this.router.navigate(['/product', productId]); // Navigation avec l'ID du produit
  }
}
