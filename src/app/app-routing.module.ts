import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';
import { NuevoUsuarioComponent } from './pages/usuarios/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { RegistroComponent } from './pages/administradores/registro/registro.component';
import { LoginComponent } from './pages/administradores/login/login.component';

import { LoginAdminGuard } from './guards/login-admin.guards';
import { InicioComponent } from './components/inicio/inicio.component';

import { loginGuard, loginGuardUser } from './guards/login.guards';
import { LoginUsuariosComponent } from './pages/usuarios/login-usuarios/login-usuarios.component';


const routes: Routes = [
  { path: 'usuarios/nuevo', component: NuevoUsuarioComponent, canActivate: [loginGuard] },
  { path: 'login/user', component: LoginUsuariosComponent },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [loginGuard] },
  { path: 'usuarios/perfil', component: PerfilComponent },
  { path: 'usuarios/editar/:idUsuario', component: EditarUsuarioComponent, canActivate: [loginGuard] },
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
