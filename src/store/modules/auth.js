import axios from "axios";
const state = {
  count: 0,
  isAuth: false,
  product: [],
};

const getters = {
  isAuth: (state) => state.auth.isAuth,
};
const actions = {
  async axoiData({ commit }, { id }) {

    const res = await axios.get(
      `http://localhost:3000/drink/` + id
    );
    commit("setProduct", res.data);
  },
};

const mutations = {
  setProduct(state, value) {
    state.product = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
