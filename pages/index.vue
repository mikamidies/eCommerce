<template>
  <div>
    <MainHome :sale_items="sale_items" />
  </div>
</template>

<script>
import MainHome from '@/components/MainPage/MainHome.vue'

export default {
  name: 'IndexPage',

  components: {
    MainHome,
  },

  data() {
    return {
      products: null,
      sale_items: null,
    }
  },

  async created() {
    this.sale_items = await this.$content('products')
      .where({ onSale: true })
      .fetch()
    this.products = await this.$content('products').fetch()
  },
}
</script>

<style></style>
