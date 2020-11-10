<template>
    <div>
        <app-bar />
        <app-drawer />
        <app-main />
        <app-footer />
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import { AppMain, AppBar, AppDrawer, AppFooter } from './components'

@Component({
    name: 'Layout',
    components: {
        AppMain,
        AppBar,
        AppDrawer,
        AppFooter
    }
})
export default class extends Mixins(Utils){

}


</script>