// components/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link href="/consulting">Consulting</Link>
                    </li>
                    <li>
                        <Link href="/software">Software</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/haccp">HACCP</Link>
                    </li>
                    <li>
                        <Link href="/resources">Resources</Link>
                    </li>
                    <li>
                        <Link href="/customers">Customers</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles.loginButton}>
                    <Link href="/login">Login</Link>
                </button>
                <button className={styles.demoButton}>
                    <Link href="/demo">Get a Demo</Link>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
