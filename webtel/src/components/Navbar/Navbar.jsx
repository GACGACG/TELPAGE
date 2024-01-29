"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '@/css/navbar.css';

const Navbar = () => {
    const [isExpanded, setExpanded] = useState(true);

    const toggleNavbar = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div className="navbar-container">
            <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
                <div className={"links"}>
                    <Link href="/home" className="navbar-link">
                        <img className="svg" src="/home.svg" />
                        {isExpanded && <p>Inicio</p>}
                    </Link>
                    <Link href="/cursos" className="navbar-link">
                        <img className="svg" src="/courses.svg" />
                        {isExpanded && <p>Cursos</p>}
                    </Link>
                    <Link href="/ranking" className="navbar-link">
                        <img className="svg" src="/ranking.svg" />
                        {isExpanded && <p>Ranking</p>}
                    </Link>
                    <Link href="/foro" className="navbar-link">
                        <img className="svg" src="/forum.svg" />
                        {isExpanded && <p>Foro</p>}
                    </Link>
                    <Link href="/faq" className="navbar-link">
                        <img className="svg" src="/faq.svg" />
                        {isExpanded && <p>FAQ</p>}
                    </Link>
                    <Link href="/ejercicios" className="navbar-link">
                        <img className="svg" src="/exercises.svg" />
                        {isExpanded && <p>Ejercicios</p>}
                    </Link>
                </div>
                <div className={"settings"}>
                    <Link href="/profile" className="navbar-link">
                        <img className="svg" src="/profile.svg" />
                        {isExpanded && <p>Perfil</p>}
                    </Link>
                    <Link href="/opciones" className="navbar-link">
                        <img className="svg" src="/settings.png" />
                        {isExpanded && <p>Opciones</p>}
                    </Link>
                </div>
            </nav>
            <button onClick={toggleNavbar} className={"toggleButton"}></button>
        </div>
    );
}

export default Navbar;