import * as Flummox from 'flummox'

const { Actions, Store } = Flummox

export class PlanetActions extends Actions {
  async updatePlanet(data) {
    return data
  }
}

export class PlanetStore extends Store {
  register: any
  state: any
  setState: any

  constructor(flux) {
    super(); // Don't forget this step

    const planetActionIds = flux.getActionIds('planet')
    this.register(planetActionIds.updatePlanet, this.updatePlanet)

    this.state = { planet: {} }
  }

  updatePlanet(planet) {
    console.log('update planet', planet)
    this.setState({ planet: this.state.planet = planet })
  }
}
