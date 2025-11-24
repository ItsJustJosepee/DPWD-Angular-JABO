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

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      vercelAnalytics.inject();
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          vercelAnalytics.inject();
          this.isMenuOpen = false;
        }
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  dropdownOpen: string | null = null;
  activeBtn: string | null = null;

  toggleDropdown(nombre: string) {
    this.dropdownOpen = this.dropdownOpen === nombre ? null : nombre;
    this.activeBtn = this.activeBtn === nombre ? null : nombre; // <-- esto
  }

  openDropdown(nombre: string) {
    if (window.innerWidth > 768) {
      this.dropdownOpen = nombre;
    }
  }

  closeDropdown() {
    if (window.innerWidth > 768) {
      this.dropdownOpen = null;
    }
  }

}
