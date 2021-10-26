<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Canales de distribución
    
    .row.justify-content-center.mb-5
      .col-md-10
        figure.mb-4
          img(src='@/assets/curso/tema6/img01.jpg', alt='Canales de distribución')

        p
         | Los canales de comercialización pueden ser considerados como conjuntos de organizaciones interdependientes que intervienen en el proceso para que un producto o servicio esté disponible para el consumo.
         br
         br
         | Así, el canal de distribución se puede definir como el conjunto de actividades económicas, por medio del cual el fabricante pone sus productos o servicios directa o indirectamente en manos del consumidor final.
    
    .row.justify-content-center.mb-5
      .col-lg-6.BG11.br01.p-3
        p.mb-0.text-center Los canales de distribución se dividen en dos clases, a saber: 
    
    .row.justify-content-center.mb-5.gx-5
      .col-md-4.mb-4.mb-md-0
        .BG111.p-4.br01.h-100
          h3.p-3.mb-4.text-center Canal propio o directo
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema6/img02.svg', alt='')
          p.mb-0 La misma empresa fabricante es quien se encarga de llevar su producto al cliente final sin intermediarios. Por lo tanto, no delega procesos de almacenaje, transporte o atención al consumidor. Por ejemplo, la compañía de productos HP se encarga de la distribución de sus propios productos.
      .col-md-4.mb-4.mb-md-0
        .BG333.p-4.br01.h-100
          h3.p-3.b-4.text-center Canal externo o indirecto
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema6/img03.svg', alt='')
          p.mb-0 La distribución y comercialización es realizada por empresas distintas a la productora. El proceso de distribución es el negocio en sí mismo, dando lugar a la aparición de agentes intermediarios.
    
    .row.justify-content-center
      .col-lg-6.BG11.br01.p-3.mb-5
        p.mb-0.text-center La estructuración de los diferentes canales es la siguiente.
      
      .col-md-10.col-lg-8.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          p.mb-0 La estructuración de los diferentes canales
        figure.mb-5
          img(src='@/assets/curso/tema6/img04.svg', alt='')
          figcaption Nota. Tomada de Orellana (2021).
        
        p.mb-4 Por consiguiente, se puede afirmar que la logística y los canales de distribución son una de las actividades con mayor importancia de la empresa, ya que un mal manejo de estas podría llevar al fracaso total de la misma, pues no se garantiza la distribución eficiente y eficaz de los productos, en pocas palabras no se conseguiría el objetivo principal de la empresa: hacer que sus productos lleguen a manos del consumidor final en las mejores condiciones.
    
        .BG00.p-4
          p.mb-4 A la hora de elegir el canal de distribución más propicio las empresas o fabricantes deben plantearse algunas preguntas que darán como respuesta el canal más adecuado.

          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0
              ul.lista-ul--color.mb-0
                li 
                  i.lista-ul__vineta
                  | ¿Qué control se efectúa sobre los productos?
                li 
                  i.lista-ul__vineta
                  | ¿A qué sitios se quiere llegar?
                li 
                  i.lista-ul__vineta
                  | ¿Se intervendrá sobre la fijación final del precio?
                li 
                  i.lista-ul__vineta
                  | ¿Se intervendrá en todas las actividades promocionales?
                li 
                  i.lista-ul__vineta
                  | ¿Se cuenta con capacidad financiera?
                li 
                  i.lista-ul__vineta
                  | ¿Se tiene un gran equipo comercial?
                li 
                  i.lista-ul__vineta
                  | ¿Existe la posibilidad de competir internacionalmente?
                li 
                  i.lista-ul__vineta
                  | ¿Cuál es la infraestructura logística?
                li 
                  i.lista-ul__vineta
                  | ¿Qué grado de información se requiere?
                li 
                  i.lista-ul__vineta
                  | ¿Se desea estar en el mercado los 365 días y las 24 horas?
            
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema6/img05.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema6',
  components: {},
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

<style lang="sass" scoped></style>
