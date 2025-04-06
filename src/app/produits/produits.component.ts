import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Ajoute HttpClientModule ici
  template: `
    <h2>Liste des produits</h2>
    <ul>
      <li *ngFor="let produit of produits">{{ produit.nom }}</li>
    </ul>
  `
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }
}
