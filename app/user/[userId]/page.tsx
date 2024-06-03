"use client"
import { usePathname } from 'next/navigation';
import React from 'react'


const UserPage = () => {
    const userId = usePathname().split("/").slice(-1);
    return (
        <div>user id: {userId} </div>
    )
}

export default UserPage