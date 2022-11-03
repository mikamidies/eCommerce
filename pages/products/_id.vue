<template>
  <div class="wrap">
    <div class="container min" v-if="product">
      <v-btn nuxt to="/products" class="btn marginer">Back</v-btn>
      <div class="flex">
        <div class="left">
          <div class="img">
            <img :src="product.image" alt="" class="pic" />
          </div>
        </div>
        <div class="right">
          <h1 class="title">
            {{ product.name }}
          </h1>
          <div class="mt-2 text-center">
            <p class="cost">${{ product.price }}</p>
            <v-rating
              readonly
              half-increments
              class="mb-2 raiting"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="product.ratings"
              dense
              size="20"
            ></v-rating>
            <div class="chips">
              <v-chip
                small
                label
                outlined
                class="mr-1 chip"
                v-for="(t, i) in product.tags"
                :key="`prod${product.id}-${i}`"
              >
                {{ t }}
              </v-chip>
            </div>
          </div>
          <div class="txt">
            <p>
              {{ product.description }}
            </p>
          </div>
          <v-btn class="btn"> Add to card </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInner',
  data() {
    return {
      product: null,
    }
  },
  async created() {
    const d = await this.$content('products')
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch()
    this.product = d[0]
  },
}
</script>

<style scoped>
.wrap {
  padding: 100px 0 120px 0;
}
.flex {
  display: flex;
}
.pic {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}
.left {
  width: 40%;
}
.right {
  width: 60%;
  padding-left: 2rem;
}
.title {
  font-weight: 600;
  font-size: 40px;
}
.cost {
  font-size: 28px;
  font-weight: 500;
  color: var(--blue);
  margin-bottom: 1rem;
}
.raiting {
  margin-bottom: 0.5rem;
}
.chips {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.txt p {
  font-size: 16px;
  color: rgb(75, 75, 75);
  line-height: 22px;
  max-width: 80%;
  display: block;
  margin-bottom: 2rem;
}
.btn {
  background: var(--blue) !important;
  color: white;
  text-transform: capitalize;
  letter-spacing: unset;
  font-size: 18px;
  padding: 12px 56px !important;
}
.marginer {
  margin-bottom: 2rem;
}
</style>
