<template>
  <div class="wrap">
    <div class="container">
      <div class="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSamplePage',

  layout: 'empty',
}
</script>

<style scoped>
.wrap {
  background-color: #053a3d;
  height: 100vh;
}
div {
  height: 25px;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  margin: auto;
  border: 3px solid #54e6e7;
  background-color: #aac6c6;
  box-shadow: 0px 0px 15px #aac6c6;
  height: 30px;
}
.progress {
  width: 0%;
  background-color: #1a2929;
  opacity: 0.8;
  animation: one_piece 2s infinite alternate;
}
@keyframes one_piece {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
