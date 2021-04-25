import React from 'react';
import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {withRouter} from 'react-router';
import { ConnectedRouter } from "connected-react-router";
import Main from './Main';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Route path="/" component={Main}/>
    </React.Fragment>
  );
}

export default withRouter(App);