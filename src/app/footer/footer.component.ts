import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() studentInfo!: Student;
}
