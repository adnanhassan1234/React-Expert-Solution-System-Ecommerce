import Navbar from "./Navbar.jsx";
import Home from "./Home";
import { Switch, Route, Routes, Redirect } from "react-router-dom";
import Footer from "./Footer";
import SingleProduct from "./components/SingleProduct.js";
import Cart from "./components/Cart.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singleproduct/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
