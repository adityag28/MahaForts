import React from 'react'
import { Link } from 'react-router-dom'
import { GiMountains } from 'react-icons/gi'

export default function Header() {
    return (
        <header>
            <Link className='site-logo' to="/" aria-label="MahaForts Home">
                <GiMountains className='icon' aria-hidden="true" /> MahaForts
            </Link>
            <nav aria-label="Main navigation">
                <Link to='/'>Home</Link>
                <Link to='/explore'>Explore Forts</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}
