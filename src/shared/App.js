import React from 'react';
import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {withRouter} from 'react-router';
import { ConnectedRouter } from "connected-react-router";
import {history } from "../redux/configStore"
import Header from '../components/Header';
import PostList from '../pages/PostList';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}/>
      </ConnectedRouter>
      
    </React.Fragment>
  );
}

export default App;