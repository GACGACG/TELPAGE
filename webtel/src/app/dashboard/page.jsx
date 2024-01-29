import axios from "axios";

async function loadUsuarios() {
    const data = await axios.get("http://localhost:3000/api/usuario");

    return data.data;
}

async function loadUsuariosUSM() {
    const data = await axios.get("http://localhost:3000/api/usuario_usm");

    return data.data;
}

async function loadUsuariosExternos() {
    const data = await axios.get("http://localhost:3000/api/usuario_externo");

    return data.data;
}

async function loadUsuariosEmpresa() {
    const data = await axios.get("http://localhost:3000/api/usuario_empresa");

    return data.data;
}

async function DashboardPage() {
    const usuarios = await loadUsuarios();
    const usuarios_usm = await loadUsuariosUSM();
    const usuarios_externos = await loadUsuariosExternos();
    const usuarios_empresa = await loadUsuariosEmpresa();
    return (
        <main>
            <h1>Panel de control</h1>
            <hr />
            <h2>Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>id_usuario</th>
                        <th>Nombre de usuario</th>
                        <th>Correo electrónico</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Tipo de usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido_p}</td>
                                <td>{usuario.apellido_m}</td>
                                <td>{usuario.tipo_usuario}</td>
                                <td>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr />
            <h2>Usuarios USM</h2>
            <table>
                <thead>
                    <tr>
                        <th>id_usuario</th>
                        <th>Nombre de usuario</th>
                        <th>Correo electrónico</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Tipo de usuario</th>
                        <th>Rol</th>
                        <th>Sede</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios_usm.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido_p}</td>
                                <td>{usuario.apellido_m}</td>
                                <td>{usuario.tipo_usuario}</td>
                                <td>{usuario.rol}</td>
                                <td>{usuario.sede}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr />
            <h2>Usuarios Externos</h2>
            <table>
                <thead>
                    <tr>
                        <th>id_usuario</th>
                        <th>Nombre de usuario</th>
                        <th>Correo electrónico</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Tipo de usuario</th>
                        <th>Institución</th>
                        <th>Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios_externos.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido_p}</td>
                                <td>{usuario.apellido_m}</td>
                                <td>{usuario.tipo_usuario}</td>
                                <td>{usuario.rol}</td>
                                <td>{usuario.sede}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr />
            <h2>Usuarios Empresa</h2>
            <table>
                <thead>
                    <tr>
                        <th>id_usuario</th>
                        <th>Nombre de usuario</th>
                        <th>Correo electrónico</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Tipo de usuario</th>
                        <th>RUT</th>
                        <th>Estudios</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios_empresa.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido_p}</td>
                                <td>{usuario.apellido_m}</td>
                                <td>{usuario.tipo_usuario}</td>
                                <td>{usuario.rut}</td>
                                <td>{usuario.estudio}</td>
                                <td>{usuario.pais}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    );
}

export default DashboardPage;