import './App.css'
import './components/styles/Global.css'
import './components/styles/Cart.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Restaurant from './pages/Restaurant'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Restaurants from './pages/Restaurants'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CardContext'
import { AuthProvider } from './contexts/AuthContext'
import Order from './pages/Order'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App () {
  return (
    <div className='App'>
      <Router>
        <CartProvider>
          <AuthProvider>
            <Header />
            <Cart />
            <header className='App-header'>
              <Switch>
                <Route path='/Cancel'>
                  <Cancel />
                </Route>
                <Route path='/Success'>
                  <Success />
                </Route>
                <Route path='/Order'>
                  <Order />
                </Route>
                <Route path='/restaurant/:id'>
                  <Restaurant />
                </Route>
                <Route path='/auth'>
                  <Auth />
                </Route>
                <Route path='/restaurants'>
                  <Restaurants />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </header>
          </AuthProvider>
        </CartProvider>
      </Router>
    </div>
  )
}

export default App
