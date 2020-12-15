import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { faCalendarAlt,
  faUsers,
  faBoxes,
  faPeopleCarry,
  faCog,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private menu: MenuItem[];

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.setMenu();
  }

  private setMenu(): void {
    this.menu = [
      {
        label: 'Calendar',
        routerLink: 'dashboard',
      },
      {
        label: 'Employees',
        routerLink: 'employees',
      },
      {
        label: 'Products',
        routerLink: 'products',
      },
      {
        label: 'Settings',
        routerLink: 'settings',
      },
    ];
  }

  public getMenu(): MenuItem[] {
    return this.menu;
  }

  public getActive(link: string): string {
    return this.router.url.includes(link) ? 'active' : '';
  }

  public getFAIcon(label: string): IconDefinition {
    switch (label) {
      case 'Calendar':
        return faCalendarAlt;
      case 'Employees':
        return faUsers;
      case 'Products':
        return faBoxes;
      case 'Settings':
        return faCog;
    }
  }

  public navigateToLink(routerLink: string): void {
    this.router.navigate([routerLink]);
  }
}
