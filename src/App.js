import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, login } from './actions'
import './App.css'

function App() {
	const counter = useSelector((state) => state.counter)
	const logged = useSelector((state) => state.isLogged)
	const dispatch = useDispatch()
	return (
		<div className="App">
			<h1>Hello Redux</h1>
			<button className="btn btn-info" onClick={() => dispatch(increment(5))}>
				Increment
			</button>&nbsp;
			<button className="btn btn-warning" onClick={() => dispatch(decrement(3))}>
				Decrement
			</button>{' '}
			&nbsp;
			<button className="btn btn-success" onClick={() => dispatch(login())}>
				{logged ? "Logout" : "Login Now"}
			</button>{' '}
			<br />
			<h3 className="mt-4">Counter: {counter}</h3>
			<h3>Logged In Value: {logged ? 'User is authenticated' : 'Not logged in'}</h3>
		</div>
	)
}

export default App
