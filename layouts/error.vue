<template>
  <v-app class="app">
    <v-container>
      <div class="wrapper">
        <div class="wrap" v-if="error.statusCode === 404">
          <h1>
            {{ pageNotFound }}
          </h1>
          <p>Page no found</p>
        </div>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <NuxtLink to="/"> Home page </NuxtLink>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 132px;
  line-height: 120%;
  margin-bottom: 0;
}
p {
  text-align: center;
  font-size: 28px;
}
.app {
  background: #4e54c8;
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
  background: linear-gradient(to right, #8f94fb, #4e54c8);
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  flex-direction: column;
}
a {
  font-size: 20px;
  text-decoration: none;
  background: white;
  padding: 12px 56px;
  border-radius: 4px;
  color: var(--blue);
}
</style>
