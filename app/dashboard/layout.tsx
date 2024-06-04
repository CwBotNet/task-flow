import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import Header from "../components/Dashboard/Header";
import { html } from "hono/html";


export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {

    return (

        <div className="" data-theme="night">
            <Header />
            {children}
        </div>
    )
}