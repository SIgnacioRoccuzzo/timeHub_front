import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './pages/usuarios/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { RegistroComponent } from './pages/administradores/registro/registro.component';
import { LoginComponent } from './pages/administradores/login/login.component';

import { LoginAdminGuard } from './guards/login-admin.guards';
import { InicioComponent } from './components/inicio/inicio.component';

import { loginGuard, loginGuardUser } from './guards/login.guards';
import { LoginUsuariosComponent } from './pages/usuarios/login-usuarios/login-usuarios.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';
import { ListaProyectosComponent } from './pages/administradores/lista-proyectos/lista-proyectos.component';


const routes: Routes = [
  { path: 'login/user', component: LoginUsuariosComponent },
  { path: 'usuarios/nuevo', component: NuevoUsuarioComponent, canActivate: [loginGuard] },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [loginGuard] },
  { path: 'proyectos', component: ListaProyectosComponent, canActivate: [loginGuard] },
  { path: 'usuarios/perfil', component: PerfilComponent, canActivate: [loginGuardUser] },
  { path: 'usuarios/editar/:usuarioId', component: EditarUsuarioComponent, canActivate: [loginGuard] },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'login', component: LoginComponent,
    canActivate: [LoginAdminGuard]
  },
  { path: '', component: InicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }