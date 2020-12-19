import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Today
    title: '',
    location_type: '',
    time: '',
    weather_state_name: '',
    weather_state_abbr: '',
    the_temp: 0,
    min_temp: 0,
    max_temp: 0,
    wind_speed: 0,
    visibility: 0,
    air_pressure: 0,
    humidity: 0,

    //tomorrow
    tomorrow_time: '',
    tomorrow_weather_state: '',
    tomorrow_min_temp: 0,
    tomorrow_max_temp: 0,
    //second day
    second_time: '',
    second_weather_state: '',
    second_min_temp: 0,
    second_max_temp: 0,
    //third day
    third_time: '',
    third_weather_state: '',
    third_min_temp: 0,
    third_max_temp: 0,
    //fourth day
    fourth_time: '',
    fourth_weather_state: '',
    fourth_min_temp: 0,
    fourth_max_temp: 0,

  },
  mutations: {
    setValues(state, data){
        state.title = data[0];
        state.location_type = data[1];
        state.time = data[2];
        state.weather_state_name = data[3];
        state.weather_state_abbr = data[4];
        state.the_temp = data[5];
        state.min_temp = data[6];
        state.max_temp = data[7];
        state.wind_speed = data[8];
        state.visibility = data[9];
        state.air_pressure = data[10];
        state.humidity = data[11];
    }
  },
  actions: {
  },
  modules: {
  }
})
