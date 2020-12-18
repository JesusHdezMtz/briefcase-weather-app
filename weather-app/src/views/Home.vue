<template>
<div class="background full-size">
    <v-row class="full-size mx-0">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="pa-0 ma-0">
            <basePrincipalCard></basePrincipalCard>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8"  class="pa-0 ma-0 ">
            <v-container class="px-5">
              <v-row>
                 <v-col cols="12" xs="12" sm="6" md="3" lg="3" xl="3" 
                 v-for="(item, i) in days" :key="i">
                   <baseSecondaryCard></baseSecondaryCard>
                 </v-col>
              </v-row>
              </v-container>
              <v-container class="px-2">
              <v-row class="full-size mx-0">
                 <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" 
                 v-for="(item, i) in cardsOneRow" :key="i">
                   <baseTertiaryCard></baseTertiaryCard>
                 </v-col>
              </v-row>
              <v-row class="full-size mx-0">
                 <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" 
                 v-for="(item, i) in cardsTwoRow" :key="i">
                   <baseTertiaryCard></baseTertiaryCard>
                 </v-col>
              </v-row>
            </v-container>
        </v-col>
    </v-row>
</div>
</template>

<script>
import basePrincipalCard from "@/components/BasePrincipalCard.vue";
import baseSecondaryCard from "@/components/BaseSecondaryCard.vue";
import baseTertiaryCard from "@/components/BaseTertiaryCard.vue";

export default {
  components: {
    basePrincipalCard,
    baseSecondaryCard,
    baseTertiaryCard,

  },
  data: () => ({
    days: [
      { mensaje: 'Foo' },
      { mensaje: 'Bar' },
      { mensaje: 'Bar' },
      { mensaje: 'Bar' },
    ],
    cardsOneRow: [
      { mensaje: 'Foo' },
      { mensaje: 'Bar' },
    ],
    cardsTwoRow: [
      { mensaje: 'Foo' },
      { mensaje: 'Bar' },
    ],
  }),
};
</script>

<style scoped>
.background {
  background: linear-gradient(
    to bottom,
    #2B2D42 0%,#000000 100%
  );
}
.full-size{
  width: 100%;
  height: 100%;
}
</style>
