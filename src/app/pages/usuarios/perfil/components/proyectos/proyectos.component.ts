import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  proyectosService = inject(ProyectosService)
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)

  registros: any[] = []
  nombreProyecto: any[] = []
  horasDedicadas: any[] = []
  fecha: string = ''
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
    this.registros = await this.proyectosService.getRegistro(5, 7)
    console.log(this.registros)
    for (let registro of this.registros) {
      this.horasDedicadas.push(registro.horas_dedicadas)
    }
    console.log('horas', this.horasDedicadas);

    this.barChartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      datasets: [
        { data: this.horasDedicadas, label: '1' },
        { data: this.horasDedicadas, label: '2' }
      ]
    };


  }


  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 8),
      Math.round(Math.random() * 8),
      Math.round(Math.random() * 8)];

    this.chart?.update();
  }






}
