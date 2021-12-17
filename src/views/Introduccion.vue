<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
        .col-lg-8
          .bloque-texto-a__texto.p-4(style="background-color:rgba(255,255,255,.95)")
            p(data-aos="fade-up") #[strong Emprender es una oportunidad para muchas personas y a la vez un reto, en algunos casos muchos desean tomar el riesgo porque tienen una gran idea, pero no saben por dónde empezar]. En otros casos desconocen si tienen el perfil para hacerlo o cuales son las habilidades que deben desarrollar. Por eso queremos darte la bienvenida a este componente denominado “las Competencias del joven emprendedor” donde podrás encontrar elementos importantes sobre el emprendimiento, el emprendedor, el entorno, entre otros para comprender cuáles son sus habilidades como emprendedor, cuales debe desarrollar y además encontrar las actividades económicas en las cuales pueda desarrollar un emprendimiento. #[strong(style="color:#26A69A") Te invitamos a vivir esta experiencia, reflexionar y tomar la decisión de ser un emprendedor joven del siglo XXI].


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.bloque-texto-a.color-secundario:before
  background-color: #12263F
.bloque-texto-a.color-secundario
  background-color: #F6F6F6
.bloque-texto-a
  background: url("../assets/curso/introduccion/1.svg")
  background-repeat: no-repeat
  background-position-y: -33px
  background-size: contain
</style>
