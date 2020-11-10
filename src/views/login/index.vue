<template>
        <v-container fluid>
        <v-row class="pa-5 ma-5">
        <v-col cols="12">
            <v-row
            align="center"
            justify="center"
            class="pa-5 ma-5"
            >
                <v-card class="elevation-12 mt-5">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                    <v-text-field
                        label="Nombre"
                        prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                        label="Contraseña"
                        type="password"
                        prepend-inner-icon="mdi-lock"
                    ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  color="primary" to="/dashboard">Iniciar Sesión</v-btn>
                </v-card-actions>
                </v-card>
                    </v-row>
        </v-col>
        </v-row>
    </v-container>
</template>