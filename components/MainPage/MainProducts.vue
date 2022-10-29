<template>
  <div class="wrap">
    <div class="container min">
      <h2 class="title">Products</h2>
      <div class="grid">
        <div v-for="(p, i) in products" :key="`product-${i}`" class="card">
          <nuxt-link to="/">
            <div class="prod__img">
              <img :src="p.image" alt="" class="prod__pic" />
            </div>
            <div class="cont">
              <p class="prod__name">{{ p.name }}</p>
              <p class="prod__price">${{ p.price }}</p>
              <div class="tags">
                <div
                  v-for="(t, i) in p.tags"
                  :key="`prod${p.id}-${i}`"
                  class="tag"
                >
                  {{ t }}
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProducts',

  props: {
    products: {
      type: Array,
      required: false,
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 32px 0 64px 0;
}
.title {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.prod__pic {
  width: 100%;
  height: 340px;
  object-fit: cover;
}
.min {
  max-width: 60%;
}
.prod__name {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1rem;
  color: black;
}
.prod__price {
  font-size: 24px;
  font-weight: 500;
  color: var(--blue);
}
.card {
  -webkit-box-shadow: 0px 4px 13px -4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 13px -4px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 13px -4px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
}
.cont {
  padding: 1.5rem;
}
.tags {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1.5rem 0 0 0;
}
.tag {
  padding: 8px;
  background: rgba(128, 128, 128, 0.09);
  border-radius: 2px;
  color: black;
  font-size: 14px;
  border: 1px solid rgba(128, 128, 128, 0.1);
}
</style>
