import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Beau Monese - Portfolio';
 @HostBinding('class.dark') isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    this.isDarkMode = saved ? saved === 'dark' : true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
