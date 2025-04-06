import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Indispensable pour *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Import nécessaire pour *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Voiture Électrique',
      description: 'Location de voiture électrique pour un trajet écologique.',
      price: 20,
      image: 'assets/voiture.jpg'
    },
    {
      name: 'Trottinette',
      description: 'Location de trottinette électrique pour de courts trajets.',
      price: 10,
      image: 'assets/trottinette.jpg'
    }
  ];
}
