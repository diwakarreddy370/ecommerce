import React from 'react'
import Header from './header'
import '../styles/home.css'
// import {Link} from 'react-router-dom'
import Shopping from './shopping'
// import Card from './cards'.
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='container1'>
        <center>
        {/* <Link to='/shopping'>
        <button className='homebutton'>Go to Shopping</button>
        </Link> */}
         {/* <Link to='/update'>
        <button className='homebutton'>Go to Update</button>
        </Link> */}
        </center>
      </div>
      <Shopping />
      {/* <Card /> */}
    </div>
  )
}

export default Home