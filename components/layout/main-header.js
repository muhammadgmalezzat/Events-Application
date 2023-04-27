import Link from 'next/link';
import React from 'react'
import Styles from './main-header.module.css'

const MainHeader = () => {
    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>
                <Link href='/'>Evants logo</Link>
            </div>
            <nav className={Styles.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>All events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader