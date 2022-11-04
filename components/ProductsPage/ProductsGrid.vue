<template>
  <div class="wrap">
    <div class="container min">
      <div class="flex">
        <div class="left">
          <div class="wrep">
            <div class="search">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                outlined
                clearable
                placeholder="search"
              ></v-text-field>
            </div>
            <div class="categories">
              <h4 class="cat__title">Categories</h4>
              <ul>
                <li v-for="(c, i) in categories" :key="`category${i}`">
                  <v-btn @click="filterByCategory" link class="cat">
                    <img :src="c.image" alt="" />
                    {{ c.name }}
                  </v-btn>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="grid">
            <div
              v-for="(p, i) in filteredProducts"
              :key="`product${p.id}-${i}`"
              class="card"
            >
              <nuxt-link :to="`/products/${p.id}`">
                <div class="prod__img">
                  <img :src="p.image" alt="" class="prod__pic" />
                </div>
                <div class="cont">
                  <p class="prod__name">{{ p.name }}</p>
                  <p class="prod__price">{{ $formatMoney(p.price) }}</p>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsGrid',

  data() {
    return {
      search: null,
    }
  },

  props: {
    categories: Array,
    products: Array,
  },

  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products
      return this.products.filter((p) => {
        const s = this.search.toLowerCase()
        const n = p.name.toLowerCase()
        const price = p.price.toString()
        const sprice = p.salePrice?.toString() || ''
        const r = p.ratings.toString()
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        )
      })
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-top: 120px !important;
}

.left {
  width: 30%;
  position: -webkit-sticky;
  position: sticky;
  top: 120px;
  display: unset;
}
.wrep {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  display: unset;
}
.cat img {
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 50%;
  pointer-events: none;
  margin: 0 12px;
}
.categories ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cat {
  height: auto !important;
  width: 100%;
  background: transparent !important;
  box-shadow: none;
  padding: 12px 0 !important;
  display: flex;
  text-transform: capitalize;
  font-size: 18px;
  letter-spacing: 0ch;
  font-weight: 400;
  justify-content: flex-start;
}
.cat__title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 2rem;
}
.wrap {
  padding: 32px 0 64px 0;
  position: relative;
}
.title {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.prod__img {
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}
.prod__pic {
  width: 100%;
  height: 340px;
  object-fit: cover;
  transition: 0.3s;
}
.card:hover .prod__pic {
  transform: scale(1.2);
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
.flex {
  display: flex;
  position: relative;
}
.right {
  width: 70%;
  padding-left: 1rem;
}
</style>
