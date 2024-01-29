import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const id_comentario = params.id_comentario;
        const result = await connection.query(`SELECT * FROM comentario WHERE id_padre = '${id_comentario}';`);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}