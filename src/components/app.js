import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import Quote from './quote';
import SignIn from './sign_in';
import Register from './register';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
	<div className="container">
		<Nav />

		<Route exact path="/" component={Home} />
		<Route path="/about-us" component={About} />
		<Route path="/movie-quote" component={Quote} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/register" component={Register} />
	</div>
);

export default App;
