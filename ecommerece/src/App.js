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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/shop"} exact component={Shop} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/shop_detail"} exact component={Shop_detail} />
        <Route path={"/shoping_cart"} exact component={ Shoping_cart} />
        <Route path={"/check_out"} exact component={Check_out} />
        <Route path={"/blog"} exact component={Blog} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/login"} exact component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
