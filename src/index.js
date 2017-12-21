import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppOld from 'Components/AppOld';
import appReducers from 'Reducers';

let store = createStore(appReducers);

render(
    <Provider store={store}>
        <AppOld store={store}/>
    </Provider>,
    document.getElementById('root')
);