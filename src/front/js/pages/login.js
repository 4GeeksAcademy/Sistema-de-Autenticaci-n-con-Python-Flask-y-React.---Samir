import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
	const {store, actions}=useContext(Context)
	const navigate = useNavigate();

	async function submitform(e) {
		e.preventDefault();
		let formData = new FormData(e.target);
		let email = formData.get("email");
		let password = formData.get("password");
		let logged = await actions.login(email, password);
		if (logged) navigate("/");
	}
	return (
		<div className="container">
			<form onSubmit={submitform}>
				<div className="mb-3">
					<label htmlForfor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlForfor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<Link to="/Congrats">
					<button type="submit" className="btn btn-primary">login</button>
				</Link>
			</form>
		</div>
	);
};