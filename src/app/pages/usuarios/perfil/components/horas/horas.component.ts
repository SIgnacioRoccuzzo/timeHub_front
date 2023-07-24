import { Component } from '@angular/core';




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




