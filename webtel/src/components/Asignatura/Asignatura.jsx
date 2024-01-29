import "@/css/asignatura.css";
import Link from "next/link";

function Asignatura({ asignatura }) {
    return (
        <div className="asignatura">
            <img src="" alt={asignatura.departamento} />
            <Link href={`/cursos/sigla/${asignatura.sigla}`} className="asignatura-title">{asignatura.sigla} | {asignatura.nombre}</Link>
            <p>Semestre {asignatura.semestre}</p>
        </div>
    );
}

export default Asignatura;