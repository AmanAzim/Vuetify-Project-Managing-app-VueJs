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
                   <v-btn flat class="success mx-0 mt-3" v-on:click.prevent="submit">Add Project</v-btn>
               </v-form>
           </v-card-text>
       </v-card>
   </v-dialog>
</template>

<script>
    export default {
        name: "Popup",
        data(){
            return {
                title:'',
                content:'',
            }
        },
        methods:{
            submit(){
                console.log(this.title+' '+this.content);
            }
        }
    }
</script>

<style scoped>

</style>
