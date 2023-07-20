import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';;
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  proyectosService = inject(ProyectosService)
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)

  nombresProyectos: any[] = []
  registros: any[] = []
  nombre: any
  horasDedicadas: any[] = []
  fecha: any[] = []
  idProyecto: number = 0
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  barChartType: ChartType = 'bar';
  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  async ngOnInit() {
    const proyectos = await this.proyectosService.getProyectos()
    console.log(proyectos)
    for (let proyecto of proyectos) {
      this.nombresProyectos.push(proyecto.nombre)
    }
    console.log(this.nombresProyectos)




  }
  async cambioProyecto($event: any) {
    this.idProyecto = $event.target.value
    console.log('id proyecto', this.idProyecto)

    this.registros = await this.proyectosService.getRegistro(5, this.idProyecto, 7)
    console.log(this.registros)
    for (let registro of this.registros) {
      /*  this.nombreProyecto.push(registro.proyecto) */
      this.fecha.push(dayjs(registro.fecha).format('DD'))
      this.horasDedicadas.push(registro.horas_dedicadas)
      this.nombre = registro.nombre



      this.barChartData = {
        labels: this.fecha,
        datasets: [
          { data: this.horasDedicadas, label: this.nombre },
        ]
      };

    }


  }


  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }








}
