import { VuexModule, Module, Action, Mutation  } from 'vuex-module-decorators'
// import store from '@/store'
// eslint-disable-next-line
import { User, Profile, UserSubmit } from '../models'
// import { loginUser } from '../api'

@Module({
  namespaced: true,
  name: 'UserModule',
  stateFactory: true
})
export default class UserModule extends VuexModule {
  user: User | null = null
  profile: Profile | null = null
  test: string | null = null

  @Mutation
  setTest(test: string){
    this.test = test
  }

  get testName () {
    return this.test
  }
  @Action({commit: 'setTest' })
  login(UserSubmit: UserSubmit) {
    console.log(UserSubmit)
    // const user = await loginUser(UserSubmit)
    // const test = loginUser(UserSubmit)
    console.log(test)
    return test 
  }


}

// export default getModule(UserModule)