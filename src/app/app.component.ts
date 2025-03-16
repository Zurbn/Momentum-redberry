import { Component } from '@angular/core';
import { MatIconRegistryService } from './core/services/mat-icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RedBerry-Momentum';
  constructor(private matIconRegistryService: MatIconRegistryService) {}
}
