<template>
  <div class="wrap">
    <div class="container">
      <h2 class="title">eCommerce</h2>
      <p class="sub">Free eCommerce website built with Nuxt JS</p>
      <div class="socs">
        <v-btn class="btn soc"><i class="bx bxl-facebook-circle"></i> </v-btn>
        <v-btn class="btn soc"><i class="bx bxl-twitter"></i> </v-btn>
        <v-btn class="btn soc"><i class="bx bxl-instagram"></i> </v-btn>
        <v-btn class="btn soc"><i class="bx bxl-youtube"></i> </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  width: 100%;
  padding: 2rem 0 4rem;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  font-size: 32px;
  margin-bottom: 1.3rem;
}
.sub {
  font-size: 18px;
  margin-bottom: 1.5rem;
}
.socs {
  display: flex;
  align-items: center;
}
.soc {
  font-size: 24px;
  color: var(--blue);
}
</style>
