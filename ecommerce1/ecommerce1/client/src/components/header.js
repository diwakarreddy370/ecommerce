import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import Home from './home'
const Header = () => {
    return (<>
        <div className='container'>
         <div className='h11'><h1>THE</h1> <h1 style={{color:"red"}}>GAMERS</h1><h1> POINT</h1></div>
          <div className='bottomline'>
            <div className='textContainer'>
              <h3 className='text'> One place for every Player can get all things</h3>
                   </div>
                    </div>
                    </div>

        <div className='container3'>
        <div className='contains2'>
        <span> <Link to='/'><button className=''>HOME</button></Link></span>
        <span> <Link to='/update'><button className=''>CMS/Update admins</button></Link></span>
        <span > <Link to='/cart'><button className='cartBtn'>MY Cart</button></Link></span>
        </div>
        </div>
   </>   );
      
}

export default Header