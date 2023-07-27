import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { SendmailService } from 'src/app/services/sendmail.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css']
})
export class DatosPerfilComponent {
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)


  sendMailService = inject(SendmailService)

  timer: Date
  usuario: Usuario
  proyecto: Proyecto[] = []

  fecha: any


  constructor() {

    this.timer = new Date();
    this.usuario = {
      id: 0,
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      password: '',
      telefono: '',
      fecha_alta: this.timer,
      estado: true,
      departamento: ''
    }


    // conseguir fecha de hoy
    this.fecha = new Date()
  }

  async ngOnInit() {

    this.usuario = await this.usuariosService.getByprofile();
    console.log(this.usuario)

    // conseguir id de usuario
    console.log(this.usuario.id);

    // conseguir fecha de hoy
    this.fecha = new Date();
    const fechaNueva = dayjs(this.fecha).format('YYYY-MM-DD');
    console.log(fechaNueva);

    // mandar id y fecha como parametros
    const hora = await this.usuariosService.getSumHora(this.usuario.id, fechaNueva)

    // ya me devuelve la hora dedicada
    console.log(hora.sum);
    const horas_dedicadas = hora.sum

    // conseguir mail del usuario
    console.log(this.usuario.email);
    const correo = this.usuario.email

    if (horas_dedicadas > 8) {
      const res = await this.sendMailService.sendMail(correo);
      console.log(res);
    }

  }

}












