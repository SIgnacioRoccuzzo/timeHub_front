import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {
  ahora = new Date();
  horas: any
  minutos: any
  segundos: any
  año: any
  mes: any
  dia: any


  obtenerHoraFechaActual(): string {
    this.ahora = new Date();

    // Obtenemos la hora
    this.horas = String(this.ahora.getHours()).padStart(2, '0');
    this.minutos = String(this.ahora.getMinutes()).padStart(2, '0');
    this.segundos = String(this.ahora.getSeconds()).padStart(2, '0');

    // Obtenemos la fecha
    this.año = this.ahora.getFullYear();
    this.mes = String(this.ahora.getMonth() + 1).padStart(2, '0');
    this.dia = String(this.ahora.getDate()).padStart(2, '0');

    // Creamos la cadena de hora y fecha
    const horaFecha = `${this.horas}:${this.minutos}:${this.segundos} - ${this.año}-${this.mes}-${this.dia}`;

    return horaFecha;
  }

  registrarHoraEntrada() {
    const horaFecha = this.obtenerHoraFechaActual();

    console.log(horaFecha)
  }

  registrarHoraSalida() {
    const horaFecha = this.obtenerHoraFechaActual();
    console.log(horaFecha)
  }
}



/*toggleTimer($event: any) {
  this.horas_dedicadas = $event.target.value
  this.activatedRoute.params.subscribe(async params => {
    const horasTrabajadas = await this.usuariosService.getbyDate(params['idUsuario'], this.horas_dedicadas);
    this.registros = horasTrabajadas[0].horas_dedicadas

  })
  */




