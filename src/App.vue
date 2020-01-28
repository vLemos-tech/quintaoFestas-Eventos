<template>
  <v-app>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> 
    <NavBar />
    <Swiper />
  </v-app>
</template>

<script>
import Swiper from './components/Swiper';
import NavBar from './components/NavBar'
export default {
  name: 'App',

  components: {
    Swiper,
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>
