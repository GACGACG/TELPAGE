import "@/js/navbar.js";
import "@/css/home.css";
import Logout from "@/components/Logout/Logout";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function HomePage() {
    const session = await getServerSession(authOptions);

    console.log(session);

    return (
        <main className="main-flex">
            <Navbar></Navbar>
            <NavbarMobile></NavbarMobile>
            <section id="content">
                <Logout></Logout>
            </section>
        </main>
    );
}