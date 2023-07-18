import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';

const routes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: '/usuarios/:usuarioId', component: PerfilComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
