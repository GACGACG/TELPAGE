"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import '@/css/navbar_mobile.css';
import Logout from "@/components/Logout/Logout";

const NavbarMobile = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!isExpanded);
    }

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="navbarMobile">
            <div className="navbarMobileTop">
                <div className={`burger ${isExpanded ? "behind" : "infront"}`} onClick={toggleNavbar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="profile" onClick={toggleOptions}>
                    <img src="/person.svg" alt="Foto de perfil" />
                    {showOptions && (
                        <div className="user-options">
                            <ul>
                                <li><Link href="/profile">Perfil</Link></li>
                                <li><Logout styled={false}>Cerrar sesión</Logout></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {isExpanded && (
                <div className="navbarMobileExpanded-container">
                    <nav className="navbarMobileExpanded">
                        <button className="buttonClose" onClick={toggleNavbar}>
                            <svg className="closeSVG" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="currentColor" /></svg>
                        </button>
                        <div className={"links"}>
                            <Link href="/home" className="navbarMobileExpanded-link">
                                <img className="svg" src="/home.svg" />
                                <p>Inicio</p>
                            </Link>
                            <Link href="/cursos" className="navbarMobileExpanded-link">
                                <img className="svg" src="/courses.svg" />
                                <p>Cursos</p>
                            </Link>
                            <Link href="/ranking" className="navbarMobileExpanded-link">
                                <img className="svg" src="/ranking.svg" />
                                <p>Ranking</p>
                            </Link>
                            <Link href="/foro" className="navbarMobileExpanded-link">
                                <img className="svg" src="/forum.svg" />
                                <p>Foro</p>
                            </Link>
                            <Link href="/faq" className="navbarMobileExpanded-link">
                                <img className="svg" src="/faq.svg" />
                                <p>FAQ</p>
                            </Link>
                            <Link href="/ejercicios" className="navbarMobileExpanded-link">
                                <img className="svg" src="/exercises.svg" />
                                <p>Ejercicios</p>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default NavbarMobile;