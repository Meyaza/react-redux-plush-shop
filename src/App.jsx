import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PushPage from './pages/push-page/push-page';
import Footer from './components/footer/footer';
import {HomePage} from './pages/home-page/home-page';
import {Header} from './components/header';
import { OrderPage } from './pages/order-page';

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route exact path='/order'>
              <OrderPage/>
            </Route>
            <Route exact path='/push'>
              <PushPage/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
