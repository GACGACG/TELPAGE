import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT usuario.id_usuario, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario.username, profesor.admin FROM usuario INNER JOIN profesor ON usuario.id_usuario = profesor.id_usuario;");

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

        const saltRounds = 12;
        const hashedPassword = bcrypt.hashSync(data.password, saltRounds);

        const result = await connection.query("CALL InsertUsuarioProfe(?, ?, ?, ?, ?, ?, ?);", [data.email, data.firstName, data.lastName_p, data.lastName_m, hashedPassword, "profe", data.username]);

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