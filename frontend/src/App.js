
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutPage from './pages/About-us.js';
import OurBusinessPage from './pages/Our-business.js';
import NewsPage from './pages/News.js';
import ContactPage from './pages/Contact.js';
import ProductPage from './pages/Product.js';
import BlogPagePage from './pages/Blog-page.js';
import ProductInfoPage from './pages/Product-info.js';
import ProductListPage from './pages/Product-list.js';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/About">
            <AboutPage />
          </Route>
          <Route exact path="/ourbusiness">
            <OurBusinessPage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route exact path="/blogpage">
            <BlogPagePage />
          </Route>
          <Route exact path="/productinfo">
            <ProductInfoPage />
          </Route>
          <Route exact path="/productlist">
            <ProductListPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
