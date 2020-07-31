import Vue from 'vue'
import { AwaitController, Await } from './Await'

const $await = new AwaitController()

export default class AwaitWrapper {
  static install() {
    Vue.component('Await', Await)
    Vue.prototype.$await = $await
  }
}

export { $await, Await, AwaitController }
