<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row class="my-5">
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="75" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left >message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    name:'team',
    data(){
      return{
        team:[
          {name:'Man',role:'Graphics A-Z',avatar:'https://placekitten.com/200/200'},
          {name: 'Itachi', role:'General, Akatsuki',avatar:'https://placekitten.com/400/400'},
          {name:'Kousei Arima',role:'Child Prodigy',avatar:'https://placekitten.com/300/300'}
        ]
      }
    }
  }
</script>
