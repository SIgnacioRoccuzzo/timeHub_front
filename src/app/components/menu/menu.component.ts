import { Component, inject } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  usuariosService = inject(UsuariosService)
  adminServicio = inject(AdministradoresService);

  router = inject(Router);

  darkModeService = inject(DarkModeService);

  onClickLogout() {
    localStorage.removeItem('admins_token');
    this.router.navigate(['/login']);
  }


  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    console.log('modo oscuro' + this.darkModeService.darkMode);

  }

  onClickLogoutUser() {
    localStorage.removeItem('user_token');
    this.router.navigate(['/login/user']);
  }

  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

}
