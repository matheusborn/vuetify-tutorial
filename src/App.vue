<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-4 mx-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  })
};
</script>

<style>
#app {
  background: #f5f5f5;
}
</style>
