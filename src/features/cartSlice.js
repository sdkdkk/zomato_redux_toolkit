const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add(state, action) {
    //   state.push(action.payload);
    // },
    add(state, action) {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state[existingIndex],
          product_qty: state[existingIndex].product_qty + 1,
        };
        alert("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, product_qty: 1 };
        state.push(tempProductItem);
        alert("Product added to cart", {
          position: "bottom-left",
        });
      }
    },


    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },


    handleDecrement(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[itemIndex].product_qty > 1) {
        state[itemIndex].product_qty -= 1;

      } else if (state[itemIndex].product_qty === 1) {
        const nextCartItems = state.filter(
          (item) => item.id !== action.payload.id
        );

        state = nextCartItems;

        return state.filter((item) => item.id !== action.payload);
      }
    },

    // handleDecrement(state, action) {
    //   console.log("action");
    //   console.log(action);
    //   let newItem = action.payload;
    //   let existingItem = state.find((item) => item.id === newItem.id);
    //   existingItem.product_qty = parseInt(existingItem.product_qty) - 1;
    //   // existingItem.price =
    //   //   parseInt(existingItem.price) - parseInt(newItem.price);
    // },

    handleIncrement(state, action) {
      console.log("action");
      console.log(action);
      let newItem = action.payload;
      let existingItem = state.find((item) => item.id === newItem.id);
      existingItem.product_qty = parseInt(existingItem.product_qty) + 1;
      // existingItem.price =
      //   parseInt(existingItem.price) + parseInt(newItem.price);
    },
  },
});

export const { add, remove, handleDecrement, handleIncrement } =
  cartSlice.actions;
export default cartSlice.reducer;
