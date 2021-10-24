<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Perfil del cliente
    
    .row.justify-content-center
      .col-md-10
        figure.mb-4
          img(src='@/assets/curso/tema3/img01.jpg', alt='Perfil del cliente')
        
        .row.justify-content-center.PTr01
          .col-md-10
            p.BG30.br01.p-3.mb-4 
              | Un perfil de cliente a veces denominado perfil de consumidor es un documento que enumera los puntos débiles, los intereses, los patrones de compra y las características demográficas de los clientes de una empresa.
              br
              br
              | Crear un perfil de cliente puede ayudar a ejecutar mejores campañas de marketing que, a su vez, aumentan las ganancias. Con toda esa información útil, se puede decidir qué estrategia implementar y cuáles evitar.
    
    separador
    
    #t3_1.titulo-segundo
      h2 3.1 Cliente
    
    .row.justify-content-center
    
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.BG10.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img02.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Aquí se debe referenciar que es un individuo o compañía que compra servicios ofrecidos por una empresa, ya sea para su uso o para que los use otra persona; sin dudarlo es hacia los clientes donde las empresas enfocan sus estrategias de marketing.
      
        .cajon.color-primario.BG10.p-2.mb-5
          .row.justify-content-center.align-items-center.m-4
            .col-md-9.mb-4.mb-md-0
              .h5 Cliente y su valor dentro de la empresa
              p.mb-0 Para las empresas los clientes son el principal objetivo, y es ahí donde se encuentran enfocadas todas las estrategias para generar beneficios a corto o largo plazo, en relación con lo anterior se puede decir que las empresas centran sus esfuerzos para atraer clientes buscando ser prósperos y tener ventajas para competir.
            .col-8.col-md-3
              figure.PTr01
                img(src='@/assets/curso/tema3/img03.svg', alt='')
        
        .cajon.color-acento-contenido.BG30.p-2.mb-5.mTN01
          .row.justify-content-center.align-items-center.m-4
            .col-md-9.mb-4.mb-md-0
              .h5 Cliente meta
              p.mb-0 Es alguien que logra encajar perfectamente en el negocio y que va acorde con la necesidad que pueda atender; además, debe llevar valores agregados, como una relación de respeto mutuo tanto para usted como para el personal que labora.
            .col-8.col-md-3
              figure.PTr01
                img(src='@/assets/curso/tema3/img04.svg', alt='')
      
    h3 Clasificación y segmentación de los clientes

    p.mb-4 Todos los clientes tienen un valor diferente determinado por el tiempo que se dedica y la inversión hecha, a veces es necesario interponer esfuerzos e invertir recursos buscando lealtad en ellos. Por lo general, el esfuerzo hecho para atraer un cliente nuevo es mucho mayor que mantener uno ya existente y por tal motivo se clasifica de la siguiente manera: 

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Según el estatus")
        .row.justify-content-center
          .col-10
            h4.mb-4 Según el estatus
            .BG111.p-4.bRLF.mb-4
              .row.justify-content-center
                .col-3.col-md-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img05.svg', alt='')
                .col-11
                  h4 Clientes actuales
                  p.mb-0 Son entes o individuos que realizan compras periódicamente, son los que hacen que se mantenga su negocio.
            
            .BG333.p-4.bRLF.mb-4
              .row.justify-content-center
                .col-3.col-md-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img06.svg', alt='')
                .col-11
                  h4 Clientes activos
                  p.mb-0 Son los que realizan compras frecuentemente, estos dependen de los productos ofrecidos por la empresa.
            
            .BG111.p-4.bRLF.mb-4
              .row.justify-content-center
                .col-3.col-md-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img07.svg', alt='')
                .col-11
                  h4 Clientes inactivos
                  p.mb-0 Se catalogan a los clientes que en algún momento realizaron compras y en determinado momento vuelven hacerlo.
            
            .BG333.p-4.bRLF.mb-4
              .row.justify-content-center
                .col-3.col-md-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img08.svg', alt='')
                .col-11
                  h4 Clientes potenciales
                  p.mb-0 Este tipo de clientes, por lo general, tienen capacidad adquisitiva, demuestran interés por algún producto y en posiblemente puedan convertirse en generadores de ingresos para la empresa.
            
            .BG111.p-4.bRLF.mb-4
              .row.justify-content-center
                .col-3.col-md-1.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img09.svg', alt='')
                .col-11
                  h4 Clientes probables
                  p.mb-0 Son aquellos que no han realizado ninguna compra, tampoco muestran interés por algún producto pero por su perfil podrán convertirse en generadores de ingresos. 

      .py-3.py-md-4(titulo="Según volúmenes de venta")
        .row.justify-content-center.pt-5.gx-3
          .col-10.px-4.py-3
            .row.align-items-end.justify-content-center.BG30.bRTFBrdBtn
              .col-md-8.p-4
                h4 Clientes top
                p.mb-0 Son aquellos clientes que generan volúmenes de ventas por encima de las esperadas, en estos es donde deben estar concentrados todos nuestros esfuerzos haciendo inversiones de tiempo y dinero.
              .col-8.col-md-4.px-4
                figure.PTr01
                  img(src='@/assets/curso/tema3/img10.svg', alt='')
          
          .col-6.px-4.py-3
            .row.align-items-end.justify-content-center.BG30.bRTFBrdBtn.h-100
              .col-md-8.p-4
                h4 Clientes grandes
                p.mb-0 Son clientes que generan volúmenes significativos de ventas.
              .col-8.col-md-4.px-4
                figure.PTr01
                  img(src='@/assets/curso/tema3/img11.svg', alt='')
          
          .col-6.px-4.py-3
            .row.align-items-end.justify-content-center.BG30.bRTFBrdBtn
              .col-md-8.p-4
                h4 Clientes medianos
                p.mb-0 Son aquellos que producen volúmenes de ventas medianamente significativas.
              .col-8.col-md-4.px-4
                figure.PTr01
                  img(src='@/assets/curso/tema3/img12.svg', alt='')
          
          .col-6.px-4.py-3
            .row.align-items-end.justify-content-center.BG30.bRTFBrdBtn
              .col-md-8.p-4
                h4 Clientes bajos
                p.mb-0 Aquellos que las ventas son por debajo de las promediadas.
              .col-8.col-md-4.px-4
                figure.PTr01
                  img(src='@/assets/curso/tema3/img12.svg', alt='')

      .py-3.py-md-4(titulo="Según frecuencia de las compras")
        .row.justify-content-center.mb-5.gx-5
          .col-md-4.mb-4.mb-md-0
            .BG111.p-4.br01.h-100
              h3.p-3.mb-4.text-center Clientes frecuentes
              figure.mb-4
                img.w-50.mx-auto(src='@/assets/curso/tema3/img14.svg', alt='')
              p.mb-0 Son los clientes que debemos cuidar, el trato debe ser preferencial para que los niveles de compras no bajen.
          .col-md-4.mb-4.mb-md-0
            .BG333.p-4.br01.h-100
              h3.p-3.b-4.text-center Clientes habituales
              figure.mb-4
                img.w-50.mx-auto(src='@/assets/curso/tema3/img15.svg', alt='')
              p.mb-0 Tipo de cliente que hay que mantener con nivel de satisfacción alto para generar un aumento en la frecuencia.
          .col-md-4
            .BG111.p-4.br01.h-100
              h3.p-3.mb-4.text-center Clientes ocasionales
              figure.mb-4
                img.w-50.mx-auto(src='@/assets/curso/tema3/img16.svg', alt='')
              p.mb-0 El trato para los clientes debe ser el mismo para todos, en ellos la atención es menos que a los que generan más ingreso para la empresa.
    
    p.mb-5 Cuando ya se sabe cómo están clasificados los clientes se debe segmentarlos para realizar la estrategia de marketing más adecuada, aludiendo que cada cliente tiene necesidades diferentes, es necesario realizar, entonces, grupos teniendo en cuenta las variables; lo que se busca con la segmentación es consolidar una base de datos que permite tener información como productos más adquiridos, frecuencia y cantidades. En definitiva, lo que se busca es tener conocimiento de los clientes que se tienen para usar la estrategia con cada uno de ellos.

    .row.align-items-center.justify-content-center.BG30.bRTF.mb-4.mTN01
      .col-md-9.p-4
        h4 Perfilación del cliente
        p.mb-0 Con lo mencionado anteriormente se concluye que es una descripción detallada incluyendo todas las características, sociales, económicas y comportamentales para identificar el individuo que, posiblemente, quiera adquirir alguno de los productos ofertados.
      .col-8.col-md-3.px-4
        figure.bRBot
          img(src='@/assets/curso/tema3/img17.svg', alt='')        
  
</template>

<script>
export default {
  name: 'Tema3',
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
