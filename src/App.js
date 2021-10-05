import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Instructors from './components/Instructors/Instructors';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/instructors">
              <Instructors></Instructors>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>          
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>      
      </BrowserRouter>
    </div>
  );
}

export default App;
