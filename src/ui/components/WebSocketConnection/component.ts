import Component, { tracked } from '@glimmer/component'
import store from '../../../utils/store'

export default class WebSocketConnection extends Component {
  @tracked currentMessage = {}
  ws = null

  didInsertElement() {
    this.ws = new WebSocket('ws://localhost:4000')
    this.ws.onmessage = this.updateCurrentMessage.bind(this)
  }

  updateCurrentMessage({ data }) {
    this.currentMessage = JSON.parse(data)
    store.getActions('planet').updatePlanet(this.currentMessage)
  }
}
