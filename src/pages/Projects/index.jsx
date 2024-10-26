import { useEffect } from "react";
import styles from "./Projects.module.scss";
import Project from "../../components/Project";

const Projects = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Réalisations";
    }, []);

    const projects = [
        {
            id: "p2-booki",
            title: "Booki",
            subtitle: "Hébergements et activités en ville ou en pleine nature",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 3
        },
        {
            id: "p3-sophie-bluel",
            title: "Sophie Bluel",
            subtitle: "Site portfolio d'architecte d'intérieur",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 5
        },
        {
            id: "p4-nina-carducci",
            title: "Nina Carducci",
            subtitle: "Site vitrine de photographe",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 2
        },
        {
            id: "p5-kasa",
            title: "Kasa",
            subtitle: "Location d'appartements entre particuliers",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 1
        },
        {
            id: "p6-mon-vieux-grimoire",
            title: "Mon Vieux Grimoire",
            subtitle: "Référencement et notation de livres",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 4
        },
        {
            id: "p7-menu-maker-by-qwenta",
            title: "Menu Maker by Qwenta",
            subtitle: "Affichage et mise en page de menus pour restaurateurs",
            logo: "Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            order: 6
        }
    ];

    return (
        <section className={styles.projects}>
            {projects
                .sort((a, b) => a.order - b.order)
                .slice(0, 6)
                .map((project) => (
                    <Project key={project.id} {...project} />
                ))}
        </section>
    );
};

export default Projects;
