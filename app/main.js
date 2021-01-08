import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Nominees, Results, SearchForm } from './components'
import store from './store';

render(
  <Provider store={store}>
      <div className='container' >
          <div className='header'>
            <h1>Welcome to the Shoppies</h1>
          </div>
          <div className='body'>
            <SearchForm/>
            <div className='box'>
              <Results/>
              <Nominees/>
            </div>
          </div>
      </div>
  </Provider>,
  document.getElementById('main')
)
