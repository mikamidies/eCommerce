<template>
  <div class="wrap">
    <v-container>
      <div class="cont">
        <div class="brand">
          <nuxt-link to="/"> eCommerce </nuxt-link>
        </div>
        <div class="right">
          <v-btn nuxt to="/products" class="btn">
            <i class="bx bx-grid-alt"></i>
          </v-btn>
          <v-badge
            class="red"
            overlap
            bordered
            color="grey"
            :content="$store.state.cart.cart.length"
            v-if="$store.state.cart.cart.length > 0"
          >
            <v-btn nuxt to="/cart" class="btn">
              <i class="bx bx-cart-alt"></i>
            </v-btn>
          </v-badge>
          <v-btn v-else nuxt to="/cart" class="btn">
            <i class="bx bx-cart-alt"></i>
          </v-btn>
          <!-- <v-btn @click="toggleTheme" class="btn">
            <i class="bx bx-sun"></i>
          </v-btn> -->
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',

  methods: {
    toggleTheme() {
      console.log('dark')
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
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
  font-size: 24px;
  padding: 16px !important;
  height: unset !important;
  color: white;
}
.btn a {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
v-badge span {
  color: red !important;
}
</style>
