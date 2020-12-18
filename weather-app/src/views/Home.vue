<template>
<div class="background full-size">
    <v-row class="full-size mx-0">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="pa-0 ma-0">
            <basePrincipalCard></basePrincipalCard>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8"  class="pa-0 ma-0">
            
        </v-col>
    </v-row>
</div>
</template>

<script>
import basePrincipalCard from "@/components/BasePrincipalCard.vue";

export default {
  components: {
    basePrincipalCard,

  },
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
