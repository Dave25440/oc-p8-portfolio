import { useLocation, Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const paths = [
        "/oc-p8-portfolio/realisations",
        "/oc-p8-portfolio/competences",
        "/oc-p8-portfolio/contact"
    ];

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>
                <Link to="/oc-p8-portfolio" className={styles.header__home}>
                    David Horès
                </Link>
            </h1>
            <nav className={styles.header__nav}>
                <ul className={styles.header__list}>
                    <li>
                        <Link
                            to={paths[0]}
                            className={`${styles.header__link} ${
                                pathname === paths[0] &&
                                styles["header__link--active"]
                            }`}
                        >
                            Réalisations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={paths[1]}
                            className={`${styles.header__link} ${
                                pathname === paths[1] &&
                                styles["header__link--active"]
                            }`}
                        >
                            Compétences
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={paths[2]}
                            className={`${styles.header__link} ${
                                pathname === paths[2] &&
                                styles["header__link--active"]
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
