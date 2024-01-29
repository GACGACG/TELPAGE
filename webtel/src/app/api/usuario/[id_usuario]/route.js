import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const id_usuario = params.id_usuario;
        const result = await connection.query(`SELECT id_usuario, username, correo, nombre, apellido_p, apellido_m, tipo_usuario FROM usuario WHERE id_usuario = ${id_usuario};`);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}