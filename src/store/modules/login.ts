import { Module, VuexModule, Mutation, } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'LoginModule',
  stateFactory: true,
})
export default class Login extends VuexModule {
  component = 'login-form'


  get currentComponent() {
    return this.component
  }

  @Mutation
  setComponent(payload: string) {
    this.component = payload
  }

}