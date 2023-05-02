import React from 'react';

import '@styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="PasswordRecovery-title">Password Recovery</h1>
				<p className="subtitle">Inform the emial address used to create your account</p>
				<form action="/" className="form">
					<label for="email" className="label">Email address</label>
					<input type="text" id="recovery-email" placeholder="platzi@example.cm" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
