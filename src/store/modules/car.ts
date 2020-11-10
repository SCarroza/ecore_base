import { Module, VuexModule, Mutation, Action  } from 'vuex-module-decorators'
import { Car } from '../models'
import axios from 'axios'

@Module({
  namespaced: true,
  name: 'CarModule',
  stateFactory: true,
})
export default class CarModule extends VuexModule {
  car: Car  = {
    'wheels' : 0,
    'doors' : 0,
    'mark': '',
    'model': '',
    'type': '',
    'fuel': ''
  }
  item =  'hola'

  @Mutation
  setCar(car: Car) {
    this.car = car
  }
  @Mutation
  setItem(value: string) {
    console.log(value)
    this.item = value
  }

  @Action({commit: 'setItem'})
  fetchAll() {
    const resp = axios.get('https://pokeapi.co/api/v2/item/1')
      .then( response => {
        console.log(response.data.name)
        // return response.data.name
        return response.data.name
      })
      .catch( e => {
        console.log(e)
      })
      .finally( () => {
        console.log('finally')
      })
    return resp
  }

  get getItem() {
    return this.item
  }
  get getCar() {
    return this.car
  }

  get getWheels () {
    return this.car?.wheels
  }
}