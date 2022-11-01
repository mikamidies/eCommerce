<template>
  <div class="wrap">
    <div class="container min">
      <div class="grid">
        <div class="left">
          <div class="search">
            <v-text-field
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
                <v-btn link class="cat">
                  <img :src="c.image" alt="" />
                  {{ c.name }}
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsGrid',

  props: {
    categories: Array,
  },
}
</script>

<style scoped>
.wrap {
  padding-top: 120px !important;
}
.grid {
  display: flex;
  align-items: center;
}
.left {
  width: 30%;
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
</style>
