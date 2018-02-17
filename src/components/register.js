import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../helpers';

class Register extends Component {
	handleSignUp(values) {
		console.log('Sign Up Form Submitted', values);
	}

	render() {
		//handleSubmit came from redux-form
		const { handleSubmit } = this.props;

		return (
			<div>
				<h1 className="center-align">Register for an Account</h1>
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card">
							<div className="card-content">
								<form onSubmit={handleSubmit(this.handleSignUp)}>
									<Field
										name="email"
										placeholder="Enter Your E-Mail"
										component={renderInput}
										type="email"
									/>
									<Field
										name="password"
										placeholder="Choose A Password"
										component={renderInput}
										type="password"
									/>
									<Field
										name="confirmPassword"
										placeholder="Confirm Your Password"
										component={renderInput}
										type="password"
									/>
									<button className="btn cyan darken-3">Sign Up</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const error = {};

	if (!values.email) {
		error.email = 'Please enter a valid e-mail';
	}

	if (!values.password) {
		error.password = 'Please choose a valid password';
	}

	if (values.password !== values.confirmPassword) {
		error.confirmPassword = 'Passwords do not match. Please try again.';
	}

	return error;
}

Register = reduxForm({
	form: 'register',
	validate: validate
})(Register);

export default Register;
