<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { inject } from '@angular/core';
=======
import { Component, inject } from '@angular/core';
>>>>>>> 05f0322167ebf95668d62047993581b89376a8f1
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [50, 50, 50, 51, 50, 50, 50], label: 'Proyecto 1' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Proyecto 2' }
    ]
  };
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }

  //Services
  usuariosService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute)

  timerActive: boolean = false;
  registros: any[] = [];
  horas_dedicadas: number = 0;


  toggleTimer($event: any) {
    this.horas_dedicadas = $event.target.value;
    this.activatedRoute.params.subscribe(async params => {
      const horasTrabajadas = await this.usuariosService.getbyDate(params['idUsuario'], this.horas_dedicadas);
      if (horasTrabajadas && horasTrabajadas.length > 0) {
        this.registros = horasTrabajadas[0].horas_dedicadas;
      } else {
        console.log('No se encontraron horas trabajadas.');
      }
    });

  }

  //Services
  usuariosService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute)

  timerActive: boolean = false;
  registros: any[] = [];
  horas_dedicadas: number = 0;


  toggleTimer($event: any) {
    this.horas_dedicadas = $event.target.value;
    this.activatedRoute.params.subscribe(async params => {
      const horasTrabajadas = await this.usuariosService.getbyDate(params['idUsuario'], this.horas_dedicadas);
      if (horasTrabajadas && horasTrabajadas.length > 0) {
        this.registros = horasTrabajadas[0].horas_dedicadas;
      } else {
        console.log('No se encontraron horas trabajadas.');
      }
    });

  }

}


/*toggleTimer($event: any) {
  this.horas_dedicadas = $event.target.value
  this.activatedRoute.params.subscribe(async params => {
    const horasTrabajadas = await this.usuariosService.getbyDate(params['idUsuario'], this.horas_dedicadas);
    this.registros = horasTrabajadas[0].horas_dedicadas

  })
  */




