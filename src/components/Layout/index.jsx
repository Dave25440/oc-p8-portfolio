import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../Header";
import About from "../About";
import Footer from "../Footer";

const paths = [
    "/oc-p8-portfolio",
    "/oc-p8-portfolio/realisations",
    "/oc-p8-portfolio/competences",
    "/oc-p8-portfolio/contact",
    "/oc-p8-portfolio/parcours"
];

const pathMatch = (pathname) => paths.includes(pathname);

const Layout = ({ children }) => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, "");
    const isMatch = pathMatch(pathname);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${isMatch && styles.main__grid}`}>
                {isMatch && (
                    <About
                        className={pathname !== paths[0] && styles.main__about}
                    />
                )}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
