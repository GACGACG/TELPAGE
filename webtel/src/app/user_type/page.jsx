"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import "@/css/registro.css";

const tipo_usuario = () => {
    const router = useRouter();

    const [option, setOption] = useState({
        tipo_usuario: ""
    });

    const handleChange = (e) => {
        setOption({
            ...option,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        switch (option.tipo_usuario) {
            case "empresa":
                router.push("/register_empresa");
                break;
            case "externo":
                router.push("/register_externo");
                break;
            case "usm":
                router.push("/register_usm");
                break;
            default:
                break;
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
                        <label htmlFor="tipo_usuario">Tipo de Cuenta:</label>
                        <select name="tipo_usuario" id="tipo_usuario" value={option.tipo_usuario} onChange={handleChange} required>
                            <optgroup label="Tipos de usuario">
                                <option disabled hidden value="">Selecciona el tipo de cuenta</option>
                                <option value="externo">Estudiante Escolar</option>
                                <option value="usm">Estudiante USM</option>
                                <option value="empresa">Externo / Empresa</option>
                            </optgroup>
                        </select>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default tipo_usuario;


