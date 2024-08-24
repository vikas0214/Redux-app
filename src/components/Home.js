import React from 'react'
import '../App.css';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
function Home(props) {
    const dispatch=useDispatch()
  return (
    <div><h1>Home Page here.....</h1>

    <div className='main'>
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
            <button onClick={(e)=>dispatch(addItem({name:"Iphone",price:201010}))} className='addButton'>add to cart</button>
        </div>
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
            <button onClick={(e)=>dispatch(addItem({name:"Samsung",price:292929}))} className='addButton'>add to cart</button>
        </div>
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
            <button onClick={(e)=>dispatch(addItem({name:"Xperia",price:12332}))} className='addButton'>add to cart</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home

















