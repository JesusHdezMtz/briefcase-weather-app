<template>
  <div class="full-size">
    <v-card width="100%" height="200" color="#31334a">
      <v-container class="text-center">
        <p class="white--text text-size-xs pt-5">{{title}}</p>
        <p class="white--text text-size-l font">{{data}}<span class="grey--text text-size-md font"> {{measure}}</span></p>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['title', 'data', 'measure'],
}
</script>
<style scoped>
.full-size {
  width: 100%;
  height: 100%;
}
@font-face {
  font-family: Mazzard;
  src: url("../assets/MazzardH-SemiBold.ttf");
}
.font {
  font-family: Mazzard;
}
.text-size-xs {
  font-size: 15px;
}
.text-size-l {
  font-size: 70px;
}
.text-size-md {
  font-size: 50px;
}
</style>
    