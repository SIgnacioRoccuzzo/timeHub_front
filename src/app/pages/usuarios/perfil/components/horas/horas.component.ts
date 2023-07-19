import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {

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




