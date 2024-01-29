import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

export async function GET() {
    try {
        const result = await connection.query("SELECT NOW()");
        return NextResponse.json({
            time: result[0]['NOW()']
        });
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}