import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Layouts/Header';
import Footer from 'components/Layouts/Footer';
import Home from 'pages/Home';
import About from 'pages/About';
import Posts from 'pages/Posts';
import {
  StyleGlobal,
  StyleWrapper,
  StyleHeader,
  StyleContainer,
  StyleFooter,
} from 'styles/Global.style';

export default function App() {
  return (
    <Router>
      <StyleWrapper>
        <StyleGlobal />
        <StyleHeader>
          <Header />
        </StyleHeader>
        <StyleContainer>
          <div className="inner">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about/:name?/:id?" component={About} />
              <Route path="/posts" component={Posts} />
            </Switch>
          </div>
        </StyleContainer>
        <StyleFooter>
          <Footer />
        </StyleFooter>
      </StyleWrapper>
    </Router>
  );
}
