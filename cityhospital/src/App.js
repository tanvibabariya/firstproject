import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Department from './Container/Department';
import Doctors from './Container/Doctors/Doctors';
import Home from './Container/Home';
import Login from './Container/Login/Login';
import Medicines from './Container/Medicines/Medicines';
import Appointment from './Container/Appointment/Appointment';
import ListAppointment from './Container/ListAppointment/ListAppointment';
import PublicRoute from './Routing/PublicRoute';
import PrivateRoute from './Routing/PrivateRoute';
import { ThemeProvider } from './context/Themecontext';
// import Counter from './Container/Counter/Counter';
// import Userefexample from './Component/Userefexample/Userefexample';
import {store} from "./redux/store"
import { Provider } from "react-redux";


function App() {

  return (
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <Switch>
            <PublicRoute exact path={"/"} component={Home} />
            <PublicRoute exact path={"/department"} component={Department} />
            {/* <PublicRoute  exact path={"/counter"} component={Counter}/> */}
            <PublicRoute exact path={"/medicines"} component={Medicines} />
            <PublicRoute exact path={"/doctors"} component={Doctors} />
            <PublicRoute exact path={"/about"} component={About} />
            <PublicRoute exact path={"/contact"} component={Contact} />
            <PublicRoute exact path={"/login"} restricted={true} component={Login} />
            <PrivateRoute exact path={"/appointment"} component={Appointment} />
            <PrivateRoute exact path={"/listappointment"} component={ListAppointment} />
          </Switch>
          <Footer />

        </ThemeProvider>
      </Provider>

      {/* <Userefexample/> */}
    </div>
  );
}

export default App;
