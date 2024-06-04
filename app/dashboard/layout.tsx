import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";


export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="flex">
            <DashboardSidebar />
            {children}
        </div>
    )
}