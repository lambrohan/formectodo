<template>
  <nav>
    <v-toolbar flat app>
      <!-- Side Nav Icon -->
      <v-toolbar-side-icon class="grey--text" @click="drawer = !(drawer)"></v-toolbar-side-icon>
      <!-- Title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Formec</span>
        <span>Work</span>
      </v-toolbar-title>
      <!-- spacer to space out -->
      <v-spacer></v-spacer>
      <!-- Button -->
      <Popup @projectAdded="snackbar = true"/>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>
    
    <!-- Side Nav Drawer -->
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex  class="mt-2">
          <v-container>
            <v-avatar size="100">
            <img src="https://placekitten.com/400/400" >
          </v-avatar>
          </v-container>
          <p class="white--text subheading text-xs-center text-uppercase">Itachi Uchiha</p>
          
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" >
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup';
export default {
  name:'navbar',
  components:{Popup},
  data(){
    return{
      drawer:false,
      links:[
         { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
      snackbar: false
    }
  }
  
}
</script>
