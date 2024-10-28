import { useEffect } from "react";
import styles from "./Skills.module.scss";
import toolCategories from "../../data/toolCategories.json";
import tools from "../../data/tools.json";
import Skill from "../../components/Skill";

const categoryTools = (category) =>
    tools.filter((tool) => tool.category === category).slice(0, 4);

const Skills = () => {
    useEffect(() => {
        document.title = "David Horès, Développeur Web - Compétences";
    }, []);

    return (
        <section className={styles.skills}>
            <div className={styles.skills__left}>
                {toolCategories.slice(0, 2).map((category) => (
                    <Skill
                        key={category.id}
                        title={category.title}
                        tools={categoryTools(category.title)}
                    />
                ))}
            </div>
            {toolCategories.slice(2, 3).map((category) => (
                <Skill
                    key={category.id}
                    title={category.title}
                    tools={categoryTools(category.title)}
                    listClass="skill__list--column"
                />
            ))}
        </section>
    );
};

export default Skills;
