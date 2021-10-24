<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Economía
    
    .row.justify-content-center
      .col-md-8
        figure.mb-4
          img(src='@/assets/curso/tema1/img01.jpg', alt='Economía')
        
        p.mb-4 Este término se deriva del término griego #[i “oikos”] que significa “casa” o lugar donde se vive y la terminación okonos que designa “administración de la casa” (Smith, 1776).

        .bloque-texto-e.color-primario.BG11.br01.p-4.mb-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada. 
            h4 (Smith, 1776)
            i.fas.fa-quote-right

        p.mb-0 En otras palabras, se dice que la economía es planificar y administrar de forma correcta los recursos para satisfacer al máximo necesidades de la población global.

        separador
    
    #t1_1.titulo-segundo
      h2 1.1 Bien económico
    
    .row
      .col-md-10
        .row.BG30.p-4.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Un bien económico es todo aquello que satisface una necesidad y es obtenido en el mercado pagando un precio, este puede ser materiales o  inmateriales; este término es usado para nombrar elementos  de gran utilidad para los que lo poseen.
          .col-md-4
            figure.PTr01
              img(src='@/assets/curso/tema1/img02.svg', alt='Economía')
    
    separador
    
    #t1_2.titulo-segundo
      h2 1.2 Tipos de bienes
    
    .row.justify-content-center.mb-5
      .col-lg-6.BG11.br01.p-3
        p.mb-0.text-center En el siguiente recurso se pueden revisar los tipos de bienes.
    
    TabsA.color-secundario.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes de consumo")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes de consumo
            p.mb-0 Son los que nos satisfacen ciertas necesidades y a su vez se dividen en bienes duraderos, referenciamos aquellos que pueden ser usados más de una vez prestando un servicio durante un tiempo prolongado. Bienes no durables son los que denominamos perecederos y tienden agotarse con el uso.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img03.svg', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes de capital")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes de capital
            p.mb-0 Son aquellos bienes que necesitan combinar una serie de elementos para generar productos finales, en otras palabras, son los que requieren inversión de capital de la empresa.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img04.svg', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes libres")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes libres
            p.mb-0 Son aquellos bienes que son ilimitados y no presentan escasez, de estos nadie puede ser excluido y no representan un costo para ser obtenidos.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img05.svg', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes económicos")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes económicos
            p.mb-0 Un bien económico es todo aquel objeto o servicio que, además de satisfacer una necesidad humana, se adquiere en el mercado a través de un pago o contraprestación. Un bien económico y también un bien escaso significa que no es ilimitado y que, por tanto, se puede acabar, por eso tiene un precio.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img06.svg', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes intermedios")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes intermedios
            p.mb-0 Son aquellos que necesitan de transformación para poderse convertir en un bien de consumo, son conocidos comúnmente como materias primas.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img07.svg', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes finales")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Bienes finales
            p.mb-0 Son aquellos que no necesitan ningún tipo de transformación para ser aptos y usados por el consumidor final.
          .col-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img08.svg', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-6.BG11.br01.p-3
        p.mb-0.text-center En la tabla 1 se presentan algunos ejemplos de tipos de bienes:
    
    .row.justify-content-center
      .col-lg-8

        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Tipos de bienes

        table.TableP01
          thead
            tr.CellC01
              td
                h4.mb-0.text-center Tipo de bienes
              td
                h4.mb-0.text-center Ejemplos
          tbody
            tr
              th
                h4 Según su carácter
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Bienes libres
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Bienes económicos
              td
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 El aire
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 El agua potable
            tr
              th
                h4 Según su naturaleza
                p Bienes de consumo
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Duraderos
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 No duraderos
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Bienes de capital
              td
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Un coche
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Una bebida
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Una máquina excavadora
            tr
              th
                h4 Según su función
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Bienes intermedios
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Bienes finales
              td
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 El algodón para realizar textiles
                  li 
                    i.fas.fa-angle-right
                    p.mb-0 Una camiseta

</template>

<script>
export default {
  name: 'Tema1',
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
