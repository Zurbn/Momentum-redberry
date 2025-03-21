import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class MatIconRegistryService {
  private icons = [
    {
      name: 'check',
      url: '/assets/icons/check.svg',
    },
    {
      name: 'plus-circle',
      url: '/assets/icons/plus-circle.svg',
    },
    {
      name: 'momentum-plus',
      url: '/assets/icons/momentum-plus.svg',
    },
    {
      name: 'trashcan',
      url: '/assets/icons/trashcan.svg',
    },
    {
      name: 'gallery',
      url: '/assets/icons/gallery.svg',
    },
    {
      name: 'close-circle',
      url: '/assets/icons/close-circle.svg',
    },
    {
      name: 'pie-cart',
      url: '/assets/icons/pie-chart.svg',
    },
    {
      name: 'calendar',
      url: '/assets/icons/calendar.svg',
    },
    {
      name: 'user-icon',
      url: '/assets/icons/user-icon.svg',
    },
    {
      name: 'remove-icon',
      url: '/assets/icons/remove-tag.svg',
    },
  ];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    this.icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    });
  }
}
