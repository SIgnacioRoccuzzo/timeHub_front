import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode
  }
}
