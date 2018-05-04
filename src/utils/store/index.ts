import * as Flummox from 'flummox'
import { PlanetActions, PlanetStore } from './planet'
import { SithActions, SithStore } from './sith'

const { Flux } = Flummox

class AppStore extends Flux {
  createActions: any
  createStore: any

  constructor() {
    super()

    this.createActions('planet', PlanetActions)
    this.createStore('planet', PlanetStore, this)

    this.createActions('sith', SithActions)
    this.createStore('sith', SithStore, this)
  }
}

const store = new AppStore()

window.store = store

export default store
