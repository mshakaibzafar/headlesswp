// components/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navBarContainer}>
            <div className={styles.logo}>
                <Link href="/" className={styles.navbarLogo}>
                    <div className={styles.navbarText}>M Shakaib Zafar</div>
                </Link>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link href="/software">About Me</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Services</Link>
                    </li>
                    <li>
                        <Link href="/haccp">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/resources">Testimonials</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <button>
                    <Link href="https://www.upwork.com/freelancers/mshakaibzafar">Hire Me</Link>
                </button>
                <button>
                    <Link href="https://www.upwork.com/services/product/development-it-m-shakaib-1485608116394450944?ref=project_share">Book a Consultation</Link>
                </button>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
