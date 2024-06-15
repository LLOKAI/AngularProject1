import { Component } from '@angular/core';
import { Student } from './student';
import { Location, Menu } from './menu';
import data from '../assets/data/menu.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioProject1';
  student: Student = {
    studentId: '991481499',
    firstName: 'William',
    lastName: 'Lokaisingh',
    semester: 4
  };
  
  locations: Location[] = data.locations;
  menu: Menu = data.menu;
}
