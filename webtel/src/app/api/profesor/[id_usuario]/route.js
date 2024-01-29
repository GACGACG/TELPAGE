import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function DELETE(request, { params }) {
    try {
        const id_usuario = params.id_usuario;
        console.log(id_usuario);
        const result = await connection.query("CALL Eliminar_Usuario_Profe(?);", id_usuario);
        console.log(result);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}

export async function GET(request, { params }) {
    try {
        const id_usuario = params.id_usuario;
        const result = await connection.query(`SELECT usuario.id_usuario, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario.username, profesor.admin FROM usuario INNER JOIN profesor ON usuario.id_usuario = profesor.id_usuario WHERE usuario.id_usuario = '${id_usuario}';`);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}

export async function PUT(request, { params }) {
    return NextResponse.json({
        "method": "PUT",
        "id_usuario": params.id_usuario
    });
}