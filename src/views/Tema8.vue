<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Gestión de #[i stock]

    .row.justify-content-center.mb-4
      .col-md-10
        figure.mb-4
          img(src='@/assets/curso/tema8/img01.jpg', alt='Gestión de stock')
        
        .cajon.color-primario.BG10.p-4
          p.mb-0 Se denomina stock de una empresa al conjunto de mercancías que se encuentran en ella, acumuladas en un lugar determinado, en tránsito o inmersas en el proceso de producción, y cuyo objetivo es su aplicación empresarial en procesos industriales o comerciales.
    
    separador

    #t8_1.titulo-segundo
      h2 8.1 Formatos comerciales sin presencia física
    
    p.mb-4 Con el fin de determinar racionalmente los stocks de una empresa, es necesario clasificarlos en función de diferentes criterios como se presenta en la siguiente tabla.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4
      p.mb-0 Clasificación de stocks
    
    .ClassTableP
      table
        thead
          tr.BG30
            th Criterio
            th Tipo
            th Descripci&oacute;n
        tbody
          tr
            td(rowspan='3').BG11 Por su duraci&oacute;n: tiempo de vida &uacute;til de la mercanc&iacute;a.
            td Perecedero
            td Se deterioran con el paso del tiempo.
          tr
            td No perecedero
            td Apenas se ven afectados por el paso del tiempo.
          tr
            td Con fecha de caducidad
            td No se pueden vender despu&eacute;s de una fecha concreta.
          tr
            td(rowspan='2').BG10 Por su duraci&oacute;n: tiempo de vida &uacute;til de la mercanc&iacute;a.
            td Comercial
            td Productos que componen el surtido de la empresa o, lo que es lo mismo, oferta comercial de la empresa a sus clientes. En los establecimientos de autoservicio se conocen como stock de presentaci&oacute;n.
          tr
            td Industrial
            td Productos que se incorporan al proceso productivo.
          tr
            td(rowspan='8').BG11 Por su funci&oacute;n: papel que cumplen en la empresa.
            td De ciclo
            td Tambi&eacute;n denominados normales, cubren la demanda&nbsp;&nbsp;&nbsp;habitual en la empresa.
          tr
            td De&nbsp;&nbsp;&nbsp;seguridad
            td Tienen la&nbsp;&nbsp;&nbsp;funci&oacute;n de evitar roturas de stock.
          tr
            td De&nbsp;&nbsp;&nbsp;especulaci&oacute;n
            td Se aprovechan&nbsp;&nbsp;&nbsp;precios bajos para comprar m&aacute;s de lo habitual.
          tr
            td De&nbsp;&nbsp;&nbsp;anticipaci&oacute;n
            td Destinados a&nbsp;&nbsp;&nbsp;servir posibles ventas estacionales o especiales.
          tr
            td En&nbsp;&nbsp;&nbsp;tr&aacute;nsito
            td Todas las&nbsp;&nbsp;&nbsp;mercanc&iacute;as inmersas en los distintos canales de producci&oacute;n o&nbsp;&nbsp;&nbsp;comercializaci&oacute;n. De este modo, hay mercanc&iacute;as en ruta (en el transporte), en&nbsp;&nbsp;&nbsp;embalaje (en el proceso de salida), en curso (en el proceso de fabricaci&oacute;n),&nbsp;&nbsp;&nbsp;etc.
          tr
            td Muerto
            td Todas las&nbsp;&nbsp;&nbsp;mercanc&iacute;as que ya no tienen ning&uacute;n uso para la empresa, salvo su posible&nbsp;&nbsp;&nbsp;venta como material desechado (chatarra, etc.).
          tr
            td Dormido
            td Aquella parte de&nbsp;&nbsp;&nbsp;las mercanc&iacute;as que no se han utilizado en mucho tiempo. Este tipo de stocks&nbsp;&nbsp;&nbsp;se&ntilde;ala de forma evidente niveles de existencias excesivos.
          tr
            td Reutilizable
            td Mercanc&iacute;as&nbsp;&nbsp;&nbsp;desechadas que pueden ser reutilizadas completa o parcialmente.&nbsp;&nbsp;&nbsp;
          tr
            td(rowspan='4').BG10 Por su gesti&oacute;n: incidencia en la gesti&oacute;n de las existencias.
            td
              br
              | Operativo
            td Los reaprovisionamientos de mercanc&iacute;as que se&nbsp;&nbsp;&nbsp;utilizan habitualmente.
          tr
            td F&iacute;sico
            td Cantidad de&nbsp;&nbsp;&nbsp;producto disponible en el almac&eacute;n, en un momento dado.
          tr
            td Neto
            td Stock f&iacute;sico menos los pedidos no servidos a clientes.
          tr
            td Disponible
            td Stock neto m&aacute;s&nbsp;&nbsp;&nbsp;los pedidos no recibidos de los proveedores.&nbsp;&nbsp;&nbsp;
          tr
            td.BG11 Por su valor: valor econ&oacute;mico que representan en relaci&oacute;n con el stock total.
            td Sistema ABC
            td
              ul.lista-ul--color.mb-0
                li 
                  i.lista-ul__vineta
                  | Grupo A: pocas unidades físicas (20%) que tienen mucho valor económico (80%).
                li 
                  i.lista-ul__vineta
                  | Grupo B: porcentaje medio respecto a las unidades físicas (40%) y respecto al valor económico (25%). 
                li 
                  i.lista-ul__vineta
                  | Grupo C: muchas unidades físicas (40%) que representan poco valor económico (5%).
    
    separador

    #t8_2.titulo-segundo
      h2 8.2 La importancia de gestionar #[i stocks] 
    
    p.mb-4 La función principal de la gestión de stocks es determinar las cantidades de productos que debe tener la empresa para contar en todo momento con las materias primas y productos necesarios de forma eficiente y eficaz con el menor costo.

    .BG00.p-5.mb-0
      .row.justify-content-center.align-items-center
        .col-8.col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema8/img02.svg', alt='')        
        .col-md-6
          p.mb-0 Por consiguiente, la gestión de stocks nace de la necesidad de coordinar de manera  eficiente los servicios a los clientes, los requerimientos de producción y los pedidos a los proveedores,  razón por la cual se debe mantener el inventario de la empresa actualizado a los requerimientos del mercado,  bien sea una gran demanda del bien para cumplir oportunamente con las necesidades del mismo: para esto es necesario conseguir un perfecto equilibrio entre los  costos de almacenamiento de los productos o materias primas  con los requerimientos de producción y/o comercialización de la empresa, y  para alcanzar dicho equilibrio o rentabilidad,  es indispensable dejar en claridad dos conceptos fundamentales que son: el margen comercial y el índice de rotación de stocks.
    
    separador

    #t8_3.titulo-segundo
      h2 8.3 Margen comercial
    
    p.mb-4 El margen comercial es la diferencia que existe entre los ingresos que se obtienen en la comercialización de un producto y el costo total (costos de adquisición y costos de almacenamiento) de las mercancías o materiales necesarios.

    .BG31.p-5.mb-0
      .row.justify-content-center.align-items-center
        .col-8.col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema8/img03.svg', alt='')        
        .col-md-6
          p.mb-0 En referencia a lo anterior se ve la importancia de disminuir los costos de almacenamiento para obtener un mejor margen comercial, la mejor manera de reducir estos costos en mantener las materias primas o productos el menor tiempo en el almacén es decir mantener la rotación de la mercancía en forma continua.
    
    separador

    #t8_4.titulo-segundo
      h2 8.4 Índice de rotación de stocks

    .row.justify-content-center.mb-4
      .col-md-10    
        p.mb-5 El índice de rotación de stocks es el número de veces que un producto se repone en el almacén, recuperando la inversión realizada y obteniendo el margen comercial, en un periodo determinado de tiempo.
      
      .col-lg-6.BG30.br01.p-3.mb-5
        p.mb-0.text-center A continuación, se indican los pasos del comportamiento del consumidor:
      
      .col-md-8.mb-3.p-5.BG11.bRTF1.mb-2
        figure
          img(src='@/assets/curso/tema8/img04.svg', alt='')
      
      .col-md-8.mb-3.p-5.BG00.mb-2
        p.mb-0 Se debe tener en cuenta que si el índice de rotación es muy bajo quiere decir que los productos tienen poca rotación lo que conlleva a elevar los costos de almacenamiento, teniendo como consecuencia que el inventario quede obsoleto por la aparición de nuevas colecciones y la inversión realizada no sería tan rentable. Por el contrario, si el índice de rotación es muy alto eso indicaría que los productos existentes tienen alta rotación de tal manera que los costos de gestión de compra son altos y se tendrá que dar un servicio oportuno a los clientes en las épocas de alta demanda que presente el producto. Entonces, lo correcto sería aumentar el índice de rotación de stocks manteniendo el margen comercial:
      
      .col-md-8.mb-3.p-5.BG11.mb-2
        p.mb-0 Beneficio= Margen comercial * Índice de rotación
      
      .col-md-8.mb-3.p-5.BG00.mb-2
        p.mb-0 Y una vez calculado el índice de rotación de stocks, se podrá determinar el periodo de almacenamiento que cada cuantos días o meses renuevan la mercancía o productos.

      .col-md-8.mb-3.p-5.BG11
        figure
          img(src='@/assets/curso/tema8/img05.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema8',
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
