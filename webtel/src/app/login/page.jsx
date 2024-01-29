"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import "@/css/login.css";

const Login = () => {
	const router = useRouter();

	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		const res = await signIn('credentials', {
			email: user.email,
			password: user.password,
			redirect: false
		});

		if (res.error) {
			alert(res.error);
		} else {
			router.push("/home");
		}
	};

	return (
		<div className="container">
			<div className="navbar">
				<Link href="/">
					<img src="/tel_1.png" alt="Logo" width="50" height="50" />
				</Link>
				<span>DigiTEL</span>
			</div>
			<div className="form-container">
				<h2>Iniciar Sesión</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Correo Electrónico:</label>
						<input type="email" id="email" name="email" value={user.email} onChange={handleChange} autoComplete="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Contraseña:</label>
						<input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />
					</div>
					<button type="submit">Iniciar Sesión</button>
					<div className="texto">
						Si no tienes cuenta, puedes crear una <a href='/user_type'>aquí</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;