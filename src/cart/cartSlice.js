import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../componets/cartItems"

const initialState = {
    cartItems :cartItems,
    amount :10,
    total :0,
    isLoading: true,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cartItems =[]
        },

        removeItem: (state, action)=>{
           
            state.cartItems= state.cartItems.filter((item)=> item.id !== action.payload.id)

        },
        increseItem: (state, action)=>{
        
         const cartItem = state.cartItems.find((item)=>item.id === action.payload.id)
         cartItem.cartAmount=cartItem.cartAmount + 1
        //  console.log("increseItem",cartItem)
         
        },
        decriseItem: (state, action)=>{
            const cartItem = state.cartItems.find((item)=>item.id === action.payload.id)
            cartItem.cartAmount=cartItem.cartAmount - 1
        },

        calculateTotal: (state, action)=>{
          let amount =0
          let total = 0
            state.cartItems.forEach((item)=>{
             amount += item.cartAmount
             total += item.cartAmount * item.price;
            })

            state.amount = amount
            state.total = total;

        }
            
        
    }
})

console.log(cartSlice)
export const {clearCart, increseItem ,decriseItem, calculateTotal, removeItem} = cartSlice.actions
export default cartSlice.reducer;