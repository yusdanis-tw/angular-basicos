import { Component, Input } from '@angular/core'
import { Personaje } from '../intercaces/dbz.interfaces'
import { DbzService } from '../services/dgz.service'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get personajes() {
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) {}
}
