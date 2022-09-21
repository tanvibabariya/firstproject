import './App.css';
import Layout from './Component/Layout/Layout.js'
import {Route, Switch} from "react-router-dom";
import Product from './Container/Product/Product';
import Category from './Container/Category/Category';
import {Provider} from 'react-redux';
import { configStore } from './redux/store';

function App() {
  let store = configStore();
  return (
   <>
   <Provider store={store}>
   <Layout>
   <Switch>
    <Route path={'/product'} exact component={Product}></Route>
    <Route path={'/category'} exact component={Category}></Route>
   </Switch>
   </Layout>
   </Provider>
   </>
  );
}

export default App;
