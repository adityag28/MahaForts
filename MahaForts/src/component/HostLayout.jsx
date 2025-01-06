import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>

                <NavLink
                    to="architecture"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Architectural Features
                </NavLink>

                <NavLink
                    to="entry"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Entry Details
                </NavLink>

                <NavLink
                    to="reach"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    How To Reach
                </NavLink>
                <NavLink
                    to="photo"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photo Gallery
                </NavLink>

            </nav>
            <Outlet />
        </>
    )
}