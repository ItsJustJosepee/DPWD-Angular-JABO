import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// importa todo el módulo de analytics
import * as vercelAnalytics from '@vercel/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica que esté corriendo en el navegador (no en Node)
    if (typeof window !== 'undefined') {
      // Inicializa analytics
      vercelAnalytics.inject();

      // Trackea navegación interna
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          vercelAnalytics.inject();
          console.log('📊 Vercel Analytics: ruta visitada →', event.urlAfterRedirects);
        }
      });
    }
  }
}
