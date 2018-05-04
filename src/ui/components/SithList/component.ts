import Component, { tracked } from '@glimmer/component';
import store from '../../../utils/store'

export default class SithList extends Component {
  @tracked siths = []
  sithStore = null

  constructor(options) {
    super(options)
    this.sithStore = store.getStore('sith')
  }

  didInsertElement() {
    this.sithStore.addListener('change', () => {
      this.siths = this.sithStore.state.siths
    })

    store.getActions('sith').createSiths()
  }
}
