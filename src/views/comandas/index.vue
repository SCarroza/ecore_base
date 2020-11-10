<template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:[`item.estado`]="{ item }">
        <v-chip
          :color="getColor(item.estado)"
          dark
        >
          {{ item.estado }}
        </v-chip>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-btn
          depressed
          color="primary"
          @click="test(item)"
        >
          Ver Comanda
        </v-btn>
      </template>
    </v-data-table>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'

@Component({
    name: 'comandas'
})
export default class extends Mixins(Utils) {
    private headers = [
        {
          text: 'Número de comanda',
          align: 'start',
          value: 'nroComanda',
        },
        { text: 'Número de Cliente', value: 'nroCliente' },
        { text: 'Nombre de Cliente', value: 'nombreCliente' },
        { text: 'Dirección Cliente', value: 'dirCliente' },
        { text: 'Estado Pedido', value: 'estado' },
        { text: 'Acciones', value: 'action' },
    ]
    private  desserts = [
        {
          nroComanda: 1,
          nroCliente: '+569 123456789',
          nombreCliente: 'Juan Espinoza',
          dirCliente: 'Calle 123',
          estado: 'En Espera',
        },
        {
          nroComanda: 2,
          nroCliente: '+569 123456789',
          nombreCliente: 'Pedro Ruminot',
          dirCliente: 'Calle 321',
          estado: 'En Cocina',
        },
        {
          nroComanda: 3,
          nroCliente: '+569 123456789',
          nombreCliente: 'Dante Suazo',
          dirCliente: 'Calle 456',
          estado: 'En Camino',
        },
        {
          nroComanda: 4,
          nroCliente: '+569 123456789',
          nombreCliente: 'Romina Callao',
          dirCliente: 'Calle 789',
          estado: 'Finalizado',
        },
        {
          nroComanda: 5,
          nroCliente: '+569 123456789',
          nombreCliente: 'Sebastián Ortega',
          dirCliente: 'Calle 789',
          estado: 'Cancelado',
        },
    ]

    private getColor (estado: string) {
      if (estado == 'En Espera') return 'red'
      else if (estado == 'En Cocina') return 'orange'
      else if (estado == 'En Camino') return 'yellow'
      else if (estado == 'Finalizado') return 'green'
      else return 'blue'
    }

    private(item: string){
        console.log(item)
    }
}
</script>