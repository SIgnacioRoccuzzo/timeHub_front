import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  usuariosService = inject(UsuariosService);
  adminServicio = inject(AdministradoresService);

  router = inject(Router)
  title = inject(Title)
  isHomePage: boolean = false;

  constructor() {
    this.title.setTitle('Inicio')
    this.router.events.subscribe((val) => {

      if (val instanceof NavigationEnd) {
        console.log(this.router.url);

        if (this.router.url === '/') {
          this.isHomePage = true
        } else {
          this.isHomePage = false
        }
      }

    })
  }

}
