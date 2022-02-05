import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {HomePage} from './pages/home-page/home-page.js';
import {Header} from './components/header';
import {Provider} from 'react-redux';
import { store } from './redux';
import { ToyPage } from './pages/toy-page';
import { OrderPage } from './pages/order-page';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route exact path='/app/:title'>
              <ToyPage/>
            </Route>
            <Route exact path='/order'>
              <OrderPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
