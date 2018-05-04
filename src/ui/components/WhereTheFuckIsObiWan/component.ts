import Component, { tracked } from '@glimmer/component'
import store from '../../../utils/store'

export default class WhereTheFuckIsObiWan extends Component {
  @tracked planet = {}
  planetStore = null

  constructor(options) {
    super(options)
    this.planetStore = store.getStore('planet')
  }

  didInsertElement() {
    this.planetStore.addListener('change', () => {
      this.planet = this.planetStore.state.planet
    })
  }
}
