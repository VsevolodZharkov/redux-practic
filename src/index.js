import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'react';
import { App } from 'components/App';
const defState = {
	cash: 0,
}

const reducer = (state = defState, action) => {
	switch(action.type){
		case 'ADD':
			return { ...state, case: state.cash + action.payload}

		case 'GET':
			return { ...state, case: state.cash - action.payload}

		default:
			return state;
	}

}
const store = createStore(reducer);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode> 
);
