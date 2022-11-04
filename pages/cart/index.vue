<template>
  <div>
    <div v-if="$store.state.cart.cart.length == 0" class="empty">
      <img src="@/assets/img/empty.svg" alt="" class="empty__pic" />
      <p class="empty__txt">Your cart is empty</p>
      <v-btn class="btn" nuxt to="/products">Shop now</v-btn>
    </div>
    <div v-else class="container min">
      <div class="items">
        <div
          v-for="(c, i) in $store.state.cart.cart"
          :key="`cartItem${i}`"
          class="item"
        >
          <div class="left">
            <img :src="c.product.image" alt="" class="pic" />
          </div>
          <div class="right">
            <div class="contento">
              <h4 class="name">{{ c.product.name }} x {{ c.quantity }}</h4>
              <p class="price">
                {{ $formatMoney(c.product.price * c.quantity) }}
              </p>
              <div class="counter">
                <v-btn
                  class="count-btn"
                  @click="$store.commit('cart/IncreaseItemCount', i)"
                >
                  <v-icon size="20">mdi-plus-circle</v-icon>
                </v-btn>
                <p>-</p>
                <v-btn
                  class="count-btn"
                  @click="$store.commit('cart/DecreaseItemCount', i)"
                >
                  <v-icon size="20">mdi-minus-circle</v-icon>
                </v-btn>
              </div>
            </div>
            <v-btn
              class="delete"
              @click="$store.commit('cart/RemoveCartItem', i)"
            >
              <v-icon size="18">mdi-delete</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="confirmer">
        <v-btn class="confirm btn">Confirm</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
}
</script>

<style scoped>
.empty {
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.empty__pic {
  width: 300px;
  height: auto;
  object-fit: contain;
  transform: translateX(-28px);
}
.btn {
  background: var(--blue) !important;
  color: white;
  text-transform: capitalize;
  letter-spacing: unset;
  font-size: 18px;
  padding: 12px 56px !important;
}
.empty__txt {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 2rem;
}
.items {
  padding-bottom: 32px;
}
.item {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}
.pic {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
.container {
  padding: 120px 0;
}
.left {
  width: 40%;
}
.right {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.name {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 1rem;
}
.counter {
  display: flex;
  align-items: center;
  gap: 12px;
}
.count-btn {
  box-shadow: none;
  background: transparent !important;
  width: unset !important;
  min-width: unset !important;
  height: unset !important;
  padding: 12px !important;
  color: var(--blue);
}
.count-btn:last-child {
  color: red;
}
.count-btn i {
  font-size: 24px !important;
}
.delete {
  box-shadow: none;
  background: transparent !important;
  padding: 12px !important;
  width: unset !important;
  min-width: unset !important;
  height: 48px !important;
}
.delete i {
  font-size: 32px !important;
  color: red !important;
}
.confirmer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
