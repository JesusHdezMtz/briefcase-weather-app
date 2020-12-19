<template>
  <div class="background full-size">
    <v-row class="full-size mx-0">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="pa-0 ma-0">
        <basePrincipalCard></basePrincipalCard>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="pa-0 ma-0">
        <v-container class="px-5">
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="6"
              md="3"
              lg="3"
              xl="3"
              v-for="(item, i) in days"
              :key="i"
            >
              <baseSecondaryCard
                :time="item.time"
                :state="item.weather_state"
                :min_tem="item.min_temp"
                :max_tem="item.max_temp"
              ></baseSecondaryCard>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="px-2">
          <p class="white--text text-size-md font px-5">
            <v-icon size="30" color="yellow">mdi-map-marker</v-icon>
            Today's highlight
          </p>
          <v-row class="full-size mx-0">
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              v-for="(item, i) in cardsOneRow"
              :key="i"
            >
              <baseTertiaryCard
              :title="item.title"
              :data="item.data"
              :measure="item.measure"></baseTertiaryCard>
            </v-col>
          </v-row>
          <v-row class="full-size mx-0">
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              v-for="(item, i) in cardsTwoRow"
              :key="i"
            >
              <baseTertiaryCard
              :title="item.title"
              :data="item.data"
              :measure="item.measure"></baseTertiaryCard>
            </v-col>
          </v-row>
        </v-container>
        <div class="white--text text-size-xss px-5 pb-5">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import basePrincipalCard from "@/components/BasePrincipalCard.vue";
import baseSecondaryCard from "@/components/BaseSecondaryCard.vue";
import baseTertiaryCard from "@/components/BaseTertiaryCard.vue";

import { mapState } from "vuex";

export default {
  components: {
    basePrincipalCard,
    baseSecondaryCard,
    baseTertiaryCard,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState([
      "cardsOneRow",
      "cardsTwoRow",
      "days"
    ]),
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(to bottom, #2b2d42 0%, #000000 100%);
}
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
.text-size-md {
  font-size: 30px;
}
.text-size-xss {
  font-size: 10px;
}
</style>
