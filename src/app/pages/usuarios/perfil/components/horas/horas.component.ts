import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroHorasService } from 'src/app/services/registro-horas.service';
import { UserProyecto } from 'src/app/interfaces/userProyecto.interface';


@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {


  private interval: any;
  private tiempoTotal = 0;
  pausado: boolean = true;
  registrosHoras: UserProyecto[] = [];
  //Services
  registroService = inject(RegistroHorasService);
  activatedRoute = inject(ActivatedRoute);


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

  ngOnInit(): void {
    const date = new Date();
    const idUsuario = this.activatedRoute.snapshot.params['idUsuario'];
    this.getRegistrosByDate(date, idUsuario);
    this.startContador();
  }


  private startContador(): void {
    this.interval = setInterval(() => {
      if (!this.pausado) {
        this.tiempoTotal += 1;
      }
    }, 1000);
  }


  togglePausa(): void {
    this.pausado = !this.pausado;
  }

  getTiempoTotal(): string {
    const segundos = this.tiempoTotal % 60;
    const minutos = Math.floor(this.tiempoTotal / 60) % 60;
    const horas = Math.floor(this.tiempoTotal / 3600);

    return `${this.formatTime(horas)}:${this.formatTime(minutos)}:${this.formatTime(segundos)}`;
  }

  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }

  async getRegistrosByDate(date: Date, idUsuario: number): Promise<void> {
    try {
      this.registrosHoras = await this.registroService.getByDate(idUsuario, date);
    } catch (error) {
      console.log('Error al obtener los registros de horas', error);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}




