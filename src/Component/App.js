import React from "react";
import history from '../history';
import { Router, Route } from "react-router-dom";

import StreamCreate from '../Component/streams/StreamCreate';
import StreamDelete from '../Component/streams/StreamDelete';
import StreamEdit from '../Component/streams/StreamEdit';
import StreamList from '../Component/streams/StreamList';
import StreamShow from '../Component/streams/StreamShow';

import Header from './Header';


const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />

      </div>
    </Router>
  );
};

export default App;
