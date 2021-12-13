<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.titulo-principal__numero span
  color: white !important
.titulo-principal__numero
  background-color: #2A81A5
.titulo-segundo:after
  border-left-color: #2A81A5 !important
.curso-main-container > .container
  overflow-x: clip !important
</style>
