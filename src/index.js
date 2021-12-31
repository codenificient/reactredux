import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import './index.css'

// STORE - GLOBALIZED STATE

// ACTION - INCREMENT
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}
// DECREMENT
const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

// REDUCER
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1

		case 'DECREMENT':
			return state - 1
	}
}

let store = createStore(counter)
// DISPLAY IN THE CONSOLE
store.subscribe(() => console.log(store.getState()))

// DISPATCH
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
