import "@/js/navbar.js";
import "@/css/cursos.css";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import Link from "next/link";

function CursosLayout({ children }) {
    return (
        <main className="main-flex">
            <Navbar></Navbar>
            <NavbarMobile></NavbarMobile>
            <section id="content">
                <h1>Cursos</h1>
                <nav>
                    <Link className="semester" href="/cursos/I">
                        <p>I</p>
                    </Link>
                    <Link className="semester" href="/cursos/II">
                        <p>II</p>
                    </Link>
                    <Link className="semester" href="/cursos/III">
                        <p>III</p>
                    </Link>
                    <Link className="semester" href="/cursos/IV">
                        <p>IV</p>
                    </Link>
                    <Link className="semester" href="/cursos/V">
                        <p>V</p>
                    </Link>
                    <Link className="semester" href="/cursos/VI">
                        <p>VI</p>
                    </Link>
                    <Link className="semester" href="/cursos/VII">
                        <p>VII</p>
                    </Link>
                    <Link className="semester" href="/cursos/VIII">
                        <p>VIII</p>
                    </Link>
                    <Link className="semester" href="/cursos/XI">
                        <p>IX</p>
                    </Link>
                    <Link className="semester" href="/cursos/X">
                        <p>X</p>
                    </Link>
                    <Link className="semester" href="/cursos/XI">
                        <p>XI</p>
                    </Link>
                    <Link className="semester" href="/cursos/XII">
                        <p>XII</p>
                    </Link>
                </nav>
                {children}
            </section>
        </main>
    );
}

export default CursosLayout;