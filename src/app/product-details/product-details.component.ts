import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Pour récupérer l'ID du produit depuis l'URL
import { ProduitService } from '../produit.service'; // Service pour récupérer les données du produit
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any = null; // Pour stocker les détails du produit

  constructor(
    private route: ActivatedRoute, // Pour accéder aux paramètres de l'URL
    private produitService: ProduitService // Pour récupérer les données du produit
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du produit depuis l'URL
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Utiliser le service pour récupérer les détails du produit avec cet ID
      this.produitService.getProduitDetails(productId).subscribe((data) => {
        this.product = data; // Assigner les données du produit
      });
    }
  }
}
