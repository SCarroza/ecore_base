// eslint-disable-next-line
import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators'
// import { Usuario } from '@/utils/SessionInterfaces'

@Module({
  namespaced: true,
  name: 'SessionModule',
  stateFactory: true,
})
export default class SessionModule extends VuexModule {
  auth = true


  get isAuth() {
    return this.auth
  }

  /* @Mutation
  setExample(payload: boolean) {
    this.example = payload
  }

  @Action({commit: 'setItem'})
  actionExample() {
      if (this.example) {
        return 'respuesta'
      }
  }

  @MutationAction
    public async updateEmail(newEmail: string): Promise<object> {
        return {email: newEmail}
    }*/
}