import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import Tags from "../Tags";

const Card = ({ id, color, title, subtitle, tags }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        if (card) {
            card.addEventListener(
                "animationend",
                () => {
                    card.classList.add(styles["card--animated"]);
                },
                { once: true }
            );
        }
    }, []);

    return (
        <Link
            to={
                id
                    ? `/oc-p8-portfolio/realisations/${id}`
                    : `/oc-p8-portfolio/parcours`
            }
            className={styles.card}
            style={{ backgroundColor: color }}
            ref={cardRef}
        >
            <article>
                <h3 className={styles.card__title} style={{ color: color }}>
                    {title}
                </h3>
                <p className={styles.card__subtitle}>{subtitle}</p>
            </article>
            <Tags tags={tags} color={color} />
        </Link>
    );
};

export default Card;
