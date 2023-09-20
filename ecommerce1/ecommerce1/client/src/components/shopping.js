// import React from 'react'
// import Header from './header'
// import Card from './cards'
// import '../styles/shopping.css'
// import games from './intialdata'
// const Shopping = () => {
//     const staticData = games
//   return (
//     <div>
    
//       <div className='container2'>
//         {
//             staticData.map((game, index)=>{
//                 return (<Card key={index} data={game}/>)
//             })
//         }
//       </div>
//     </div>
//   )
// }

// export default Shopping
// import React from 'react';
// import Cartcard from './cartcard';

// const Shopping = (props) => {
//   const { cartItems, removeFromCart } = props;

//   // Initialize cartItems with an empty array if it is null
//   const items = cartItems || [];

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {items.length > 0 ? (
//         items.map((item) => (
//           <Cartcard
//             key={item.id}
//             gamename={item.gamename}
//             price={item.price}
//             image={item.image}
//             removeFromCart={() => removeFromCart(item.id)}
//           />
//         ))
//       ) : (
//         <p>No items in the cart</p>
//       )}
//     </div>
//   );
// };

// export default Shopping;

import React from 'react'
import Header from './header'
import Card from './cards'
import '../styles/shopping.css'
import games from './intialdata'
const Shopping = () => {
    const staticData = games
  return (
    <div>
    
      <div className='container2'>
        {
            staticData.map((game, index)=>{
                return (<Card key={index} data={game}/>)
            })
        }
      </div>
    </div>
  )
}

export default Shopping;