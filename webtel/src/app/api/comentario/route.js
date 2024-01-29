import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT * FROM comentario ORDER BY last_update DESC;");

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

        const result = await connection.query("INSERT INTO comentario SET ?", data);

        if (result.affectedRows == 1) {
            return NextResponse.json({
                message: "Comentario enviado"
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