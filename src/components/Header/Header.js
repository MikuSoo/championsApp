import styles from './Header.module.css';
import Link from "next/link";
export default function Header() {
    return (
    <header >
        <div className={styles.HeaderContainer}>
           <Link href="/">
            <a href="../pages/index">
                <img className={styles.logo} src="../logo.png" />
            </a>
            </Link>
        </div>
    </header>
    )
  }