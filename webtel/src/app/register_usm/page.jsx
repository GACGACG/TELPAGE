"use client";

import axios from 'axios';
import Link from 'next/link';
import bcrypt from 'bcryptjs';
import React, { useState, } from 'react';
import { useRouter } from 'next/navigation';

import "@/css/registro.css";

const RegisterUsm = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        firstName: "",
        lastName_p: "",
        lastName_m: "",
        rol: "",
        sede: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.password !== user.repeatPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const saltRounds = 12;
        const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
        const user_data = {
            username: user.username,
            email: user.email,
            password: hashedPassword,
            firstName: user.firstName,
            lastName_p: user.lastName_p,
            lastName_m: user.lastName_m,
            rol: user.rol,
            sede: user.sede
        }

        console.log(user_data);

        try {
            const response = await axios.post('/api/usuario_usm', user_data);

            if (response.status === 201) {
                alert('Registro exitoso');
                router.push("/login");
                router.refresh();
            } else {
                alert('Ocurrió un error durante el registro');
            }
        } catch (error) {
            console.error('Error durante el registro:', error);
            alert('Ocurrió un error durante el registro');
        }
    }

    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">
                    <img src="/tel_1.png" alt="Logo" width="50" height="50" />
                </Link>
                <span>DigiTEL</span>
            </div>
            <div className="form-container">
                <h2>Registro de Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input type="text" name="username" id="username" value={user.username} onChange={handleChange} autoComplete="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} autoComplete="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repetir Contraseña:</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" value={user.repeatPassword} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Nombre:</label>
                        <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName_p">Apellido Paterno:</label>
                        <input type="text" name="lastName_p" id="lastName_p" value={user.lastName_p} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName_m">Apellido Materno:</label>
                        <input type="text" name="lastName_m" id="lastName_m" value={user.lastName_m} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rol">Rol:</label>
                        <input type="text" name="rol" id="rol" value={user.rol} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sede">Sede:</label>
                        <select name="sede" id="sede" value={user.sede} onChange={handleChange} required>
                            <optgroup label="Selecciona una Sede">
                                <option disabled hidden value="">Selecciona una Sede</option>
                                <option value="San Joaquín">Campus San Joaquín</option>
                                <option value="Valparaíso">Campus Casa Central Valparaíso</option>
                            </optgroup>
                        </select>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterUsm;