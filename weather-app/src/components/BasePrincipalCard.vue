<template>
  <div class="full-size">
    <v-card width="100%" height="100%" color="#31334a" class="text-center background-image ">
      <v-toolbar dark color="#31334a" flat>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          label="Location"
          
        ></v-text-field>
        <v-btn  rounded color="white" class="ml-2 black--text">
          Buscar
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="pt-15">

      </div>
      <v-img
        class="mx-auto"
        src="../assets/icons/044-sunny.svg"
        width="100"
        height="100"
      ></v-img>

      <p class="white--text text-size-xl font">
        15<span class="grey--text text-size-md font">℃</span></p>

        <p class="white--text text-size-small">Shower</p>
        <p class="grey--text text-size-xs">Today</p>
        <p class="grey--text text-size-xs">
          <v-icon size="18" color="grey">mdi-map-marker</v-icon> México</p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BasePrincipalCard",
};
</script>
<style scoped>
@font-face {
    font-family: Mazzard;
    src: url("../assets/MazzardH-SemiBold.ttf");
  }
.full-size {
  width: 100%;
  height: 100%;
}
.background-image {
  background-image: url("../assets/images/background-1.png");
  background-size: 100%;
  background-position: bottom;
}
.font{
  font-family: Mazzard;
}
.text-size-xl{
  font-size: 90px;
}
.text-size-l{
  font-size: 70px;
}
.text-size-md{
  font-size: 50px;
}
.text-size-small{
  font-size: 30px;
}
.text-size-xs{
  font-size: 15px;
}
</style>
