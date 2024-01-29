import Asignatura from "@/components/Asignatura/Asignatura";
import "@/css/cursos.css";
import axios from "axios";

async function loadSemester() {
    const data = await axios.get("http://localhost:3000/api/ramo");
    return data.data
}

async function CursosPage() {
    const ramos = await loadSemester();
    const I = ramos["I"];
    const II = ramos["II"];
    const III = ramos["III"];
    const IV = ramos["IV"];
    const V = ramos["V"];
    const VI = ramos["VI"];
    const VII = ramos["VII"];
    const VIII = ramos["VIII"];
    const IX = ramos["IX"];
    const X = ramos["X"];
    const XI = ramos["XI"];
    const XII = ramos["XII"];

    return (
        <article className="grid">
            {I.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {II.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {III.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {IV.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {V.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {VI.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {VII.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {VIII.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {IX.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {X.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {XI.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
            {XII.map((asignatura, index) => (<Asignatura key={index} asignatura={asignatura} />))}
        </article>
    );
}

export default CursosPage;