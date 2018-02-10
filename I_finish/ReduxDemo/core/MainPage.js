"use strict";

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// main reduser
import combinedReducer from './reducers.js';

//component CounterButton
import CounterButton from '../components/CounterButton/CounterButton';

let store=createStore(combinedReducer);

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <h1>демо работы Redux</h1>
              <CounterButton counterid={111} />
              <CounterButton counterid={222} />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
