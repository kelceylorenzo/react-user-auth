import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

const Nav = (props) => {
	function renderLinks() {
		if (props.auth) {
			return (
				<li>
					<button className="btn cyan darken-3" onClick={props.signOut}>
						Log Out
					</button>
				</li>
			);
		}

		return [
			<li key="0">
				<Link to="/sign-in">Sign In</Link>
			</li>,
			<li key="1">
				<Link to="/register">Sign Up</Link>
			</li>
		];
	}

	return (
		<nav className="cyan darken-3">
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
				{renderLinks()}
			</ul>
		</nav>
	);
};

function mapStateToProps(state) {
	return {
		auth: state.user.auth
	};
}

export default connect(mapStateToProps, { signOut })(Nav);
