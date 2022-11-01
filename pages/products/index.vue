<template>
  <div>
    <ProductsGrid :categories="categories" />
  </div>
</template>

<script>
import ProductsGrid from '~/components/ProductsPage/ProductsGrid'

export default {
  name: 'ProductsPage',

  components: {
    ProductsGrid,
  },

  data() {
    return {
      products: null,
      categories: null,
    }
  },

  async created() {
    this.categories = await this.$content('categories').fetch()
    this.products = await this.$content('products').fetch()
  },
}
</script>

<style></style>
