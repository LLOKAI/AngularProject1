import { Component, Input } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menu!: Menu;
  selectedMeal: string = 'Breakfast';

  getMenuItems() {
    return this.menu[this.selectedMeal as keyof Menu];
  }
}
