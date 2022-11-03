<template>
  <div class="wrap">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(p, i) in sale_items"
          :key="`saleItem-${i}`"
          class="swiper-slide"
          :style="{ backgroundImage: `url(${p.image})` }"
        >
          <div class="content">
            <h2 class="title">{{ p.name }}</h2>
            <p class="price">$ {{ p.price }}</p>
            <p class="sub">
              {{ p.description }}
            </p>
            <nuxt-link class="link" :to="`/products/${p.id}`">
              Check it out
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'MainHome',

  props: {
    sale_items: {
      type: Array,
      required: false,
    },
  },

  mounted() {
    new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    console.log(this.sale_items)
  },
}
</script>

<style>
.swiper-slide {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.content {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  padding: 24px;
  border-radius: 8px;
  max-width: 600px;
}
.title {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.price {
  font-size: 24px;
  color: var(--blue);
  margin-bottom: 1.5rem;
}
.sub {
  font-size: 18px;
  line-height: 120%;
  max-width: 90%;
  margin-bottom: 2rem;
}
.link {
  font-size: 20px;
  color: white;
  background: var(--blue);
  border-radius: 4px;
  padding: 12px 32px;
  display: inline-block;
}
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
