import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario_externo.institucion, usuario_externo.nacimiento FROM usuario INNER JOIN usuario_externo ON usuario.id_usuario = usuario_externo.id_usuario;");

        return NextResponse.json(result);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();

        const result = await connection.query("CALL InsertUsuarioExterno(?, ?, ?, ?, ?, ?, ?, ?, ?)", [data.email, data.firstName, data.lastName_p, data.lastName_m, data.password, "externo", data.birthdate, data.school, data.username]);

        if (result.affectedRows == 1) {
            return NextResponse.json({
                message: "User created successfully"
            }, {
                status: 201
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}