import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, cost, image } = action.payload;
        const existingItem = state.items.find((item) => item.name === name);
        
        if(existingItem){
            existingItem.quantity++;
        } else {
            state.items.push({name, cost, image , quantity: 1})
        }
    },
    removeItem: (state, action) => {
        const {name} = action.payload;
        const newItems = state.items;
        //newItems.splice(existingItem, 1);
        newItems.filter((item) => item.name !== name);
        
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const existingItem = state.items.find((item) => item.name === name);

        if(existingItem) {
            existingItem.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
