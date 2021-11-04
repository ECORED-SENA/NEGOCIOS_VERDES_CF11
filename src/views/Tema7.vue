<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 El #[i marketing] omnicanal
    
    p.mb-4 El #[i marketing] omnicanal se centra en ofrecer una experiencia personalizada y coherente a los compradores en todos los canales y dispositivos; su objetivo principal es hacer que la experiencia del comprador sea lo más fácil posible, y eso significa un compromiso constante sin importar dónde o cómo interactúa un comprador. Se invita a conocer más acerca del #[i marketing] omnicanal en el siguiente video: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LSl9NRXK_lM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
</template>

<script>
export default {
  name: 'Tema7',
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
