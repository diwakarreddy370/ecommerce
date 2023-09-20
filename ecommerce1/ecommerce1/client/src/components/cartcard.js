// import React, { useContext } from 'react';
// import '../styles/cart.css';
// import '../styles/cartcard.css';
// import Header from './header';
// import Cartcard from './cartcard';
// import { CartContext } from './cartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const handleRemoveFromCart = (id) => {
//     removeFromCart(id);
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         {cartItems.length > 0 ? (
//           cartItems.map((item, index) => (
//             <Cartcard
//               key={index}
//               gamename={item.gamename}
//               price={item.price}
//               image={item.image}
//               removeFromCart={() => handleRemoveFromCart(item.id)}
//             />
//           ))
//         ) : (
//           <div className="empty-cart">Your cart is empty.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import '../styles/cartcard.css';

const Cartcard = (props) => {
  const { gamename, price, image, removeFromCart, pay } = props;

  return (
    <center>
      <div className="card" style={{ width: '250px', height: '250px' }}>
        <h3>{gamename}</h3>
        <img src={image} alt={gamename} style={{ width: '40%', height: '50%' }} />
        <p>Price: {price}</p>
        <div className="buttonContainer">
          <span className='space'>
            <button onClick={removeFromCart}>Remove from Cart</button>
          </span>
<span className='space'>
            <button onClick={pay}>Pay Now</button>
          </span>
        </div>
      </div>
    </center>
  );
};

export default Cartcard;