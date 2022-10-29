<template>
  <div class="wrap">
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
.wrap {
  background: var(--blue);
  -webkit-box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 8px 0px rgba(34, 60, 80, 0.2);
}
.cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand a {
  font-size: 28px;
  color: white;
}
.btn {
  background-color: transparent !important;
  box-shadow: none !important;
  color: white;
  font-size: 24px;
  padding: 16px !important;
  height: unset !important;
}
</style>
