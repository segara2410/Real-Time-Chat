import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Home/Home';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/chat" exact component={Chat} />
  </Router>
);

export default App;