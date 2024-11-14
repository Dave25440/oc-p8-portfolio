import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import Career from "../../pages/Career";
import Error from "../Error";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/oc-p8-portfolio" element={<Home />} />
                    <Route
                        path="/oc-p8-portfolio/realisations"
                        element={<Projects />}
                    />
                    <Route
                        path="/oc-p8-portfolio/competences"
                        element={<Skills />}
                    />
                    <Route
                        path="/oc-p8-portfolio/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/oc-p8-portfolio/realisations/:id"
                        element={<Project />}
                    />
                    <Route
                        path="/oc-p8-portfolio/parcours"
                        element={<Career />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
