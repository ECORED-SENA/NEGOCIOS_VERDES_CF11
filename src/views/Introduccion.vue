<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-md-10
        p.mb-5 La sociedad en los últimos años ha tenido grandes cambios en la cultura financiera, experimenta un rápido crecimiento por parte de la población mundial, y los mercados cada vez se hacen más exigentes, está ocasionando que muchas de las personas obtengan conocimientos e inviertan tiempo y dinero para mejorar sus utilidades.    
    
    .Beff01  
      .row.justify-content-center.position-relative
        .col-md-10
          .BG30.p-4.br01.mb-5
            p.mb-0 La economía se preocupa, precisamente de la manera en que se administran unos recursos escasos, con el objetivo de producir diversos bienes y distribuidos para el consumo entre los miembros de la sociedad. La economía se ocupa de las cuestiones que se generan en relación con la satisfacción de las necesidades de los individuos y de la sociedad (Mochón, 1990).

        .col-10.col-md-8
          figure.mb-4
            img(src='@/assets/curso/intro/img01.svg', alt='La economía')

          p.mb-4 Eso quiere decir que la economía está en función de los consumidores y debe tomar decisiones a la hora satisfacer las necesidades.

        .col-lg-10
          .row.align-items-center.justify-content-center
            .col-4.col-md-2.PLr01
              figure
                img(src='@/assets/curso/intro/img02.svg', alt='')
            .col-md-9
              .bordCont01.br01.p-3.PL01.BG11
                p.mb-0 Es importante tomar decisiones realistas para que los recursos alcancen y logren acomodarse a las necesidades con más prioridad. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
