import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Today
    title: 'Winterfell',
    location_type: 'Castle',
    time: 'Unknown date',
    weather_state_name: 'Snow',
    weather_state_abbr: 'sn',
    the_temp: -5,
    min_temp: -20,
    max_temp: -2,

    cardsOneRow: [
      {
        title: "Wind Speed",
        data: "15",
        measure: "mph",
      },
      {
        title: "Humidity",
        data: "89",
        measure: "%",
      },
    ],
    cardsTwoRow: [
      {
        title: "Visibility",
        data: "1.8",
        measure: "miles",
      },
      {
        title: "Air Pressure",
        data: "998",
        measure: "mb",
      },
    ],

    days: [{
      time: 'Unknown date',
      weather_state: 'sn',
      min_temp: -5,
      max_temp: -3,
    },
    {
      time: 'Unknown date',
      weather_state: 'sn',
      min_temp: -10,
      max_temp: -5,
    },
    {
      time: 'Unknown date',
      weather_state: 'sn',
      min_temp: -20,
      max_temp: -4,
    },
    {
      time: 'Unknown date',
      weather_state: 'sn',
      min_temp: -10,
      max_temp: 2,
    }],
  },
  mutations: {
    setValues(state, data) {
      state.title = data[0];
      state.location_type = data[1];
      state.time = data[2];
      state.weather_state_name = data[3];
      state.weather_state_abbr = data[4];
      state.the_temp = data[5];
      state.min_temp = data[6];
      state.max_temp = data[7];
      state.cardsOneRow[0].data = data[8];
      state.cardsTwoRow[0].data = data[9];
      state.cardsTwoRow[1].data = data[10];
      state.cardsOneRow[1].data = data[11];
    },
    setValuesTomorrow(state, data) {
      state.days[0].time = data[0];
      state.days[0].weather_state = data[1];
      state.days[0].min_temp = data[2];
      state.days[0].max_temp = data[3];
    },
    setValuesSecond(state, data) {
      state.days[1].time = data[0];
      state.days[1].weather_state = data[1];
      state.days[1].min_temp = data[2];
      state.days[1].max_temp = data[3];
    },
    setValuesThird(state, data) {
      state.days[2].time = data[0];
      state.days[2].weather_state = data[1];
      state.days[2].min_temp = data[2];
      state.days[2].max_temp = data[3];
    },
    setValuesFourth(state, data) {
      state.days[3].time = data[0];
      state.days[3].weather_state = data[1];
      state.days[3].min_temp = data[2];
      state.days[3].max_temp = data[3];
    },
  },
  actions: {
  },
  modules: {
  }
})
