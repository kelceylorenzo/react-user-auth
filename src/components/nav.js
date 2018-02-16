import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<nav className="blue-grey lighten-1">
			<Link to="/" style={{ marginLeft: '8px' }} className="brand-logo">
				Movie Quotes
			</Link>
			<ul className="right">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about-us">About Us</Link>
				</li>
				<li>
					<Link to="/movie-quote">Movie Quote</Link>
				</li>
				<li>
					<Link to="/sign-in">Sign In</Link>
				</li>
				<li>
					<Link to="/register">Sign Up</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
