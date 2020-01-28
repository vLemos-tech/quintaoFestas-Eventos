<template>
  <div>
    <v-app-bar dark elevate-on-scroll class="header__fundo">
      <!-- <v-toolbar-title>Logo Aqui</v-toolbar-title> -->
      <div>
        <v-img
          width="6em"
          src="./../assets/img/logo.png"
          alt="Quintão Festas e Eventos"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text>Início</v-btn>
      <v-btn text>Bolos</v-btn>
      <v-btn text>Doces</v-btn>
      <v-btn text>Festas</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.header__fundo {
  background-color: $marrom !important
}
</style>
