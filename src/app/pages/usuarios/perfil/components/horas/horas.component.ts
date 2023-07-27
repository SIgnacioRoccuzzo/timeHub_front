import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import * as dayjs from 'dayjs';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {
  registroForm: FormGroup;

  nombresProyectos: any;
  idProyectos: any[] = []
  proyectos: Proyecto[] = []
  usuarios_id: any;
  fecha_inicio: any;
  fecha_fin: any;
  horasTotalesSemana: any;
  horasPorContrato: number = 40;




  //Services
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  proyectosService = inject(ProyectosService)

  constructor() {

    this.registroForm = new FormGroup({
      proyectos_id: new FormControl(null, [
        Validators.required
      ]),
      hora_entrada: new FormControl(null, [
        Validators.required, Validators.pattern(/^(?:[01]\d|2[0-3]):[0-5]\d$/)
      ]),
      hora_salida: new FormControl(null, [
        Validators.required, Validators.pattern(/^(?:[01]\d|2[0-3]):[0-5]\d$/)
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ])

    })

  }

  /*
  Una zona de reporte de horas semanales para el que el trabajador vea si cumple con las horas semanales pactadas por contrato, o bien va por encima o por debajo de las mismas.
   */

  ngOnInit() {
    this.cargarProyectos();

    this.cargarFechas()
  }

  async cargarFechas() {
    try {

      this.usuarios_id = await this.usuariosService.getByprofile();
      console.log(this.usuarios_id)
      if (!this.usuarios_id || !this.fecha_inicio || !this.fecha_fin) {
        console.log('Falta información para cargar las fechas.');
        return;
      }

      const response = await this.usuariosService.getWeek(this.usuarios_id.id, this.fecha_inicio, this.fecha_fin);

      this.horasTotalesSemana = response.total_horas_semana
      console.log(this.horasTotalesSemana)
    } catch (error) {
      console.log('horas que no curraste')
    }
  }



  async cargarProyectos() {
    try {
      this.proyectos = await this.proyectosService.getProyectos();

      for (let proyecto of this.proyectos) {

        this.idProyectos.push(proyecto.id);
      }
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  }


  async onSubmit() {
    const response = await this.usuariosService.getRegistroHour(this.registroForm.value)

    if (!response.fatal) {
      Swal.fire({
        title: 'Success!',
        text: 'Se ha registrado tu jornada',
        icon: 'success'
      })
    }
  }

  obtenerHoraEntrada() {
    this.registroForm.controls['hora_entrada'].setValue(dayjs().format('HH:mm'))
  }
  obtenerHoraSalida() {
    this.registroForm.controls['hora_salida'].setValue(dayjs().format('HH:mm'))
  }


}












































