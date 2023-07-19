import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';
import { NuevoUsuarioComponent } from './pages/usuarios/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { RegistroComponent } from './pages/administradores/registro/registro.component';
import { LoginComponent } from './pages/administradores/login/login.component';

const routes: Routes = [
  { path: 'usuarios/nuevo', component: NuevoUsuarioComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/:idUsuario', component: PerfilComponent },
<<<<<<< HEAD
  { path: 'usuarios/editar/:idUsuario', component: EditarUsuarioComponent },
=======
>>>>>>> feature/perfil_usuario
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios/editar/:idUsuario', component: EditarUsuarioComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
