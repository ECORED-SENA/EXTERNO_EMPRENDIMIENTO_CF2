<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  El emprendedor joven

    .row
      .col-lg-5
        div(style="position:absolute;background-color: rgb(232, 232, 232);width: 42%;height:400px;z-index: 1;margin-left: -49px;margin-top: -21px;")
        figure(style="position:relative;z-index:2;")
          img(src="@/assets/curso/tema2/1.png")
      .col-lg-7(style="position:relative;z-index:2;")
        div.mt-4(style="background: rgb(18,104,191);background: linear-gradient(180deg, rgb(31 115 199) 84%, rgb(8 78 151) 99%, rgb(0 0 0) 100%, rgb(6 51 94) 100%, rgb(246, 244, 254) 100%);border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/6.svg" style="max-width:80px;margin-left:60px;margin-top:-10px;display:inline;")
          .p-4.text-center
            p.text-white(data-aos="fade-up") El emprendedor es una persona que se arriesga y que busca innovar para satisfacer una necesidad y generar una oportunidad de negocio o empresa. 
            p.mt-5(data-aos="fade-up") #[strong.text-white (Castillo, 1999)] &nbsp;&nbsp;&nbsp;&nbsp;#[span(style="background-color:#E2C13A;padding:3px 10px 3px 15px;") ]
        p.mt-4(data-aos="fade-up") Lo importante es entender que, así como #[strong el emprendimiento juvenil nace de una actitud, de un factor interno por innovar], existen características que enmarcan al emprendedor y que se hace necesario conocerlas para poder aplicarlas.

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_1 2.1 Características y competencias del emprendedor joven digital

    div(style="position:relative;")
      .row
        .col-lg-7
          p(data-aos="fade-up") #[strong El emprendedor joven  debe tener características personales que le permitan crecer y aprender en esa gran decisión de emprender]. Para apropiarse mejor de estos conceptos te invitamos a ver el siguiente video.

          .col-lg-11.m-auto.cont_caja2.mt-4
            .row(style="margin: 0")
              .col-lg-8.p-4
                h5.text-white(data-aos="fade-up") Características emprendedoras personales
                small.text-white(data-aos="fade-up") Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
              .col-lg-4.text-center(style="place-self:center")
                a.boton.color-acento-contenido(target="_blank" href="https://www.youtube.com/watch?v=8V-Vn04ynCs") Ver video
        .col-lg-5
          figure
            img.imagen_1(src="@/assets/curso/tema2/2.png" data-aos="fade-right" style="position: absolute;width: auto;bottom: -15px;right:-50px;")
      .row.mt-4.p-3(style="background-color:#E8EEF3;")
        .col-lg-7
          p.p-4(data-aos="fade-up" style="border-left:6px #26A69A solid;") Te has preguntado #[strong ¿qué capacidades necesita un emprendedor joven?], tal vez las primeras respuestas giran en torno a habilidades específicas de su idea, por ejemplo, si se trata de un emprendimiento de publicidad para empresas en redes sociales, seguramente lo primero que se nos ocurre son capacidades en diseño, fotografía, redacción y posiblemente en ventas, pero realmente #[strong el emprendedor joven requiere algo que va más allá y es el caso de las competencias emprendedoras].

    figure.mt-5
      img(src="@/assets/curso/tema2/3.png" data-aos="fade-up")
    .p-3.col-lg-11.m-auto(style="background: rgb(18,104,191);background: radial-gradient(circle, rgba(18,104,191,1) 0%, rgba(222,222,222,1) 0%, rgba(222,222,222,1) 95%, rgba(201,201,201,1) 100%, rgba(246,244,254,1) 100%);border-radius:15px;margin-top:-45px !important;z-index:1;position:relative;")
      p.mb-0.text-small(data-aos="fade-up") Empecemos definiendo el #[strong(style="color:#1565C0;") concepto de competencia], cuando hablamos de competencia #[strong nos referimos a actitudes, conocimientos y habilidades para realizar una tarea o alcanzar un objetivo, es decir, que no solamente es conocer, sino que también hay que desarrollar habilidades prácticas y tener actitudes correctas para desarrollar una habilidad] (Servicio Nacional de Aprendizaje SENA, s. f.). Revisa el recurso propuesto y profundiza en las competencias emprendedoras.

    .caja_loca(style="position:relative")
      .row.mt-5
        .col-md-4
          .tarjeta.tarjeta-flip
            .indicador--hover
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/9.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;")
                figure.text-center
                  img(src="@/assets/curso/tema2/4.svg" style="display:inline;max-width:100px;")
                h4.mt-3.text-center Visualizar
                p.text-center Cuando eres emprendedor joven podrás visualizar los diferentes objetivos individuales y sus interrelaciones, valorando sentimientos y conocimientos previos de acuerdo con la realidad que rodea tu emprendimiento y enfocarte en ello. 
        .col-md-4
          .tarjeta.tarjeta-flip
            .indicador--hover
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/10.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;")
                figure.text-center
                  img(src="@/assets/curso/tema2/5.svg" style="display:inline;max-width:100px;")
                h4.mt-3.text-center Identificar
                p.text-center Las limitaciones externas y propias de un emprendedor jóven, siempre existen, lo que implica la necesidad de generar alternativas y opciones para tomar el mejor camino, de acuerdo con la situación.
        .col-md-4
          .tarjeta.tarjeta-flip
            .indicador--hover
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/11.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;")
                figure.text-center
                  img(src="@/assets/curso/tema2/6.svg" style="display:inline;max-width:100px;")
                h4.mt-3.text-center Decidir
                p.text-center Siempre llega el momento de decidir qué hacer, es decir, tomar una decisión combinando la necesidad de tomarla con las presiones y el contexto. El emprendedor joven interviene además en la evaluación del riesgo y búsqueda de medios para reducirlo.

      .row.m-auto.justify-content-center
        .col-md-4
          .tarjeta.tarjeta-flip
            .indicador--hover
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/12.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;")
                figure.text-center
                  img(src="@/assets/curso/tema2/7.svg" style="display:inline;max-width:100px;")
                h4.mt-3.text-center Diseñar
                p.text-center Está orientado al  “cómo hacerlo”, muchas veces es el obstáculo para el joven emprendedor, pero tranquilo esto puede superarse con un enfoque creativo, se puede reducir tiempo y esfuerzo, además de ser más efectivo, es decir, realmente ser estratégicos.
        .col-md-4
          .tarjeta.tarjeta-flip
            .indicador--hover
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/13.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;")
                figure.text-center
                  img(src="@/assets/curso/tema2/8.svg" style="display:inline;max-width:100px;")
                h4.mt-3.text-center Actuar
                p.text-center Para un emprendedor joven actuar se refiere a transformar las estrategias en acciones, es decir, “actuar”, “hacer”, uniendo activamente a la persona con el proyecto. Dejar el plano del pensamiento “aterrizado” en la concreción.

    Separador

    .titulo-segundo.mt-5
      h2#t_2_2 2.2 La responsabilidad del emprendedor joven

    .cont_caja3.p-4.cont_caja_loca.pb-5(style="position:relative")
      .row(style="z-index:2;position:relative")
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/14.png")
        .col-lg-8
          p(data-aos="fade-up") #[strong La responsabilidad para un emprendedor joven es un aspecto importante a tener en cuenta en todo lo que una persona se propone, ya que el emprendedor debe autogestionarse y comprometerse consigo mismo en la consecución de resultados]. Un instrumento interesante que permite entender la importancia de la responsabilidad es el triángulo de la responsabilidad.
          p.mt-4(data-aos="fade-up") El triángulo está compuesto por  tres vértices:

          .row.mt-5
            .col-lg-4
              .p-3.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;height:100%;")
                figure.text-center
                  img(src="@/assets/curso/tema2/16.svg" style="display:inline;max-width:100px;")
                h6.mt-3.text-center Personas
                p.text-center Son las características que definen tus fortalezas y debilidades.
            .col-lg-4
              .p-3.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;height:100%;")
                figure.text-center
                  img(src="@/assets/curso/tema2/17.svg" style="display:inline;max-width:100px;")
                h6.mt-3.text-center Proyecto
                p.text-center Son los objetivos que te propones cumplir a futuro.
            .col-lg-4
              .p-3.bg-white(style="box-shadow: 0px 0px 10px #dddddd;border-bottom: 7px #0878ab solid;height:100%;")
                figure.text-center
                  img(src="@/assets/curso/tema2/18.svg" style="display:inline;max-width:100px;")
                h6.mt-3.text-center Situación
                p.text-center Es el contexto en el que te encuentras para cumplir con tus proyectos.

      .row.mt-5
        .col-lg-8
          p(data-aos="fade-up") Pero #[strong el triángulo no estaría completo sino unimos los vértices, la persona y el proyecto se conectan a través del pensar], pues es la base para generar ideas u objetivos, la persona se conecta con la situación a través del sentir, sus emociones juegan un papel importante en el cumplimiento de tus sueños, #[strong(style="color:#26A69A;") la situación se conecta con el proyecto a través del actuar pues eres capaz de llevar tu sueño a la acción cuando reconoces tu entorno y lo relaciones con tus objetivos].
          .cajon.color-acento-contenido.p-4.mt-4
            p(data-aos="fade-up") Como vemos el pensar, sentir y actuar son acciones propias del ser humano y gestionarlas de manera responsable está en tus manos llevándote a transformar poderosamente tu vida y tu entorno.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/19.png" data-aos="fade-right")

    Separador

    .titulo-segundo.mt-5
      h2#t_2_3 2.3 Habilidades del siglo XXI para el emprendedor (UNESCO)

    .row.caja_gradiente(style="position:relative")
      .col-lg-4
        img.imagen_1(src="@/assets/curso/tema2/20.png" data-aos="fade-left" style="position:absolute;z-index:2;width: auto;top: -74px;left: -37px;")
      .col-lg-8
        div.p-4(style="position:relative;")
          p(data-aos="fade-up" style="position:relative;z-index:2;") Sin duda alguna #[strong un emprendedor joven es una persona en constante reinvención y debe tener la disposición para desarrollar habilidades conforme a la humanidad vaya avanzando], por ejemplo si hiciéramos un análisis de lo que sucedía hace unos 20 años escuchar la palabra community manager era algo que no tenía sentido, pero hoy es un término común, lo que nos lleva a pensar que las personas han tenido que desarrollar habilidades para poder ejercer esa labor y por supuesto #[strong(style="color:#21999A") los emprendedores para integrar las habilidades de ese cargo a sus emprendimientos y planeaciones, reconocer la importancia de las redes sociales y la creación de contenido].

    .p-3.caja_mas_loca
      p.text-center.mt-5(data-aos="fade-up") #[strong Según la Unión Europea], las habilidades que debe tener un emprendedor son (Vargas, 2015):

      .row.mt-4.col-lg-10.m-auto
        .col-lg-7
          ul.lista-ul
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Comunicación:] Tanto en la lengua materna como en una extranjera
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Matemáticas:] Desarrollan un pensamiento lógico
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Ciencia y tecnología:] Reconocer el entorno y sus avances es de gran ayuda
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Habilidades sociales y cívicas:] Las buenas relaciones son claves para un emprendedor
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Habilidad digital:] A la medida de lo necesario y del aprendizaje para el emprendedor
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] #[strong Aprender a aprender:] Vital para poder adaptarse a los cambios, aprender todo el tiempo
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] Sentido de iniciativa y espíritu de empresa
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-layer-group(style="color:#039BE5;")] Conciencia y expresión culturales
        .col-lg-5
          figure.text-center
            img(src="@/assets/curso/tema2/21.png" data-aos="fade-right" style="display:inline;")
      .col-11.m-auto.mt-5
        .row
          .col-lg-6
            p.mb-0(data-aos="fade-up") Así mismo la #[strong UNESCO] mencionan las siguientes capacidades para el emprendedor (Lindner, 2021):
            .cajon.color-acento-contenido.p-4.mt-4
              p.mb-0(data-aos="fade-up") Es probable que a veces se piense que es mucho lo que se necesita, pero hay que tener calma y entender que todo es un proceso y que las habilidades se van desarrollando en el transcurso del proceso.
          .col-lg-6
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Comprobar mis propios potenciales
                  h5.mb-0(style="color:#dedede;") 01
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Detectar oportunidades
                  h5.mb-0(style="color:#dedede;") 02
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Generar ideas valiosas
                  h5.mb-0(style="color:#dedede;") 03
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Detectar y evitar riesgos
                  h5.mb-0(style="color:#dedede;") 04
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Conocer los recursos necesarios
                  h5.mb-0(style="color:#dedede;") 05
              .tarjeta.bg-white(style="box-shadow:0px 0px 5px rgba(0,0,0,.3);height:100%;")
                .row.justify-content-center.p-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/23.svg" style="max-width:70px;display:inline")
                  p.mt-2.text-small.text-center Llevar las ideas a la práctica
                  h5.mb-0(style="color:#dedede;") 06


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_caja
  background: url("../assets/curso/tema1/2.svg")
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.cont_caja2
  background: url("../assets/curso/tema1/3.png")
  background-repeat: no-repeat
  background-size: 100% 100%
