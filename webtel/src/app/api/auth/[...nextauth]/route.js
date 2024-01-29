import bcrypt from "bcryptjs";
import connection from "@/libs/mysql";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

async function comparePassword(password, storedHash) {
    try {
        const match = await bcrypt.compare(password, storedHash);
        return match;
    } catch (error) {
        throw error;
    }
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Correo Electrónico",
                    type: "email"
                },
                password: {
                    label: "Contraseña",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                let user;

                const email = credentials.email;
                const password = credentials.password;

                const verification = await connection.query(`SELECT contrasena, tipo_usuario FROM usuario WHERE correo = '${email}'`);

                if (verification.length == 0) throw new Error("The email or password provided is incorrect");

                const storedHash = verification[0].contrasena;
                const tipo_usuario = verification[0].tipo_usuario;

                const match = await comparePassword(password, storedHash);

                if (!match) throw new Error("The email or password provided is incorrect");

                switch (tipo_usuario) {
                    case "usm":
                        user = await connection.query(`SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario_usm.rol, usuario_usm.sede FROM usuario INNER JOIN usuario_usm ON usuario.id_usuario = usuario_usm.id_usuario WHERE usuario.correo = '${email}'`);
                        break;
                    case "empresa":
                        user = await connection.query(`SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario_empresa.rut, usuario_empresa.estudio, usuario_empresa.pais FROM usuario INNER JOIN usuario_empresa ON usuario.id_usuario = usuario_empresa.id_usuario WHERE usuario.correo = '${email}';`);
                        break;
                    case "externo":
                        user = await connection.query(`SELECT usuario.id_usuario, usuario.username, usuario.correo, usuario.nombre, usuario.apellido_p, usuario.apellido_m, usuario.tipo_usuario, usuario_externo.institucion, usuario_externo.nacimiento FROM usuario INNER JOIN usuario_externo ON usuario.id_usuario = usuario_externo.id_usuario WHERE usuario.correo = '${email}';`);
                        break;
                    default:
                        break;
                }

                return user[0];
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, session }) {
            if (user) {
                switch (user.tipo_usuario) {
                    case "usm":
                        return {
                            ...token,
                            id_usuario: user.id_usuario,
                            username: user.username,
                            correo: user.correo,
                            nombre: user.nombre,
                            apellido_p: user.apellido_p,
                            apellido_m: user.apellido_m,
                            tipo_usuario: user.tipo_usuario,
                            rol: user.rol,
                            sede: user.sede
                        }
                    case "empresa":
                        return {
                            ...token,
                            id_usuario: user.id_usuario,
                            username: user.username,
                            correo: user.correo,
                            nombre: user.nombre,
                            apellido_p: user.apellido_p,
                            apellido_m: user.apellido_m,
                            tipo_usuario: user.tipo_usuario,
                            rut: user.rut,
                            estudio: user.estudio,
                            pais: user.pais
                        }
                    case "externo":
                        return {
                            ...token,
                            id_usuario: user.id_usuario,
                            username: user.username,
                            correo: user.correo,
                            nombre: user.nombre,
                            apellido_p: user.apellido_p,
                            apellido_m: user.apellido_m,
                            tipo_usuario: user.tipo_usuario,
                            institucion: user.institucion,
                            nacimiento: user.nacimiento,
                        }
                    default:
                        break;
                }

            }
            return token;
        },
        async session({ session, token, user }) {
            switch (token.tipo_usuario) {
                case "usm":
                    return {
                        ...session,
                        user: {
                            ...session.user,
                            name: `${token.nombre} ${token.apellido_p} ${token.apellido_m}`,
                            id_usuario: token.id_usuario,
                            username: token.username,
                            email: token.correo,
                            tipo_usuario: token.tipo_usuario,
                            rol: token.rol,
                            sede: token.sede
                        }
                    }
                case "empresa":
                    return {
                        ...session,
                        user: {
                            ...session.user,
                            name: `${token.nombre} ${token.apellido_p} ${token.apellido_m}`,
                            id_usuario: token.id_usuario,
                            username: token.username,
                            email: token.correo,
                            tipo_usuario: token.tipo_usuario,
                            rut: token.rut,
                            estudio: token.estudio,
                            pais: token.pais
                        }
                    }
                case "externo":
                    return {
                        ...session,
                        user: {
                            ...session.user,
                            name: `${token.nombre} ${token.apellido_p} ${token.apellido_m}`,
                            id_usuario: token.id_usuario,
                            username: token.username,
                            email: token.correo,
                            tipo_usuario: token.tipo_usuario,
                            institucion: token.institucion,
                            nacimiento: token.nacimiento,
                        }
                    }
                default:
                    break;
            }

        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }