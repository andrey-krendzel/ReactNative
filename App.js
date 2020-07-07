import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import React, { Component } from 'react';
import Main from './components/MainComponent.js';

const store = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

//json-server --watch db.json -p 3001 -d 2000 --host 192.168.43.231