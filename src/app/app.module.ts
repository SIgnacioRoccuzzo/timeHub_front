import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './pages/usuarios/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';
import { RegistroComponent } from './pages/administradores/registro/registro.component';
import { LoginComponent } from './pages/administradores/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DatosPerfilComponent } from './pages/usuarios/perfil/components/datos-perfil/datos-perfil.component';
import { ProyectosComponent } from './pages/usuarios/perfil/components/proyectos/proyectos.component';
import { HorasComponent } from './pages/usuarios/perfil/components/horas/horas.component';
import { NgChartsModule } from 'ng2-charts';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    PerfilComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    DatosPerfilComponent,
    ProyectosComponent,
    HorasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
