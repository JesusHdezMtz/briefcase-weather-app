<template>
  <div class="full-size">
    <v-card
      width="100%"
      height="100%"
      color="#31334a"
      class="text-center background-image"
    >
      <v-toolbar dark color="#31334a" flat class="pt-4">
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          v-model="location"
          single-line
          label="Search City"
        ></v-text-field>
        <v-btn
          rounded
          color="white"
          :disabled="button"
          class="mx-2 black--text"
          @click="searchWeather"
        >
          Search
        </v-btn>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="white" size="39" dark v-bind="attrs" v-on="on">
              mdi-information
            </v-icon>
          </template>
          <span>Only the most popular cities in the world are enabled.</span> <br>
            <span>More information in: https://www.metaweather.com/</span>
        </v-tooltip>
      </v-toolbar>
      <div class="pt-16"></div>
      <v-img
        class="mx-auto"
        :src="setWeatherIcon"
        width="100"
        height="100"
      ></v-img>

      <p class="white--text text-size-xl font">
        {{ the_temp }}<span class="grey--text text-size-md font">℃</span>
      </p>

      <p class="white--text text-size-small">{{ weather_state_name }}</p>
       <v-icon size="25"  class="mb-2 pt-10" color="grey">mdi-calendar</v-icon>
      <p class="grey--text text-size-xs">Today</p>
      <p class="white--text text-size-smalll  pb-5">
        <v-icon size="30"  class="mb-2" color="white">mdi-map-marker</v-icon> {{ title }}
        {{ location_type }}
      </p>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

//icons 
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
  name: "BasePrincipalCard",
  data: () => ({
    location: "",
    button: false,
    snackbar: false,
    text: "CITY NOT FOUND",
    timeout: 3000,
  }),
  computed: {
    ...mapState([
      "title",
      "location_type",
      "time",
      "weather_state_name",
      "weather_state_abbr",
      "the_temp",
    ]),
    setWeatherIcon() {
      switch (this.weather_state_abbr) {
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
  methods: {
    searchWeather() {
      this.button = true;
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://" +
            "www.metaweather.com/api/location/search/?query=" +
            this.location
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
        )
        .then((response) => {
          if (response.data.length != 0) {
            this.getWeather(response.data[0].woeid);
            return;
          }
          this.button = false;
          this.snackbar = true;
        });
    },
    getWeather(woeid) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://" +
            "www.metaweather.com/api/location/" +
            woeid
        )
        .then((response) => {
          if (response.data.length != 0) {
            console.log(response);
            this.setValuesbyResponse(response.data);
            this.button = false;
            return;
          }
          this.button = false;
          console.error("Woeid not found");
        });
    },
    setValuesbyResponse(response) {
      this.setValues([
        response.title,
        response.location_type,
        response.time,
        response.consolidated_weather[0].weather_state_name,
        response.consolidated_weather[0].weather_state_abbr,
        Math.trunc(response.consolidated_weather[0].the_temp),
        Math.trunc(response.consolidated_weather[0].min_temp),
        Math.trunc(response.consolidated_weather[0].max_temp),
        Math.trunc(response.consolidated_weather[0].wind_speed),
        Math.trunc(response.consolidated_weather[0].visibility),
        response.consolidated_weather[0].air_pressure,
        response.consolidated_weather[0].humidity,
      ]);
      this.setValuesTomorrow([
        response.consolidated_weather[1].applicable_date,
        response.consolidated_weather[1].weather_state_abbr,
        Math.trunc(response.consolidated_weather[1].min_temp),
        Math.trunc(response.consolidated_weather[1].max_temp),
      ]);
      this.setValuesSecond([
        response.consolidated_weather[2].applicable_date,
        response.consolidated_weather[2].weather_state_abbr,
        Math.trunc(response.consolidated_weather[2].min_temp),
        Math.trunc(response.consolidated_weather[2].max_temp),
      ]);
      this.setValuesThird([
        response.consolidated_weather[3].applicable_date,
        response.consolidated_weather[3].weather_state_abbr,
        Math.trunc(response.consolidated_weather[3].min_temp),
        Math.trunc(response.consolidated_weather[3].max_temp),
      ]);
      this.setValuesFourth([
        response.consolidated_weather[4].applicable_date,
        response.consolidated_weather[4].weather_state_abbr,
        Math.trunc(response.consolidated_weather[4].min_temp),
        Math.trunc(response.consolidated_weather[4].max_temp),
      ]);
    },

    ...mapMutations([
      "setValues",
      "setValuesTomorrow",
      "setValuesSecond",
      "setValuesThird",
      "setValuesFourth",
    ]),
  },
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
.font {
  font-family: Mazzard;
}
.text-size-xl {
  font-size: 90px;
}
.text-size-l {
  font-size: 70px;
}
.text-size-md {
  font-size: 50px;
}
.text-size-small {
  font-size: 30px;
}
.text-size-smalll {
  font-size: 25px;
}
.text-size-xs {
  font-size: 20px;
}
</style>
