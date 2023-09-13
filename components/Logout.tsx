"use client"

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {}

const Logout = (props: Props) => {
    const router = useRouter()
    const handleLogout = () => {
        signOut({
            callbackUrl: "/login",
            redirect: false
        })
        router.push("/login")
    }
    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Logout