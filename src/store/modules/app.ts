import { Module, VuexModule, Mutation  } from 'vuex-module-decorators'
import { set } from '@/utils/vuex'

@Module({
  namespaced: true,
  name: 'AppModule',
  stateFactory: true,
})
export default class AppModule extends VuexModule {
  drawer = false
  color = 'success'
  // image = 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg'
  image = ''

  @Mutation
  setDrawer(payload: boolean) {
    this.drawer = payload
  }
  @Mutation
  setImage() {
    set('image')
  }
  @Mutation
  setColor() {
    set('color')
  }
  @Mutation
  toggleDrawer() {
    this.drawer = !this.drawer
  }
}