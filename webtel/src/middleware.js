export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/home/:path*",
        "/cursos/:path*",
        "/faq/:path*",
        "/foro/:path*",
        "/profile/:path*"
    ]
}