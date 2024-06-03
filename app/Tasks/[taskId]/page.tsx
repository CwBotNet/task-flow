"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

const Task = () => {
    const taskId = usePathname().split("/").slice(-1);
    return (
        <div>Task id: {taskId}</div>
    )
}

export default Task