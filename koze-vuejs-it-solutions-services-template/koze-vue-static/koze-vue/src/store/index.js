import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        id: "1",
        image: require("../assets/images/products/products-1.jpg"),
        sale: false,
        new: false,
        name: "Technology Book",
        price: 13.25,
      },
      {
        id: "2",
        image: require("../assets/images/products/products-2.jpg"),
        sale: true,
        new: false,
        name: "Think Outside The Box",
        price: 10.25,
      },
      {
        id: "3",
        image: require("../assets/images/products/products-3.jpg"),
        sale: false,
        new: false,
        name: "Adventure",
        price: 20.25,
      },
      {
        id: "4",
        image: require("../assets/images/products/products-4.jpg"),
        sale: false,
        new: false,
        name: "Notebook With Pen",
        price: 40.25,
      },
      {
        id: "5",
        image: require("../assets/images/products/products-5.jpg"),
        sale: false,
        new: false,
        name: "Complete IT Solution",
        price: 43.25,
      },
      {
        id: "6",
        image: require("../assets/images/products/products-6.jpg"),
        sale: false,
        new: true,
        name: "How To Overcome Bug",
        price: 23.25,
      },
      {
        id: "7",
        image: require("../assets/images/products/products-7.jpg"),
        sale: false,
        new: false,
        name: "Complete Guide To Success",
        price: 53.25,
      },
      {
        id: "8",
        image: require("../assets/images/products/products-6.jpg"),
        sale: false,
        new: true,
        name: "Note Book Mockup",
        price: 47.25,
      },
    ],
    cart: [],
  },

  getters: {
    total: (state) => {
      if (state.cart.length > 0) {
        return state.cart
          .map((item) => item.totalPrice)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    },
  },

  mutations: {
    addToCart(state, payload) {
      let addedItem = state.items.find((item) => item.id === payload.id);

      let existItem = state.cart.find((item) => item.id == payload.id);

      if (existItem) {
        existItem.productQuantity++;
        existItem.totalPrice += addedItem.price;
      } else {
        return state.cart.push(payload);
      }
    },

    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
  },
  actions: {},
});
