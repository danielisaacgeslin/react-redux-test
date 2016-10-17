import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import Movies from './components/Movies.container';
import Contact from './components/Contact.container';

require("../css/style.scss");

//store.subscribe(()=>console.log(store.getState()));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<IndexRoute component={Movies}/>
						<Route path="Movies" name="Movies" component={Movies}></Route>
						<Route path="Contact" name="Contact" component={Contact}></Route>
					</Route>
				</Router>
			</Provider>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
