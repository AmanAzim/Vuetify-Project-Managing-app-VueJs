<template>
   <v-dialog max-width="600px">
       <template v-slot:activator="{ on }">
           <v-btn flat class="success" dark v-on="on">
               Add new project
           </v-btn>
       </template>
       <v-card>
           <v-card-title >
               <h2>Add a new project</h2>
           </v-card-title>
           <v-card-text>
               <v-form class="px-3">
                   <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                   <v-textarea label="Content" v-model="content" prepend-icon="edit"></v-textarea>
                   <v-menu>
                       <template v-slot:activator="{ on }">
                           <v-text-field v-bind:value="formattedDate"
                                         label="Due date"
                                         prepend-icon="date_range"
                                         readonly
                                         v-on="on" >
                           </v-text-field>
                       </template>
                       <v-date-picker v-model="due" @input="menu2 = false"></v-date-picker>
                   </v-menu>
                   <v-btn flat class="success mx-0 mt-3" v-on:click.prevent="submit">Add Project</v-btn>
               </v-form>
           </v-card-text>
       </v-card>
   </v-dialog>
</template>

<script>
    import format from 'date-fns/format'
    export default {
        name: "Popup",
        data(){
            return {
                title:'',
                content:'',
                due:null
            }
        },
        methods:{
            submit(){
                console.log(this.title+' '+this.content);
            }
        },
        computed:{
            formattedDate(){
                return this.due? format(this.due, 'Do MMM YYYY'):'';
            }
        }
    }
</script>

<style scoped>

</style>
