
import axios from 'axios'
import { VuexModule, Module, Action, Mutation  } from 'vuex-module-decorators'
import { UserSubmit, UserResponse, User } from '../models'

export const baseApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export function setJWT(jwt: string) {
  baseApi.defaults.headers.common["Authorization"] = `Token ${jwt}`
}

export function clearJWT(){
  delete baseApi.defaults.headers.common["Authorization"]
}

export async function loginUser(user: UserSubmit ){
  /*
    try {
    //return await axios.post('', {
    //  user
    //})
    // or
    const response = await axios.post('', {
      user
    })
    return (response.data as UserResponse).user
  } catch (e) {
    console.error(e)
  }*/ 
  //or
  await baseApi.get('pokemon/ditto')
    .then(response => {
      // return (response.data as UserResponse).user
      console.log(user)
      console.log(response.data.abilities[0].ability.name)
      return response.data.abilities[0].ability.name
    })
    .catch(error => {
      console.log('error')
      console.error(error)
      return { email: 'email', token: 'token', username: 'username'}
    })
    .finally( () => {
      console.log('finally')
    })
  // return (response.data as UserResponse).user
}

@Module({
  namespaced: true,
  name: 'ApiModule',
  stateFactory: true
})
export default class ApiModule extends VuexModule {

}
