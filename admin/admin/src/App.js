import './App.css';
import Layout from './Component/Layout/Layout.js'
import {Route, Switch} from "react-router-dom";
import Product from './Container/Product/Product';

function App() {
  return (
   <>
   <Layout>
   <Switch>
    <Route path={'/product'} exact component={Product}></Route>
   </Switch>
   </Layout>
   </>
  );
}

export default App;
