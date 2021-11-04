<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Oferta y demanda
    
    .row.justify-content-center
      .col-md-10
        figure.mb-4
          img(src='@/assets/curso/tema2/img01.jpg', alt='Oferta y demanda')
        
        .row.justify-content-center.PTr01
          .col-md-10
            p.BG40.br01.p-3.mb-4 La ley de oferta y demanda es una teoría que explica la interacción entre los vendedores de un recurso y los compradores de ese recurso. La teoría define la relación entre el precio de un bien o producto dado y la voluntad de las personas de comprarlo o venderlo. A medida que aumenta el precio, la gente está dispuesta a ofrecer más y demandar menos y viceversa cuando el precio baja.
    
    separador

    #t2_1.titulo-segundo
      h2 2.1 Mercado
    
    .row.justify-content-center
      .col-md-8
        .bloque-texto-e.color-primario.BG11.br01.p-4.mb-5
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular Un mercado es toda institución social en la que los bienes y servicios, así como los factores productivos, se intercambian libremente. 
            h4 (González, y Pérez, 2009).
            i.fas.fa-quote-right
    
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.BG30.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img02.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando se hace referencia a mercado se destaca  que no siempre es un lugar físico, y también es imposible determinar su número existente. En el mercado se efectúa un intercambio, puede ser un lugar físico, por ejemplo, una tienda de ropa o un supermercado. Otras veces se puede llevar a cabo mediante un computador.
    
    .row.justify-content-center.mb-5
      .col-lg-6.BG11.br01.p-3
        p.mb-0.text-center En el mercado existen tres  tipos de actores y estos son:

    .row.justify-content-center.mb-5.gx-5
      .col-md-4.mb-4.mb-md-0
        .BG111.p-4.br01.h-100
          h3.p-3.mb-4.text-center Demandantes
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema2/img03.svg', alt='')
          p.mb-0 Comúnmente llamados compradores, son los encargados de dinamizar el mercado, tienen como objetivo adquirir bienes y servicios para satisfacer sus necesidades o conseguir las materias primas para la producción.
      .col-md-4.mb-4.mb-md-0
        .BG333.p-4.br01.h-100
          h3.p-3.b-4.text-center Oferentes
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema2/img04.svg', alt='')
          p.mb-0 Comúnmente son denominados los vendedores y son aquellos que disponen en el mercado bienes y servicios para satisfacer las necesidades de los compradores.
      .col-md-4
        .BG111.p-4.br01.h-100
          h3.p-3.mb-4.text-center Funcionamiento de los mercados
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema2/img05.svg', alt='')
          p.mb-0 Para que los mercados entren en funcionamiento es necesario realizar intercambios y los que determinan que esta acción se haga son los compradores y vendedores que efectúan sus operaciones utilizando el dinero como medio de pago, el dinero es el encargado de simplificar las transacciones, le da valor al bien y servicio y estipula el precio que hay que pagar para adquirirlo.

    separador
    
    #t2_2.titulo-segundo
      h2 2.2 La demanda
    
    p.text-center.mb-4 El concepto de demanda proviene del latín “demandare” y se define como una solicitud o petición.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-e.color-primario.BG11.br01.p-4.mb-5
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular Se define demanda como la cantidad de un bien o servicio que desea adquirir a distintos precios. Cuando las personas consumen bienes y servicios lo hacen porque sienten el deseo de satisfacer una determinada carencia, una necesidad. Precisamente los deseos de consumo que tienen los individuos conforman la demanda. 
            h4 (González, y Pérez, 2009).
            i.fas.fa-quote-right
    
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Ley de la demanda" :icono="require('@/assets/curso/tema2/img06.svg')")
        SlyderA
          .row.justify-content-center.align-items-center.m-4
            .col-md-5.mb-4.mb-md-0
              h3 Ley de la demanda
              p.mb-0 La cantidad de bien o servicio que los consumidores quieren y pueden comprar depende de muchos factores, siendo el más significativo el precio del mismo. Este hecho que recoge la relación inversa que existe entre la cantidad demandada de un bien y su precio, se le conoce en la literatura  económica como la ley de la demanda, y esta dice que cuanto mayor sea el precio de un producto menor será la cantidad demandada del mismo y viceversa (González y Pérez, 2009).
            .col-md-5
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema2/img10.svg', alt='')

          .row.justify-content-center.align-items-center.m-4
            .col-md-5.mb-4.mb-md-0
              p.mb-0 De esta manera, la ley de la demanda es un fenómeno que ocurre en la economía y es que a medida que el precio de los productos aumenta, la cantidad de consumidores disminuye, y al contrario: el consumidor prefiere consumir bienes cuando el precio esté más bajo. En la siguiente tabla se puede observar un ejemplo de la demanda de los juegos de consola. 
            .col-md-5
              .titulo-sexto.color-acento-contenido
                h5 Tabla 2.
                p.mb-0 Tabla de demanda de juegos para consolas
              figure.mb-4
                table.TableP01
                  caption Nota. Tomada de González y Pérez (2009).
                  thead
                    tr.CellC01
                      td
                        h4.mb-0.text-center Precio de los juegos para consolas ($)
                      td
                        h4.mb-0.text-center Cantidad demandada de juegos (en unidades físicas)
                  tbody
                    tr
                      th
                        p.mb-0.text-center 60
                      th
                        p.mb-0.text-center 1
                    tr
                      th
                        p.mb-0.text-center 50
                      th
                        p.mb-0.text-center 2
                    tr
                      th
                        p.mb-0.text-center 40
                      th
                        p.mb-0.text-center 3
                    tr
                      th
                        p.mb-0.text-center 30
                      th
                        p.mb-0.text-center 4
                    tr
                      th
                        p.mb-0.text-center 20
                      th
                        p.mb-0.text-center 6
                    tr
                      th
                        p.mb-0.text-center 10
                      th
                        p.mb-0.text-center 10
                    tr
                      th
                        p.mb-0.text-center 5
                      th
                        p.mb-0.text-center 15
            

      .py-4.py-md-5(titulo="Curva de la demanda" :icono="require('@/assets/curso/tema2/img06.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-md-5.mb-4.mb-md-0
            h3 Curva de la demanda
            p.mb-0
              | La curva de la demanda es la representación gráfica de la función de la demanda. 
              br
              br
              | La siguiente figura representa la curva de demanda de juegos para consolas, y muestra que la cantidad demandada de juegos está en relación inversa a su precio, por eso tiene pendiente negativa. Un aumento del precio de los juegos de 30 a 40 reduce la cantidad demandada de 4 a 3 juegos.
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              p.mb-0 Curva de demanda
            figure
              img(src='@/assets/curso/tema2/img11.svg', alt='')
              figcaption Nota. Tomada de González y Pérez (2009).
      
      .py-4.py-md-5(titulo="Tipos de demanda" :icono="require('@/assets/curso/tema2/img07.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-md-10
            h3 Tipos de demanda 
            p.mb-5 En microeconomía la clasificación de la demanda es muy variada, por lo que a continuación se menciona la más común que hoy en día se encuentra.
            .tarjeta.tarjeta--azul.p-4.mb-5             
              SlyderA
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda latente
                    p.mb-0 La demanda latente es cuando los consumidores presentan necesidades de conseguir un servicio, pero esta demanda no es satisfecha, en conclusión este término es usado para señalar un producto aún inexistente que es muy apetecido cuando salga a la venta.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img12.svg', alt='')
                
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda en descenso
                    p.mb-0 Este tipo de demanda se presenta cuando la tendencia de las ventas desciende más de lo esperado, afectando la economía de las empresas, por lo general cuando esto ocurre se procede a retirar los productos del mercado ya que la rentabilidad es muy baja.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img13.svg', alt='')
                
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda negativa
                    p.mb-0 Se conoce cuando los consumidores comienzan a observar con desagrado ciertos productos por esta razón evitan el uso de este.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img14.svg', alt='')
                
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda nula
                    p.mb-0 También conocida como demanda inexistente, esta se da cuando un producto pierde el interés en el mercado y, por lo tanto, no es ofertado.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img15.svg', alt='')
                
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda irregular o estacional
                    p.mb-0 Esta demanda ocurre cuando las ventas suben o bajan, por lo general son irregularidades que presentan las ventas,  lo cual está ligado a factores como la moda, el clima, adquisición económica, etc.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img16.svg', alt='')
                
                .row.justify-content-center.align-items-center
                  .col-md-8.mb-4.mb-md-0.p-5
                    h3 Demanda en plenitud
                    p.mb-0 Es el tipo de demanda que todas las empresas desean porque es el punto de equilibrio producción-ventas es aquí donde se encuentran complacidas por los ingresos de las ventas obtenidas.
                  .col-8.col-md-2
                    figure
                      img(src='@/assets/curso/tema2/img17.svg', alt='')
        
      .py-4.py-md-5(titulo="Análisis y proyección de la demanda" :icono="require('@/assets/curso/tema2/img09.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-md-5.mb-4.mb-md-0
            h3 Análisis y proyección de la demanda
            p.mb-0 Para empezar, en economía este punto es de los más importantes, pues es el estudio previo de todo proyecto de inversión y se realiza para justificar la viabilidad de este y se encuentra estrechamente relacionado con el objetivo general del proyecto y así se logra determinar su tamaño y cantidad de producción. La razón de todo esto es crear bienes y servicios para satisfacer determinadas necesidades, que están expresadas en una demanda.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/img18.svg', alt='')
    
    separador

    #t2_3.titulo-segundo
      h2 2.3 La oferta
    
    p.text-center.mb-4 La palabra oferta proviene del latín “oferta” que significa “las cosas que se llevan frente a uno, que se ofrecen”.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-e.color-primario.BG11.br01.p-4.mb-5
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular Se define la oferta como la cantidad de bien o servicio que se desea ofrecer a distintos precios. 
            h4 (González, y Pérez, 2009).
            i.fas.fa-quote-right

    p.mb-4 Cuando se habla de oferta se hace referencia a los vendedores, para que los consumidores puedan comprar productos es necesario tener quien los ofrezca y los venda, los encargados de producir bienes y servicios son las empresas que se llaman comúnmente productores. Por lo anterior, se define la oferta como la cantidad de productos que un vendedor está dispuesto a vender a un precio estipulado (tabla 3).
  
    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          p.mb-0 Oferta de juegos para consola
        figure.mb-4
          table.TableP01
            caption Nota. Tomada de González y Pérez (2009).
            thead
              tr.CellC01
                td
                  h4.mb-0.text-center Precio de los juegos en ($)
                td
                  h4.mb-0.text-center Cantidad ofrecida de juegos
            tbody
              tr
                th
                  p.mb-0.text-center 60
                th
                  p.mb-0.text-center 11
              tr
                th
                  p.mb-0.text-center 50
                th
                  p.mb-0.text-center 10
              tr
                th
                  p.mb-0.text-center 40
                th
                  p.mb-0.text-center 9
              tr
                th
                  p.mb-0.text-center 30
                th
                  p.mb-0.text-center 8
              tr
                th
                  p.mb-0.text-center 20
                th
                  p.mb-0.text-center 6
              tr
                th
                  p.mb-0.text-center 10
                th
                  p.mb-0.text-center 5
              tr
                th
                  p.mb-0.text-center 5
                th
                  p.mb-0.text-center 4
      .col-md-5
        figure
          img(src='@/assets/curso/tema2/img19.svg', alt='')
    
    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Ley de oferta" :icono="require('@/assets/curso/tema2/img20.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-md-5.mb-4.mb-md-0
            h3 Ley de oferta
            p.mb-0 Lógicamente los compradores y vendedores ven desde una perspectiva diferente los precios, mientras que para los compradores los precios muy elevados desaniman a adquirir los productos, los vendedores con el mismo precio incrementado se motivan a producir más para proyectar y obtener un mayor ingreso por producto vendido. En relación con lo anterior, empieza a jugar un papel importante la rentabilidad, ya que el objetivo es generar mayores beneficios. Para ultimar, cuanto mayor sea el precio del bien es más rentable y la oferta incrementa, a este comportamiento que realizan los vendedores se denomina #[b ley de oferta].
          .col-md-5
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema2/img31.svg', alt='')
          
      .py-4.py-md-5(titulo="Curva de la oferta" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-md-5.mb-4.mb-md-0
            h3 Curva de la oferta
            p.mb-0
              | Es la expresión gráfica de la oferta de un bien y representa la relación positiva que existe entre el precio de un bien y la cantidad ofrecida. 
              br
              br
              | La curva de oferta de juegos para consola muestra que la cantidad ofrecida de éstos está relacionada directamente con su precio, por eso tiene pendiente positiva. Un aumento en el precio de los juegos de $301 a $503 origina un aumento de la cantidad ofrecida de 8 a 10 juegos. 
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              p.mb-0 Curva de la oferta
            figure
              img(src='@/assets/curso/tema2/img24.svg', alt='')
              figcaption Nota. Tomada de González y Pérez (2009).
      
      .py-4.py-md-5(titulo="Tipos de oferta" :icono="require('@/assets/curso/tema2/img22.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-12
            h3 Tipos de oferta
            p.mb-4 Para entender mejor los tipos de oferta se presenta el siguiente flujograma.
            figure
              img(src='@/assets/curso/tema2/img25.svg', alt='')
      
      .py-4.py-md-5(titulo="Factores que determinan la oferta" :icono="require('@/assets/curso/tema2/img23.svg')")
        .row.justify-content-center.align-items-center.m-4
          .col-12
            h3 Factores que determinan la oferta
            p.mb-4 Cuando se hace referencia a los factores, se dice que son los elementos que influyen para que suceda un cambio, para el de la economía son los componentes que determinan que un producto demande menos, dentro de los que se encuentran:
            .row.justify-content-center.gx-3
              .col-md-3.mb-4.mb-md-0
                .BG111.p-4.br01.h-100
                  h3.p-3.mb-4.text-center Tecnología
                  figure.mb-4
                    img.w-75.mx-auto(src='@/assets/curso/tema2/img27.svg', alt='')
                  p.mb-0 Es agregar conocimientos tecnológicos para lograr bajar los costos de producción, citando un ejemplo los televisores que hoy se encuentran con mayores capacidades y a un precio más bajo que hace 15 años debido a los avances tecnológicos.
              .col-md-3.mb-4.mb-md-0
                .BG333.p-4.br01.h-100
                  h3.p-3.b-4.text-center Precio de los factores productivos
                  figure.mb-4
                    img.w-75.mx-auto(src='@/assets/curso/tema2/img28.svg', alt='')
                  p.mb-0 Son las materias primas necesarias para la producción de un bien o servicio, así, cuanto más baratas sean, menor será el precio que hay que pagar por estas y aumentará la producción, por ejemplo, producir un mueble cuando el precio de la madera esté barato hace que el fabricante aumente la producción y mejore el precio.
              .col-md-3
                .BG111.p-4.br01.h-100
                  h3.p-3.mb-4.text-center Precio de los bienes relacionados
                  figure.mb-4
                    img.w-75.mx-auto(src='@/assets/curso/tema2/img29.svg', alt='')
                  p.mb-0 La cantidad demandada de un bien depende de las variaciones de los precios de los bienes relacionados con él. La influencia de una variación del precio de un bien en la curva de la demanda de otro, depende de que ambos sean sustitutos o complementarios; ejemplo, automóviles funcionan con gasolina.
              .col-md-3.mb-4.mb-md-0
                .BG333.p-4.br01.h-100
                  h3.p-3.b-4.text-center Otros
                  figure.mb-4
                    img.w-75.mx-auto(src='@/assets/curso/tema2/img30.svg', alt='')
                  p.mb-0 En este grupo se incluyen los factores externos tales como las condiciones climáticas, aumento o disminución de la población, impuestos establecidos por los gobiernos, etc.





              

    
  
</template>

<script>
export default {
  name: 'Tema2',
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
