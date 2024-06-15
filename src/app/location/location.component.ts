import { Component, Input } from '@angular/core';
import { Location } from '../menu';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input() locations!: Location[];
}
