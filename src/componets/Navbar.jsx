import React from 'react'
import {useSelector} from "react-redux"

const Navbar = () => {
const {amount } = useSelector((state)=>state.cart)

  return (
    <div>
      <h1>Redux Toolkit</h1>

      <p>Amaount: {amount}</p>
    </div>
  )
}

export default Navbar
