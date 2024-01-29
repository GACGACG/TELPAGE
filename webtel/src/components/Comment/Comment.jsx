"use client";

import { useState } from "react";
import ResponseForm from "@/components/ResponseForm/ResponseForm";

const getTimeDifference = (timestamp) => {
    const commentDate = new Date(timestamp);
    const currentDate = new Date();

    currentDate.setUTCHours(currentDate.getUTCHours() - 3);
    currentDate.setUTCMinutes(currentDate.getUTCMinutes());

    const differenceInSeconds = Math.floor((currentDate - commentDate) / 1000);

    if (differenceInSeconds < 60) {
        return `hace ${differenceInSeconds} segundos`;
    } else if (differenceInSeconds < 3600) {
        return (Math.floor(differenceInSeconds / 60) == 1) ? `hace ${Math.floor(differenceInSeconds / 60)} minuto` : `hace ${Math.floor(differenceInSeconds / 60)} minutos`;
    } else if (differenceInSeconds < 86400) {
        return `hace ${Math.floor(differenceInSeconds / 3600)} horas`;
    } else {
        return `${commentDate.toLocaleString()}`;
    }
}

function Comment({ data, username, id_usuario, respuestas, contador }) {
    const [Visibility, setVisibility] = useState(false);

    const toggle = () => {
        setVisibility(!Visibility);
    }

    const [commentVisibilities, setCommentVisibilities] = useState({});

    const showResponseForm = (commentId) => {
        setCommentVisibilities((prevVisibilities) => ({
            ...prevVisibilities,
            [commentId]: true,
        }));
    };

    const hideResponseForm = (commentId) => {
        setCommentVisibilities((prevVisibilities) => ({
            ...prevVisibilities,
            [commentId]: false,
        }));
    };

    const isResponseFormVisible = (commentId) => commentVisibilities[commentId] || false;

    return (
        <article className="comment-container">
            <h3 className="comment-username">{data.username}</h3>
            <p>{data.comentario}</p>
            <div className="comment-actions">
                <small>{getTimeDifference(data.last_update)}</small>
                <button onClick={() => showResponseForm(data.id_comentario)} className="comment-response">
                    Responder
                </button>
            </div>
            <div className="comment-response-container">
                {isResponseFormVisible(data.id_comentario) && (
                    <ResponseForm
                        username={username}
                        id_usuario={id_usuario}
                        id_padre={data.id_comentario}
                    />
                )}
                {isResponseFormVisible(data.id_comentario) && (
                    <button
                        type="button"
                        className="comment-response-cancel"
                        onClick={() => hideResponseForm(data.id_comentario)}
                    >
                        Cancelar
                    </button>
                )}
            </div>
            <div>
                {
                    (contador == 0)
                    ? <></>
                    : <>
                        <button onClick={toggle} className="show-responses-button">{!Visibility ? ((contador == 1) ? `Mostrar ${contador} respuesta` : `Mostrar ${contador} respuestas`) : "Ocultar respuestas"}</button>
                        {Visibility && (<div>
                            {
                                respuestas.map((comentario, index) => (
                                    <article key={index} className="response-container">
                                        <h3 className="comment-username">{comentario.username}</h3>
                                        <p>{comentario.comentario}</p>
                                        <div className="comment-actions">
                                            <small>{getTimeDifference(comentario.last_update)}</small>
                                            <button onClick={() => showResponseForm(comentario.id_comentario)} className="comment-response">Responder</button>
                                        </div>
                                        <div className="comment-response-container">
                                            {isResponseFormVisible(comentario.id_comentario) && <ResponseForm username={username} comentario_username={comentario.username} id_usuario={id_usuario} id_padre={data.id_comentario} mensaje={`@${comentario.username}`}/>}
                                            {isResponseFormVisible(comentario.id_comentario) && <button type="button" className="comment-response-cancel" onClick={() => hideResponseForm(comentario.id_comentario)}>Cancelar</button>}
                                        </div>
                                    </article>
                                ))
                            }
                        </div>)}
                    </>
                }
            </div>
        </article>
    );
}

export default Comment;