"use client";

import axios from 'axios';
import Link from 'next/link';
import bcrypt from 'bcryptjs';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import "@/css/registro.css";

const RegisterExt = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        firstName: "",
        lastName_p: "",
        lastName_m: "",
        rut: "",
        study: "",
        country: ""
    });

    const [countriesList, setCountriesList] = useState([]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleCountryChange = (e) => {
        setUser({
            ...user,
            country: e.target.value
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
            rut: user.rut,
            study: user.study,
            country: user.country
        }

        try {
            const response = await axios.post('/api/usuario_empresa', user_data);

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

    const getCountriesList = async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries');

            const countriesData = response.data.data;
            if (countriesData && countriesData.length > 0) {
                setCountriesList(countriesData);
            } else {
                console.error('La lista de países está vacía o mal formateada.');
            }
        } catch (error) {
            console.error('Error al obtener la lista de países:', error);
        }
    };

    useEffect(() => {
        getCountriesList();
    }, []);

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
                        <label htmlFor="username">Nombre de Usuario:</label>
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
                        <label htmlFor="rut">Rut:</label>
                        <input type="text" name="rut" id="rut" value={user.rut} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="study">Estudio:</label>
                        <input type="text" name="study" id="study" value={user.study} onChange={handleChange} required />
                    </div>
                    {
                        countriesList.length > 0 && (
                            <div className="form-group">
                                <label htmlFor="country">País:</label>
                                <select name="country" id="country" value={user.country} onChange={handleCountryChange} autoComplete="country" required>
                                    <option>---</option>
                                    {
                                        countriesList.map((countryData, index) => (
                                            <option key={`${countryData.iso3}-${index}`} value={countryData.country}>{countryData.country}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )
                    }
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterExt;
