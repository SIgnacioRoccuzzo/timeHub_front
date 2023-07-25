import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/interfaces/administrador.interface';
import { AdministradoresService } from 'src/app/services/administradores.service';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.css']
})
export class PerfilAdministradorComponent {
  administradoresService = inject(AdministradoresService)
  activatedRoute = inject(ActivatedRoute)
  private router: Router;

  timer: Date
  administrador: Administrador




  constructor() {
    this.router = new Router()
    this.timer = new Date();
    this.administrador = {
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      rol: '',

    }
  }

  async ngOnInit() {
    this.administrador = await this.administradoresService.getByprofile();
    console.log(this.administrador)

  }

}


