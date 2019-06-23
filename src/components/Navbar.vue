<template>
    <nav>
        <v-toolbar app>
           <v-toolbar-side-icon v-on:click="openDrawer=!openDrawer"></v-toolbar-side-icon>
           <v-toolbar-title>
               <span class="font-weight-light">Todo</span>
               <span>Aman</span>
           </v-toolbar-title>
            <v-spacer></v-spacer>{{/*It is going to create space between these two elements*/}}
           <v-btn flat color="gray">
               <span>Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
           </v-btn>
        </v-toolbar>
        <v-navigation-drawer app class="primary" v-model="openDrawer">
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
    export default {
        name: "Navbar",
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
