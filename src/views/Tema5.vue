<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Formatos comerciales
    
    .row.justify-content-center.mb-5
      .col-md-10
        figure.mb-4
          img(src='@/assets/curso/tema5/img01.jpg', alt='Formatos comerciales')

        p Cuando se habla de formatos comerciales inmediatamente se debe pensar que se hace referencia a un lugar o sitios donde son puestos productos de consumo para que sean adquiridos por el público en general.
    
    .row.justify-content-center.mb-5
      .col-lg-6.BG11.br01.p-3
        p.mb-0.text-center Los formatos comerciales se clasifican de la siguiente manera:
    
    .row.justify-content-center.mb-5.gx-4
      .col-9.col-md-4.mb-4.mb-md-0
        .BG00.bRTFullR.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/tema5/img02.png', alt='')
          h3.text-center Comercio físico
          p.mb-0 Que son los que necesitan de un espacio determinado para realizar la exhibición de los productos.
      
      .col-9.col-md-4
        .BG00.bRTFullR.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/tema5/img03.png', alt='')
          h3.text-center Comercio sin presencia física 
          p.mb-0 Acá es donde se incluye el comercio electrónico, ventas por internet, por televisión o por llamadas telefónicas.
      
    separador
    
    #t5_1.titulo-segundo
      h2 5.1 Formatos comerciales físicos

    .row.justify-content-center.align-items-center.m-4
      .col-md-6.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema5/img04.jpg', alt='')        
      .col-md-6
        p Como se mencionó anteriormente son aquellos que requieren una estructura física para su funcionamiento, algunos de estos se especializan en un solo producto y otros ofrecen gran variedad de bienes y servicios para todos los gustos, capacidades económicas, moda, entre otras, en este grupo se encuentran los siguientes:
        ul.lista-ul--color.mb-0
          li 
            i.lista-ul__vineta
            | Centros comerciales.
          li 
            i.lista-ul__vineta
            | Hipermercados.
          li 
            i.lista-ul__vineta
            | Mercados de abastos.
          li 
            i.lista-ul__vineta
            | Supermercados.
          li 
            i.lista-ul__vineta
            | Tiendas de barrio.
          li 
            i.lista-ul__vineta
            | Tiendas de descuento.
          li 
            i.lista-ul__vineta
            | Tiendas locales.
    
    separador

    #t5_2.titulo-segundo
      h2 5.2 Formatos comerciales sin presencia física

    .row.justify-content-center.mb-4 
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.BG30.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img05.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Comúnmente llamado comercio electrónico y se puede definir como el proceso de compra y venta por medio de dispositivos electrónicos. En los últimos años este creció a pasos agigantados y, en cierto modo, está logrando desplazar a las tiendas tradicionales.  Los beneficios que esta modalidad ofrece son innumerables dentro de los que se encuentran:
      
    h3.text-center.mb-4 Beneficios del comercio electrónico

    .row.justify-content-center.align-items-stretch.mb-3
      .col-md-3.mb-4.mb-md-0.BG2o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center Alcance global
      .col-md-7.BG10.p-3
        p.mb-0 La tienda física es geográficamente limitada y el comercio electrónico no presenta este tipo de limitaciones por lo que se pueden realizar ventas a todo tipo de personas en cualquier parte del mundo.
    .row.justify-content-center.align-items-stretch.mb-3
      .col-md-3.mb-4.mb-md-0.BG1o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center Siempre abierto   
      .col-md-7.BG10.p-3
        p.mb-0 No tiene limitación de tiempo, los clientes pueden visualizar sus productos a cualquier día y hora ya que se encuentra abierta las 24 horas del día 365 días al año.
    .row.justify-content-center.align-items-stretch.mb-3
      .col-md-3.mb-4.mb-md-0.BG1o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center Ahorros en costos
      .col-md-7.BG10.p-3
        p.mb-0 No necesita de infraestructura ni costos de trabajadores y los costos operativos son bajos por lo que se hacen alta mente competitivas con los precios en el mercado.
    .row.justify-content-center.align-items-stretch.mb-3
      .col-md-3.mb-4.mb-md-0.BG1o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center Gestión automatizada del inventario 
      .col-md-7.BG10.p-3
        p.mb-0 En el mundo electrónico existen innumerables herramientas que permiten administrar el #[i stock] de forma fácil y sencilla.
    .row.justify-content-center.align-items-stretch.mb-3
      .col-md-3.mb-4.mb-md-0.BG1o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center #[i Marketing] dirigido
      .col-md-7.BG10.p-3
        p.mb-0 Permite realizar una base de datos de consumidores para hacer proyecciones de cuales productos se pueden ofrecer a  las personas adecuadas.
    .row.justify-content-center.align-items-stretch
      .col-md-3.mb-4.mb-md-0.BG2o.p-3.d-flex.align-items-center.justify-content-center
        h3.text-white.mb-0.text-center Dominio de mercado
      .col-md-7.BG10.p-3
        p.mb-0 Permite encontrar clientes ideales en un mercado global.
  
</template>

<script>
export default {
  name: 'Tema5',
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
