<template>
  <div class="projects">
    <h1 class="subheading grey--text">This is an projects page</h1>

    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content v-for="(item,i) in items" :key="i">
        <template v-slot:header>
          <div>Item</div>
        </template>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-container class="my-5">
      content
    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        panel:'',
        item:[]
      }
    }
  }
</script>
