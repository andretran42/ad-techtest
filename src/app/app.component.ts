import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form-component/form-component.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputApp';

  cards: any[] = [];

  onAddCard(userDetails: any) {
    this.cards.push(userDetails);
  }
}
