// "use client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Logout from "@/components/Logout/Logout";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import Script from "next/script";
// import Malla from "@/components/Malla/Malla";
import "@/css/home.css"
import "@/css/darkMode.css";
import "@/css/styles.css";

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8f9fa' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
}

export default async function MallaPage() {
    const session = await getServerSession(authOptions);

    console.log(session);

    return (
        <main className="main-flex">
            <Navbar></Navbar>
            <NavbarMobile></NavbarMobile>
            <section>
                <Logout></Logout>
            </section>
            {/* <Malla />     */}
            <Script src="https://d3js.org/d3.v5.min.js" strategy="lazyOnload" />
        </main>
    );
}