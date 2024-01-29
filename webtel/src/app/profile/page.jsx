import "@/js/navbar.js";
import "@/css/profile.css";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProfilePage() {
    const { user } = await getServerSession(authOptions);

    console.log(user);

    if (user.tipo_usuario == "usm") {
        return (
            <main className="main-flex">
                <Navbar></Navbar>
                <NavbarMobile></NavbarMobile>
                <section id="content">
                    <article className="user-container">
                        <div>
                            <img src="/person.svg" />
                        </div>
                        <div className="user-info-container">
                            <h1>{user.username}</h1>
                            <hr />
                            <div className="user-info">
                                <p>
                                    <b>Nombre:</b>
                                </p>
                                <p>{user.name}</p>
                                <p>
                                    <b>Rol USM:</b>
                                </p>
                                <p>{user.rol}</p>
                                <p>
                                    <b>Correo Electrónico:</b>
                                </p>
                                <p className="email">
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </p>
                                <p>
                                    <b>Ranking:</b>
                                </p>
                                <p>3</p>
                                <p>
                                    <b>Ejercicios resueltos:</b>
                                </p>
                                <p>5</p>
                            </div>
                        </div>
                    </article>
                    <article className="feedback-container">
                        <form>
                            <label htmlFor="feedback">Reporte de fallos / Feedback</label>
                            <textarea name="feedback" id="feedback" cols="30" rows="10"></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </article>
                </section>
            </main>
        );
    } else {
        return (
            <main className="main-flex">
                <Navbar></Navbar>
                <section>
                    <h1>Hola mundo</h1>
                </section>
            </main>
        );
    }
}