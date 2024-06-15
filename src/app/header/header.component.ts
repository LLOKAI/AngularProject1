import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() studentInfo!: Student;

}
