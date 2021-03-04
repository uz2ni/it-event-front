import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    date1 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
    date2 : new Date(new Date().getFullYear(), new Date().getMonth()+3,  new Date().getDate()),
  }
});