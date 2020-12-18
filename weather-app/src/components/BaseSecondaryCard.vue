<template>
    <div>
        <v-card width="100%" height="150" color="#31334a">
            <v-container class="text-center">
                <p class="grey--text text-size-xs">Monday</p>
                <v-img
        class="mx-auto"
        src="../assets/icons/006-cloudy day.svg"
        width="50"
        height="50"
      ></v-img>
      <v-row class="pt-4">
          <span class="mx-auto white--text text-size-xs">6
              <span class=" white--text text-size-xss">℃</span></span>
          <span class="mx-auto grey--text text-size-xs">15
              <span class=" grey--text text-size-xss">℃</span></span>
      </v-row>
            </v-container>
            

        </v-card>
    </div>
</template>
<script>
export default {
  name: "BaseSecondaryCard",
};
</script>
<style scoped>
.text-size-xs{
  font-size: 15px;
}
.text-size-xss{
  font-size: 13px;
}
</style>