import React from 'react';

import About from './About/About';
import DeltailProduct from './Single/DeltailProduct';
import ContactForm from './Contact/ContactForm';
import ProductLeft from './Shop/ProductLeft';
import Payment from './Payment/Payment';
import Error from './Error/Error';
import Index from './Index/Index';
import Cart from './Checkout/Cart'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SingUp from './Admin/SingUp';
import SingIn from './Admin/SingIn';
import Protect from './Admin/Protect';
import Login from './Admin/Login';
import Header from './Header/Header';
import Login_admin from './Admin/Login_admin';
import Admins from './Admin/inAdmin';

class App extends React.Component {
   render() {
      return (
         <Router>
            <div className="App">
               {/* <Admin /> */}
               <Switch>
                  <Route exact path="/SingIn" component={SingIn} />
                  <Route exact path="/Register" component={SingUp} />
                  <Route exact path="/Index" component={Index} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/404" component={Error} />
                  <Route exact path="/Contact" component={ContactForm} />
                  <Route exact path="/Shop" component={ProductLeft} />
                  <Route exact path="/Checkout" component={Cart} />
                  <Route exact path="/Payment" component={Payment} />
                  <Route exact path="/Single" component={DeltailProduct} />
                  <Route exact path="/Admin" component={Login_admin} />
                  <Route exact path="/hung" component={Admins} />
                  {/* <Route exact path="/in" component={Admin} /> */}
                  <Route path="/add" >
                     <Protect Cmp={SingUp} />
                  </Route>
                  <Route path="/Login" >
                     <Protect Cmp={Login} />
                  </Route>
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/Header" component={Header} />
               </Switch>

            </div>
         </Router>
      );
   }
}
export default App;