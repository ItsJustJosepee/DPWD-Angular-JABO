import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as vercelAnalytics from '@vercel/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  isSubmenuOpen: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      vercelAnalytics.inject();
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          vercelAnalytics.inject();
          this.isMenuOpen = false;
          this.isSubmenuOpen = null;
        }
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) this.isSubmenuOpen = null;
  }

  toggleSubmenu(menu: string) {
    // si está abierto, lo cerramos; si no, lo abrimos
    this.isSubmenuOpen = this.isSubmenuOpen === menu ? null : menu;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isSubmenuOpen = null;
  }
}
