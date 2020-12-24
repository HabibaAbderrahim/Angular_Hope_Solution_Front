import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  visibleSidebar1;
  items: MenuItem[];


  constructor(private primengConfig: PrimeNGConfig) {
  }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Visualisation',
        icon: 'pi-chart-line pi',
        items: [
          {label: 'Chart', icon: 'pi pi-chart-bar\n', routerLink: '/chart'},
          {label: 'Report', icon: 'pi pi-bookmark' , routerLink: '/report'}
        ]
      },
      {
        label: 'Grille',
        icon: 'pi pi-table',
        routerLink: '/grille'
      },
      {
        label: 'Eloctoral list',
        icon: 'pi pi-list',
        items: [
          {label: 'Liste Partisienne', icon: 'pi pi-sitemap', routerLink: '/listeElectorale/listePartisienne'},
          {label: 'Liste Coalition', icon: 'pi pi-users', routerLink: '/listeElectorale/listeCoalition' },
          {label: 'Liste Indépendante', icon: 'pi pi-user', routerLink: '/listeElectorale/listeIndependante'},
        ]
      },
      {
        label: 'Reclamation',
        icon: 'pi pi-ban',
        routerLink: '/reclamation'
      }

    ];
  }
}