.cont_caja_4
  background: url("../assets/curso/tema1/20.png")
  background-repeat: no-repeat
  background-size: 100% 100%
.cont_caja3
  background: url("../assets/curso/tema2/15.svg")
  background-repeat: no-repeat
  background-size: cover
  background-position: center
@media (max-width: 1000px)
  .imagen_1
    position: relative !important
.tarjeta-flip__img
  border-radius: 50px !important
.caja_loca:before
  content: ''
  background-color: #12263F
  position: absolute
  width: 78%
  z-index: 0
  left: 10%
  height: 50%
  box-shadow: 0px 0px 10px rgba(0,0,0, 50%)
  top: 25%
.cont_caja_loca:before
  content: ''
  background-color: #E8E8E8
  position: absolute
  width: 90%
  z-index: 0
  left: 10%
  height: 50%
  top: 0%
.caja_gradientee:before
  content: ''
  background: rgb(246,244,254)
  background: linear-gradient(59deg, rgba(246,244,254,1) 0%, rgba(222,222,222,1) 5%, rgba(255,255,255,1) 52%, rgba(222,222,222,1) 74%, rgba(201,201,201,1) 98%)
  position: absolute
  width: 90%
  z-index: 0
  left: 10%
  height: 50%
  top: 0%
.caja_gradiente
  background: rgb(246,244,254)
  background: linear-gradient(179deg, #f6f4fe 0%, #dedede 5%, white 52%, #dedede 74%, #cbcbcb 98%)
  border-radius: 30px
.caja_mas_loca
  background: url("../assets/curso/tema2/22.svg")
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
