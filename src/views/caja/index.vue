<template>
    <div class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                sm="6"
              >
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-text-field
                  label="Número de Pedido"
                  placeholder="15"
                  outlined
                  readonly
                  ></v-text-field>
                  <v-text-field
                  label="Nombre del Cliente"
                  placeholder="Juan Espinoza"
                  outlined
                  readonly
                  ></v-text-field>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-text-field
                    label="Número Cliente"
                    placeholder="+569 123456789"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Dirección"
                    placeholder="Calle 123"
                    outlined
                  ></v-text-field>
                </v-card>
              </v-col>
            
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-row no-gutters>
                <v-col
                    cols="12"
                    sm="3"
                    class="pt-5"
                >
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      sm="12"
                    >
                      <v-btn depressed>
                          Ver Promociones
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="pt-5">
                    <v-col
                      cols="12"
                      sm="12"
                    >
                      <v-btn depressed>
                          Emitir Delivery
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="pt-5 pb-4">  
                    <v-col
                      cols="12"
                      sm="12"
                    >
                      <v-btn depressed>
                          Emitir Comanda
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                        class="mx-2"
                        label="Observaciones"
                        rows="5"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="3"
                >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                    <v-row no-gutters>
                        <v-col
                            cols="12"
                            sm="12"
                        >
                            <v-btn depressed small>
                                Anular Pedido
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col
                          cols="12"
                          sm="12"
                          class="pt-5"
                        >
                            <v-btn depressed small>
                                Metodo de Pago
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col
                        cols="12"
                        sm="12"
                        class="pt-5 pb-8"
                        >
                          <v-btn depressed small>
                            Pedido Finalizado
                          </v-btn>
                      </v-col>
                    </v-row>
                    
                    </v-card>
                </v-col>
            </v-row>
          </v-card>
        </v-col>
       
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
            <v-card
                class="pa-2"
                outlined
                tile
            >
                <v-input
                :messages="['Total Productos']"
                >
                </v-input>
                <v-input
                :messages="['Total Promociones']"
                >
                </v-input>
                <v-input
                :messages="['Total a Pagar']"
                >
                </v-input>
            </v-card>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="8"
        >
          <v-card
            outlined
            tile
          >
            <v-toolbar
                dark
                color="primary"
            >
            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-home-variant</v-icon>
            </v-btn>
            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
              <v-autocomplete
                :items="carta"
                prepend-icon="mdi-magnify"
              ></v-autocomplete>
            </v-toolbar>
            <v-card
                class="pa-2"
                outlined
                tile
            >
              <v-breadcrumbs
                  :items="items"
                  divider="-"
              ></v-breadcrumbs>
                <v-row no-gutters>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Sushi
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Fajitas
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Sándwichs
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Quesadillas
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row no-gutters class="pt-5">
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Chorrillana
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Papa Fritas
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Nachos
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Bebidas
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row no-gutters class="pt-5">
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Salsas
                        </v-btn>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="3"
                    >
                        <v-btn
                            tile
                            color="primary"
                            >
                            <v-icon left>
                                mdi-pencil
                            </v-icon>
                            Agregados
                        </v-btn>
                    </v-col>
                </v-row>
            
            </v-card>
          </v-card>
        </v-col>
       
      </v-row>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'

@Component({
    name: 'caja'
})
export default class extends Mixins(Utils) {
    private headers = [
        {
          text: 'Cant',
          align: 'start',
          sortable: false,
          value: 'cant',
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Total', value: 'total' },
        { text: 'Acciones', value: 'act' },
    ]
    private desserts = [
        {
          cant: '1',
          name: 'Handroll',
          total: '$2.500',
          act: 'X'
        },
    ]
    private items = [
        {
          text: 'Carta',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
    ]
    private carta = ['Sushi', 'Fajitas', 'Sándwichs', 'Quesadillas', 'Chorrillana', 'Papa Fritas', 'Nachos', 'Bebidas', 'Salsas', 'Agregados']
}
</script>