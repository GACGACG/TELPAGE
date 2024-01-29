"use client";

import axios from "axios";
import { useRef, useState } from "react";

function ResponseForm({ username, comentario_username, id_usuario, id_padre, mensaje }) {
    const [comment, setComment] = useState({
        comentario: (username == comentario_username) ? "" : (!(mensaje) ? ("") : (`${mensaje} `)),
        id_padre: id_padre,
        id_usuario: id_usuario,
        username: username
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/comentario', comment);

            if (response.status == 201) {
                alert(response.data.message);
            } else {
                alert("Error al enviar el comentario");
            }
        } catch (error) {
            alert("Ocurrió un error al comentar");
        }

        form.current.reset();
        location.reload();
    }

    return (
        <form onSubmit={handleSubmit} ref={form} className="response-form" method="POST">
            <textarea name="comentario" id="comentario" rows="1" maxLength={150} onChange={handleChange} placeholder={(username == comentario_username) ? "Añadir una respuesta..." : (!(mensaje) ? "Añadir una respuesta..." : `${mensaje} `)} value={comment.comentario} required></textarea>
            <input type="submit" value="Publicar" />
        </form>
    );
}

export default ResponseForm;