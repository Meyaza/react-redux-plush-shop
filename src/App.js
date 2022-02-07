import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {HomePage} from './pages/home-page/home-page.js';
import {Header} from './components/header';
import {Provider} from 'react-redux';
import { store } from './redux';
import { OrderPage } from './pages/order-page';
import PushPage from './pages/push-page/push-page.js';

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
            <Route exact path='/order'>
              <OrderPage/>
            </Route>
            <Route exact path='/push'>
              <PushPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
