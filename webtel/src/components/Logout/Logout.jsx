"use client"

import { signOut } from 'next-auth/react'
import "@/css/logout.css"

function Logout({ styled = true }) {
    return <div className={styled ? "signout" : "signoutMobile"} onClick={() => signOut()}>Cerrar sesión</div>
}

export default Logout;