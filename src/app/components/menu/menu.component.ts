import { Component, inject } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  adminServicio = inject(AdministradoresService);
  router = inject(Router)


  onClickLogout() {
    localStorage.removeItem('admin_token');
    this.router.navigate(['/login']);
  }


}
