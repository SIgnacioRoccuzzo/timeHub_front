import { Component, inject } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  private darkModeService = inject(DarkModeService);


  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

}







