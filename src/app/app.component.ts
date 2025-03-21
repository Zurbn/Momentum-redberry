import { Component } from '@angular/core';
import { MatIconRegistryService } from './core/services/mat-icon-registry.service';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RedBerry-Momentum';
  constructor(
    private matIconRegistryService: MatIconRegistryService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event);
      }
      if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });
  }
}
