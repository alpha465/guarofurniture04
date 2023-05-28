import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import OurProducts from './views/our-products'
import ContactUs from './views/contact-us'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={OurProducts} exact path="/our-products" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
