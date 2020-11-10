<template>
    <div class="pr-2 pl-2">
        <div class="v-picker__title primary">
            <div class="v-time-picker-title">
                <div class="v-time-picker-title__time">
                    <div class="v-picker__title__btn">
                        22
                    </div>
                    <span>-</span>
                    <div class="v-picker__title__btn">
                        10
                    </div>
                    <span>-</span>
                    <div class="v-picker__title__btn v-picker__title__btn">
                        2020
                    </div>
                </div>
            </div>
        </div>
        <v-time-picker
            use-seconds
            style="display:none"
        ></v-time-picker>
    </div>
</template>

<script lang="ts">
//Todo: Crear una validación cuando no se traiga la data en el prop
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'

@Component
export default class Clock extends Mixins(Utils) {
  moment = require('moment');
  interval = 0
  picker = ''
  hour = ''
  minute = ''
  second = ''
  extra = ''


  mounted() {
    this.initTime()
    this.intervalo()
  }

  intervalo() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
        this.initTime()
    }, 1000)
  }

  initTime() {
    this.hour = this.moment().format('hh')
    this.minute = this.moment().format('mm')
    this.second = this.moment().format('ss')
    this.extra = this.moment().format('A')
  }
}

</script>

<style scoped>
    .v-time-picker-title__time .v-picker__title__btn, .v-time-picker-title__time span {
        font-size: 40px !important;
    }
    .v-time-picker-title__ampm{
        font-size: 10px !important;
    }
    .v-picker__title {
        padding: 0px !important;
    }
</style>