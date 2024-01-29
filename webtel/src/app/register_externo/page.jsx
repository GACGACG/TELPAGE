"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';

import "@/css/registro.css";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName_p: '',
    lastName_m: '',
    school: '',
    region: '',
    birthdate: '',
  });

  const regionesChile = [
    'Arica y Parinacota',
    'Tarapacá',
    'Antofagasta',
    'Atacama',
    'Coquimbo',
    'Valparaíso',
    'Metropolitana de Santiago',
    'Libertador General Bernardo O’Higgins',
    'Maule',
    'Ñuble',
    'Biobío',
    'La Araucanía',
    'Los Ríos',
    'Los Lagos',
    'Aysén del General Carlos Ibáñez del Campo',
    'Magallanes y de la Antártica Chilena',
  ];

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

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
      school: user.school,
      region: user.region,
      birthdate: user.birthdate,
    };

    try {
      const response = await axios.post('/api/usuario_externo', user_data);

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
            <label htmlFor="school">Colegio:</label>
            <input type="text" name="school" id="school" value={user.school} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="region">Región:</label>
            <select name="region" id="region" value={user.region} onChange={handleChange} autoComplete="address-level1" required>
              <option value="">Selecciona una región</option>
              {regionesChile.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
            <input type="date" name="birthdate" id="birthdate" value={user.birthdate} onChange={handleChange} required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
