import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';
import { signIn } from '../actions';

class SignIn extends Component {
	handleSignIn(values) {
		console.log('Sign In Form Submitted', values);

		this.props.signIn(values);
	}

	render() {
		//handleSubmit comes from redux-form
		const { handleSubmit } = this.props;

		return (
			<div>
				<h1 className="center-align">Sign In</h1>
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card">
							<div className="card-content">
								<form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
									<Field
										name="email"
										placeholder="Enter Your E-Mail"
										component={renderInput}
										type="email"
									/>
									<Field
										name="password"
										placeholder="Enter Your Password"
										component={renderInput}
										type="password"
									/>
									<button className="btn cyan darken-3">Sign In</button>
									<p className="red-text center-align">{this.props.authError}</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SignIn = reduxForm({
	form: 'sign-in-form'
})(SignIn);

function mapStateToProps(state) {
	return {
		authError: state.user.error
	};
}

export default connect(mapStateToProps, { signIn })(SignIn);
