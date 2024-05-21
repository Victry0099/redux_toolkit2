import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { increseItem, decriseItem, removeItem } from '../cart/cartSlice';
import {useDispatch} from "react-redux"
  
const CartItem = ({id, img, price, title, cartAmount}) => {

  const dispatch = useDispatch()
  return (
    
     <div style={{display: "flex", justifyContent: "space-around"}}>
      <div>
      <p>{title}</p>
      <img src={img} alt="no image" style={{height:"200px", width: "200px"}} />
      <p>{price}</p>
      <button onClick={()=> dispatch(removeItem({id}))}>Remove</button>
      </div>
      <div style={{"marginTop": "100px"}} >
        <FaChevronUp onClick={()=>dispatch(increseItem({id}))}/>
        
      <p>{cartAmount}</p>
      <FaChevronDown onClick={()=>dispatch(decriseItem({id}))}/>

      </div>
      
     </div>
  
  )
}

export default CartItem