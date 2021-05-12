<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="blue" dark>Click me</v-btn>
    <v-btn plain color="pink">click me</v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon small left>mdi-email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email me</span>
      <v-icon large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon small>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
