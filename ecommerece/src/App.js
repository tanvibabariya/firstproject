import './App.css';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Home from './Container/Home/Home';
import { Switch, Route } from 'react-router-dom'
import Shop from './Container/Shop/Shop';
import About from './Container/About/About';
import Shop_detail from './Container/Shop_detail/Shop_detail';
import Shoping_cart from './Container/Shoping_cart/Shoping_cart';
import Check_out from './Container/Check_out/Check_out';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import PublicRoute from './Routing/PublicRoute';
import PrivateRoute from './Routing/PrivateRoute';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute path={"/"} exact component={Home} />
        <PublicRoute path={"/shop"} exact component={Shop} />
        <PublicRoute path={"/about"} exact component={About} />
        <PublicRoute path={"/shop_detail"} exact component={Shop_detail} />
        <PrivateRoute path={"/shoping_cart"} exact component={ Shoping_cart} />
        <PrivateRoute path={"/check_out"} exact component={Check_out} />
        <PublicRoute path={"/blog"} exact component={Blog} />
        <PublicRoute path={"/contact"} exact component={Contact} />
        <PublicRoute path={"/login"} restricted={true} exact component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
