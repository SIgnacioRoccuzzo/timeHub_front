import { Component, inject } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  usuariosService = inject(UsuariosService)
  adminServicio = inject(AdministradoresService);
  router = inject(Router)


  onClickLogout() {
    localStorage.removeItem('admin_token');
    this.router.navigate(['/login']);
  }

  onClickLogoutUser() {
    localStorage.removeItem('user_token');
    this.router.navigate(['/login/user']);
  }


}
