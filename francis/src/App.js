import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer";
import './main.css';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Ubicaciones from './pages/Ubicaciones';
import Calete from './pages/Calete';
import Rio from './pages/Rio';
import Vive from './pages/Vive';
import Contacto from "./pages/Contacto";


function App() {
  return (
    <>
    <Router basename="https://francisliving.mx">
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/nosotros' exact component={ Nosotros }/>
        <Route path='/ubicaciones' exact component={ Ubicaciones }/>
        <Route path='/calete' exact component={ Calete }/>
        <Route path='/vive-en-francis' exact component={ Vive }/>
        <Route path='/rio' exact component={ Rio} />
        <Route path='/contacto' exact component={ Contacto }/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;