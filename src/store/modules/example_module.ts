import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'ExampleModule',
  stateFactory: true,
})
export default class ExmapleModule extends VuexModule {
  example = false
  public email!: string;


  get isExample() {
    return this.example
  }

  @Mutation
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
    }
}