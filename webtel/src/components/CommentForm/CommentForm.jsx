"use client";

import axios from 'axios';
import { useRef, useState } from "react";

function CommentForm({ username, id_usuario }) {
    const [comment, setComment] = useState({
        comentario: "",
        id_padre: null,
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
        <form onSubmit={handleSubmit} ref={form} className="comments-section" method="POST">
            <textarea name="comentario" id="comentario" rows="2" maxLength={150} onChange={handleChange} placeholder="Añade un comentario..." value={comment.comentario} required></textarea>
            <input type="submit" value="Comentar" />
        </form>
    );
}

export default CommentForm;