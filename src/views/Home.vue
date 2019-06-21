<template>
  <div class="home">
    <h1 class="display-3">Home</h1>
    <v-btn class="pink white--text">Click</v-btn>
    <v-btn dark depressed color="pink">Click</v-btn>
    <v-btn flat color="pink">Click</v-btn>
    <v-btn small class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn large class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn fab small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
    <hr>
    <v-btn class="hidden-sm-and-down">Click 1</v-btn>
    <v-btn class="hidden-sm-only">Click 2</v-btn>
  </div>
</template>

<script>


  export default {
    components: {

    }
  }
</script>
