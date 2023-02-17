import { Component } from '@angular/core'
import { Personaje } from '../intercaces/dbz.interfaces'
import { DbzService } from '../services/dgz.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Yusdanis',
    poder: 14000,
  }

  constructor() {}
}
