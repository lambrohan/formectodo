<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">New project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Create new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="info" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
           <v-menu  :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <v-text-field slot="activator" :rules="inputRules" label="Due date" prepend-icon="event" :value="formattedDate" >

            </v-text-field>
            <v-date-picker v-model="due" > </v-date-picker>
      </v-menu>
          <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Create</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import firebase from '../firebase/firebase';

export default {
  data(){
    return{
      title:'',
      content:'',
      due:null,
      loading:false,
      dialog:false,
      inputRules:[
        v => v.length > 0 || "cannot be empty"
      ]
    }
  },
  methods:{
    submit() {
     if(this.$refs.form.validate()){
       this.loading = true;
       const project = {
         title:this.title,
         content:this.content,
         due:format(this.due,'ddd, Do MMM YYYY'),
         person:'Itachi',
         status:'ongoing'
       }
       const db = firebase.firestore();
       db.collection('projects').add(project)
       .then(()=>{
         this.loading = false;
         this.clear();
         this.dialog = false;
         this.$emit('projectAdded');
       })
     }
    },

    clear () {
        this.$refs.form.reset()
      }
  },
  computed:{
    formattedDate(){
      return this.due ? format(this.due,'ddd, Do MMM YYYY') : '';
    }
  }
  
}
</script>

