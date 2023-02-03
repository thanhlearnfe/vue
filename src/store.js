import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      count: 1000,
      transtion: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTranstion(state,value){
      state.transtion = value;
    }
  },
  actions: {
    async axoiData({ commit }, { id }) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/` + id
      );
        commit("setTranstion", res.data)
      console.log(res.data);
    },
  },
});

export default store;
