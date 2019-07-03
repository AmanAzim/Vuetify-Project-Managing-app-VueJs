<template>
    <nav>
        <v-toolbar app>
           <v-toolbar-side-icon v-on:click="openDrawer=!openDrawer"></v-toolbar-side-icon>
           <v-toolbar-title>
               <span class="font-weight-light">Todo</span>
               <span>Vuetify</span>
           </v-toolbar-title>
            <v-spacer></v-spacer>{{/*It is going to create space between these two elements*/}}

           <v-menu offset-y>{{/*offset-y will prevent the button to hide while clicking*/}}
               <template v-slot:activator="{ on }">
                   <v-btn flat color="primary" dark v-on="on">
                       <v-icon left>expand_more</v-icon>
                       <span>Menu</span>
                   </v-btn>
               </template>
               <v-list>
                   <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
                       <v-list-tile-title>{{link.text}}</v-list-tile-title>
                   </v-list-tile>
               </v-list>
           </v-menu>

           <v-btn flat color="gray">
               <span>Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
           </v-btn>
        </v-toolbar>

        <v-navigation-drawer app class="primary" v-model="openDrawer">
           <v-layout column align-center>
               <v-flex class="mt-5">
                   <v-avatar size="100">
                       <img src="/avatar-2.png">
                   </v-avatar>
                   <p class="white--text subheading mt-1 ml-4">Aman</p>
               </v-flex>
               <v-flex class="mt-4 mb-3">
                   <Popup/>
               </v-flex>
           </v-layout>
           <v-list>
               <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" >{{/*This is how we make "route-link" */}}
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
        name: "Navbar",
        components:{
            Popup,
        },
        data(){
            return {
                openDrawer:false,
                links:[
                    { icon: 'dashboard', text: 'Dashboard', route: '/' },
                    { icon: 'folder', text: 'My Projects', route: '/projects' },
                    { icon: 'person', text: 'Team', route: '/team' },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
