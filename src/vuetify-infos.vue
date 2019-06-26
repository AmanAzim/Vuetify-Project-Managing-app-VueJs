<template>
    <div class="dashboard">
        <h1 class="display-3 subheading grey--text">Home</h1>
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
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm12 md6 >
                    <v-btn outline block color="teal">1</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outline block color="teal">2</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outline block color="teal">2</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outline block color="teal">2</v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-center>
                <v-flex xs4 md3>
                    <v-btn outline block color="success">1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn outline block color="success">1</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>


    export default {
        components: {

        }
    }
</script>
