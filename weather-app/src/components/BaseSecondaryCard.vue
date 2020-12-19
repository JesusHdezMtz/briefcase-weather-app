<template>
  <div>
    <v-card width="100%" height="150" color="#31334a">
      <v-container class="text-center">
        <p class="grey--text text-size-xs">{{time}}</p>
        <v-img
          class="mx-auto"
          :src="setWeatherIcon"
          width="50"
          height="50"
        ></v-img>
        <v-row class="pt-4">
          <span class="mx-auto white--text text-size-xs"
            >{{min_tem}} <span class="white--text text-size-xss">℃</span></span
          >
          <span class="mx-auto grey--text text-size-xs"
            >{{max_tem}} <span class="grey--text text-size-xss">℃</span></span
          >
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import iconSnow from "../assets/icons/018-snowfall.svg";
import iconSleet from "../assets/icons/045-snow.svg";
import iconHail from "../assets/icons/013-hail.svg";
import iconTStorm from "../assets/icons/020-storm.svg";
import iconHRain from "../assets/icons/023-rain.svg";
import iconLRain from "../assets/icons/035-rainy day.svg";
import iconShowers from "../assets/icons/035-rainy day.svg";
import iconHCloud from "../assets/icons/026-cloud.svg";
import iconLCloud from "../assets/icons/006-cloudy day.svg";
import iconClear from "../assets/icons/044-sunny.svg";

export default {
  name: "BaseSecondaryCard",
  props: ['time', 'state', 'min_tem', 'max_tem'],
  computed: {
    setWeatherIcon() {
      switch (this.state) {
        case "sn":
          return iconSnow;
        case "sl":
          return iconSleet;
        case "h":
          return iconHail;
        case "t":
          return iconTStorm;
        case "hr":
          return iconHRain;
        case "lr":
          return iconLRain;
        case "s":
          return iconShowers;
        case "hc":
          return iconHCloud;
        case "lc":
          return iconLCloud;
        case "c":
          return iconClear;
        default:
          return iconClear;
      }
    },
  },
};
</script>
<style scoped>
.text-size-xs {
  font-size: 15px;
}
.text-size-xss {
  font-size: 13px;
}
</style>