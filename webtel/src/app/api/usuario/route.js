import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario FROM usuario;");

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}