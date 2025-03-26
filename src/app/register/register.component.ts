import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `
  <div class="container">
    <div class="card">
      <h2>Inscription</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input type="text" class="form-control" id="name" [(ngModel)]="name" name="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" [(ngModel)]="email" name="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="password" [(ngModel)]="password" name="password">
        </div>
        <div class="mb-3">
          <label for="passwordConfirmation" class="form-label">Confirmation Mot de passe</label>
          <input type="password" class="form-control" id="passwordConfirmation" [(ngModel)]="passwordConfirmation" name="passwordConfirmation">
        </div>
        <button type="submit" class="btn-submit">S'inscrire</button>
      </form>
    </div>
  </div>
  `,
  styles: [`
    /* Centrer le contenu dans la page */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75vh; /* Occupe toute la hauteur de la vue */
     
    }

    /* Styles de la carte */
    .card {
      background-color:rgb(238, 238, 238); /* Orange */
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(43, 21, 213, 0.1);
      width: 100%;
      max-width: 500px; /* Largeur maximale de la carte */
      text-align: center;
    }

    h2 {
      color: #00274D;;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .form-label {
      font-size: 16px;
      color: #333;
      text-align: left;
      display: block;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .btn-submit {
      background-color:#F5A623; /* Bleu foncé */
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 100%;
    }

    .btn-submit:hover {
      background-color: #00274D;  /* Orange */
    }
  `],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
}
