import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="container">
      <div class="card">
        <h2>Se connecter</h2>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required><br><br>
          
          <button type="submit">Se connecter</button>
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
      color: #00274D;
      font-size: 24px;
      margin-bottom: 20px;
    }

    label {
      font-size: 16px;
      color: #333;
      text-align: left;
      display: block;
      margin-bottom: 8px;
      
    }

    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      background-color:#F5A623; /* Bleu foncé */
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #00274D; 
    }
  `]
})
export class LoginComponent {
 
}
