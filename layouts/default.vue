<template>
  <div>
    <TheNavbar />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheNavbar,
  },
  data() {
    return {}
  },
}
</script>
