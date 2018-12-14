<template>
  <div class="login">
    
    <v-container>
      
    <v-layout row wrap>
      <v-flex xs12 md6>
         <v-container>
           <h1 class="display-4 amber--text mt-4">Signup</h1>
            <h3 class="white--text subheading mt-4 ">or go back to <v-btn class="info"><router-link to="/login">login</router-link></v-btn> page. </h3>
         </v-container>
         <h3></h3>
      </v-flex>
      <v-flex xs12 md6>
         <v-card class="pa-3 mt-4">
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules"  label="Name" required ></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
             <v-text-field type="password" v-model="password" :rules="nameRules" label="Password" required :counter="6"></v-text-field>
            <v-btn :disabled="!valid" @click="submit" class="mt-4 primary">submit</v-btn>
            <v-btn @click="clear"  class="mt-4">clear</v-btn>
          </v-form>
         </v-card>
      </v-flex>

    </v-layout>
  </v-container>
  </div> 
</template>



<script>

export default {
  data : () => ({
    valid:true,
    name:'',
    nameRules: [
      v => !!v || 'required',
    ],
    email:'',
    emailRules:[
      v => !!v || 'required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password:'',
    
  }),
  methods : {
    submit () {
      if(valid){

      }
    },
    clear () {
        this.$refs.form.reset()
      }
  }
};
</script>

<style>
.login{
  background-color: #9652ff ;
  height: 100%;
}
</style>

 