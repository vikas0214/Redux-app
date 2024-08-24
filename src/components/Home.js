import React from 'react'
import '../App.css';
function Home() {
  return (
    <div><h1>Home Page here.....</h1>
    <div className='cart'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_4JVbjhmREhpaKQ0B3ipiSrtydJV0sIxiw&s'/>

    </div>
    <div className='product-wrapper'>
        <div className='image'>
            <img src='https://5.imimg.com/data5/SELLER/Default/2023/3/296178265/EX/FQ/OZ/186724856/vivo-mobile-phone.jpg' alt='image here'/>
        </div>
        <div className='text-description'>
            <span>
                Phone
            </span>
            <span>
                price - $2000
            </span>
        </div>
        <div className='button-wrapper'>
            <button className='addButton'>add to cart</button>
        </div>
    </div>
    </div>
  )
}

export default Home