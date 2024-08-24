import React from 'react'
import { useSelector } from 'react-redux'

function Header(props) {
    const count=useSelector(state=>state);
    console.log(count);
  return (
    <div className='cart'>
        <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_4JVbjhmREhpaKQ0B3ipiSrtydJV0sIxiw&s'/>{count.cart.length}</span>

    </div>
  )
}

export default Header