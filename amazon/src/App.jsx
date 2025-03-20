import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Header from "./components/layout/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import Not_found from "./components/Not_found/Not_found";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useEffect, useContext } from "react";
import { auth } from "./firebase";
import Checkout from "./components/checkout/Checkout";
import Payment from "./components/payment/Payment";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  'pk_test_51R3BOvLmYwos7MVP66FcxymPbx9VY6L3hS4B5mBCu0FGfJ3KOQsGoWnnkZjHNt77Gj23kRFaW5c3fAowhQJV1WtJ00oweYw3sS'
);


function App() {
  //managing state changed  authentication
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(()=> {
     auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>" , authUser);
      if(authUser){
        setUser(authUser)
      } else{
        setUser(null)
      }
     })
  },[])

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/checkout" exact>
            <Checkout/>
          </Route>

          <Route path="/payment" exact>
           <Elements stripe={promise}>
           <Payment />
           </Elements>
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/orders" exact>
            <Orders />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/productDetails/:id">
            <ProductDetails />
          </Route>

          <Route path="*">
            <Not_found />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
