import * as Flummox from 'flummox'

const { Actions, Store } = Flummox

const firstSithId = 3616
const host = 'http://localhost:3000'
const resource = 'dark-jedis'

export class SithActions extends Actions {
  async createSiths() {
    const firstSith = await this.fetchSith({ id: firstSithId })

    return firstSith
  }

  async fetchSith({ id, url }) {
    let response = null

    if (id) {
      response = await fetch(`${host}/${resource}/${id}`)
    } else if (url) {
      response = await fetch(url)
    }

    const json = await response.json()
    return json
  }

  async updateSith(data) {
    return data
  }
}

export class SithStore extends Store {
  register: any
  state: any
  setState: any

  constructor(flux) {
    super(); // Don't forget this step

    const sithActionIds = flux.getActionIds('sith')
    // this.register(sithActionIds.updateSith, this.updateSith)
    this.register(sithActionIds.fetchSith, this.pushSith)
    this.register(sithActionIds.loadSith, this.loadSith)

    this.state = { siths: [] }
  }

  createSiths(sith) {
    this.setState({ siths: [ sith ] })
  }

  pushSith(sith) {
    console.log('pushSith', sith)
    this.setState({ siths: this.state.siths.concat([ sith ]) })
  }
}
