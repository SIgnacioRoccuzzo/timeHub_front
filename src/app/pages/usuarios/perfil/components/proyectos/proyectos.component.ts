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
  idProyectos: any[] = []
  mes: any



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


    for (let proyecto of proyectos) {
      this.nombresProyectos.push(proyecto.nombre)
      this.idProyectos.push(proyecto.id)
      console.log(this.idProyectos)
    }



  }
  cambioMes($event: any) {
    this.mes = $event.target.value

  }
  async cambioProyecto($event: any) {
    const idProyecto = $event.target.value
    console.log('id proyecto', idProyecto)

    this.activatedRoute.params.subscribe(async params => {
      this.registros = await this.proyectosService.getRegistro(params['idUsuario'], idProyecto, this.mes)
      console.log('params', params['idUsuario'])
    })

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

    this.horasDedicadas = []
    this.fecha = []

    console.log('mes', this.mes)
  }


  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }








}
