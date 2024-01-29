import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario_empresa.rut, usuario_empresa.estudio, usuario_empresa.pais FROM usuario INNER JOIN usuario_empresa ON usuario.id_usuario = usuario_empresa.id_usuario;");

        return NextResponse.json(result);
    } catch (error) {
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

        const result = await connection.query("CALL InsertUsuarioEmpresa(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [data.email, data.firstName, data.lastName_p, data.lastName_m, data.password, "empresa", data.rut, data.study, data.country, data.username]);

        if (result.affectedRows == 1) {
            return NextResponse.json({
                message: "User created successfully"
            }, {
                status: 201
            });
        }
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}