import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { db } from "../../firebase";
import Order from "../orders/Order"; // Import the Order component

const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.uid) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const unsubscribe = db
      .collection("users") // ✅ Ensure "users" (not "user")
      .doc(user.uid)
      .collection("orders")
      .where("status", "==", "paid") // Fetch only paid orders
      .orderBy("created", "desc") // Sort by most recent orders
      .onSnapshot(
        (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching orders:", error);
          setError("Failed to load orders. Please try again later.");
          setLoading(false);
        }
      );

    return () => unsubscribe(); // Cleanup listener
  }, [user]);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      {loading ? (
        <p>Loading your orders...</p>
      ) : error ? (
        <p>{error}</p>
      ) : orders.length > 0 ? (
        orders.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>You have no paid orders yet.</p>
      )}
    </div>
  );
};

export default Orders;

// import { useContext, useEffect, useState } from "react";
// import './Orders.css';
// import ShoppingContext from "../../context/shopping/shoppingContext";
// import { db } from "../../firebase";
// import CheckOutProduct from "../checkout/CheckOutProduct";

// const Orders = () => {
//   const shoppingContext = useContext(ShoppingContext);
//   const { user } = shoppingContext;
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (!user?.uid) {
//       setOrders([]);
//       return;
//     }

//     const unsubscribe = db
//       .collection('users')
//       .doc(user.uid)
//       .collection('orders')
//       .where('status', '==', 'paid') // Only fetch paid orders
//       .orderBy('created', 'desc')
//       .onSnapshot((snapshot) => {
//         setOrders(snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         })));
//       });

//     return () => unsubscribe(); // Cleanup Firestore listener
//   }, [user]);

//   // Extract all items from paid orders
//   const allOrderedItems = orders.flatMap(order => order.data.basket || []);

//   return (
//     <div className='orders'>
//       <h1>Your Ordered Items</h1>
//       <div className='orders-container'>
//         {allOrderedItems.length > 0 ? (
//           allOrderedItems.map((item, index) => (
//             <CheckOutProduct
//               key={index} // Using index as key because IDs might be duplicated across orders
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))
//         ) : (
//           <p>You have no paid orders yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;

// const Orders =() =>{
//   const shoppingContext = useContext(ShoppingContext);
//   const { basket, getBasketTotal} = shoppingContext;
//   return(
//     <div>
//        <div className="payment-section">
//         <div className="payment-title">
//           <h3>Your Orders</h3>
//         </div>
//         <div className="payment-items">
//           {basket.map((item) => (
//             <CheckOutProduct
//               key={item.id}
//               id={item.id}
//               image={item.image}
//               description={item.description}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))}
//         </div>
//       </div>
//        <div className="payment-price-container">
//                     <CurrencyFormat
//                       renderText={(value) => <h3>Order Total: {value}</h3>}
//                       decimalScale={2}
//                       value={getBasketTotal(basket)}
//                       displayType={"text"}
//                       thousandSeperator={true}
//                       prefix={"$"}
//                     />
//                     </div>
//     </div>
//   )
// }
// export default Orders;