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


}


/*toggleTimer($event: any) {
  this.horas_dedicadas = $event.target.value
  this.activatedRoute.params.subscribe(async params => {
    const horasTrabajadas = await this.usuariosService.getbyDate(params['idUsuario'], this.horas_dedicadas);
    this.registros = horasTrabajadas[0].horas_dedicadas

  })
  */




