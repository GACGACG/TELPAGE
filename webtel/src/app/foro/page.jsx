import "@/js/navbar.js";
import "@/css/foro.css";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import CommentForm from "@/components/CommentForm/CommentForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Comment from "@/components/Comment/Comment";

async function loadComment() {
    const data = await axios.get("http://localhost:3000/api/comentario");

    return data.data;
}

async function loadResponses(id_comentario) {
    const data = await axios.get(`http://localhost:3000/api/comentario/${id_comentario}`);
    const respuestas = data.data;
    const contador = respuestas.length;

    return { respuestas, contador };
}

async function ForoPage() {
    const session = await getServerSession(authOptions);

    let username = session.user.username,
    id_usuario = session.user.id_usuario;

    const comentarios = await loadComment();
    const comentarios_padres = comentarios.filter(comentario => comentario.id_padre == null);

    const responsesPromises = comentarios_padres.map(comentario => loadResponses(comentario.id_comentario));
    const responses = await Promise.all(responsesPromises);

    return (
        <main className="main-flex">
            <Navbar></Navbar>
            <NavbarMobile></NavbarMobile>
            <section id="content">
                <h1>Foro</h1>
                <CommentForm username={username} id_usuario={id_usuario}></CommentForm>
                <div>
                {
                    comentarios_padres.map((comentario, index) => {
                        const { respuestas, contador } = responses[index];
                        return <Comment key={index} data={comentario} username={username} id_usuario={id_usuario} respuestas={respuestas} contador={contador}></Comment>;
                    })
                }
                </div>
            </section>
        </main>
    );
}

export default ForoPage;