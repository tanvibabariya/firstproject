import Layout from './Component/Layout/Layout.js'
import {Route, Switch} from "react-router-dom";
import Medicines from './Container/Medicines/Medicines.js'
import Patients from './Container/Patients/Patients.js';
import { configStore } from './redux/store.js';
import Counter from './Container/Counter/Counter.js';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import UsememoExample from './Component/Layout/Examples/UsememoExample.js';
import UsecallBackExample from './Component/Layout/Examples/UsecallBackExample.js';

function App() { 
  let {store,persistor} = configStore();
  return (
   <>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <Layout>
    <Switch>
      <Route exact path={"/medicines"}  component={Medicines}/>
      <Route  exact path={"/patients"}  component={Patients}/>
      <Route  exact path={"/counter"}  component={Counter}/>
      <Route  exact path={"/usememo"}  component={UsememoExample}/>
      <Route  exact path={"/UsecallBackExample"}  component={UsecallBackExample}/>
    </Switch>
   </Layout>
   </PersistGate>
   </Provider>
    </>
  );
}

export default App;
