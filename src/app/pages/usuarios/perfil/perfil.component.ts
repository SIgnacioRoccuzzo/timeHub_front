
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {


}




/* async cambioHora() {
  const fecha = '2023-07-17'
  this.activatedRoute.params.subscribe(async params =>
    this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha))
  console.log('proyecto', this.proyecto)
*/


