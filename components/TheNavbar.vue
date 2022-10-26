<template>
  <div>
    <v-container>
      <div class="cont">
        <div class="brand">
          <nuxt-link to="/"> eCommerce </nuxt-link>
        </div>
        <div class="right">
          <v-btn class="btn">
            <i class="bx bx-grid-alt"></i>
          </v-btn>
          <v-btn class="btn">
            <i class="bx bx-cart-alt"></i>
          </v-btn>
          <v-btn class="btn">
            <i class="bx bx-sun"></i>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>

<style scoped>
.cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand a {
  font-size: 28px;
  color: black;
}
</style>
