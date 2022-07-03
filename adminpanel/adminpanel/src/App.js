import Layout from './Component/Layout/Layout.js'
import {Route, Switch} from "react-router-dom";
import Medicines from './Container/Medicines/Medicines.js'
import Patients from './Container/Patients/Patients.js';

function App() {
  return (
   <>
   <Layout>
    <Switch>
      <Route exact path={"/medicines"}  component={Medicines}/>
      <Route  exact path={"/patients"}  component={Patients}/>
    </Switch>
   </Layout>
    </>
  );
}

export default App;
