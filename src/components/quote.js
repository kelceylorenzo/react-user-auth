import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

class Quote extends Component {
	componentDidMount() {
		this.props.getQuote();
	}

	render() {
		return (
			<div className="center-align">
				<h1>Here is a movie quote:</h1>
				<h3>{this.props.quote}</h3>
				<button onClick={this.props.getQuote} className="btn cyan darken-3">
					Next Quote
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		quote: state.movie.quote
	};
}

export default connect(mapStateToProps, { getQuote })(Quote);
