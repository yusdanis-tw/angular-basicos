import { Injectable } from '@angular/core'
import { Personaje } from '../intercaces/dbz.interfaces'

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 75000,
    },
  ]

  get personajes(): Personaje[] {
    return [...this._personajes]
  }
  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje)
  }
}
