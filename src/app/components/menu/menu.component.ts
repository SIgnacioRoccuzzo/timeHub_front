import { Component, inject } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  adminServicio = inject(AdministradoresService);
  router = inject(Router);

  darkModeService = inject(DarkModeService);

  onClickLogout() {
    localStorage.removeItem('admin_token');
    this.router.navigate(['/login']);
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    console.log('modo oscuro' + this.darkModeService.darkMode);

  }

  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

}
