export const state = () => ({
  items: [],
});

export const mutations = {
  addToCart(state, id) {
    state.items.push({
      id: id,
      quantity: 1,
    });
  },
  incrementItem(state, id) {
    state.items.find((item) => item.id === id).quantity++;
  },
};

export const actions = {
  addToCart({ commit, state }, id) {
    const found = state.items.find((item) => item.id === id);
    if (found) {
      commit("incrementItem", id);
    } else {
      commit("addToCart", id);
    }
  },
};
