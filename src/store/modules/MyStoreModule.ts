// store/modules/MyStoreModule.ts
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
//import { getModule } from 'vuex-module-decorators'
//import store from '@/store'
// import user from '@/store/modules/user'
// const UserModule = getModule(user, store)
 
@Module({
  name: 'MyStoreModule',
  namespaced: true,
  stateFactory: true,
})
export default class MyStoreModule extends VuexModule {
  public test = 'initial'
 
  @Mutation
  public setTest(val: string) {
    this.test = val
  }
}