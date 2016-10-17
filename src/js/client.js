import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import Movies from './components/Movies';

require("../css/style.scss");

store.subscribe(()=>{
	console.log(store.getState());
});

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<Route path="Movies" name="Movies" component={Movies}></Route>
					</Route>
				</Router>
			</Provider>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
