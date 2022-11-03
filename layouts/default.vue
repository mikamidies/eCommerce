<template>
  <div>
    <TheNavbar />
    <transition name="home">
      <nuxt />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheNavbar,
    TheFooter,
  },
  data() {
    return {}
  },
}
</script>
