import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Preview.module.scss";

const getImage = (image) => {
    try {
        return require(`../../assets/${image}`);
    } catch (error) {
        console.error(error.message);
        return null;
    }
};

const Preview = ({ picture, title, subtitle, color }) => {
    const previewRef = useRef(null);
    const dialogRef = useRef(null);
    const [largeImage, setLargeImage] = useState(null);
    const src = getImage(picture);

    useEffect(() => {
        const preview = previewRef.current;

        if (preview) {
            preview.addEventListener(
                "animationend",
                () => {
                    preview.classList.add(styles["preview--animated"]);
                },
                { once: true }
            );
        }
    }, []);

    const openModal = () => {
        if (!largeImage && src) {
            setLargeImage(getImage(picture.replace(".webp", "_large.webp")));
        }

        const dialog = dialogRef.current;

        if (dialog && src) {
            dialog.showModal();
            dialog.scrollTop = 0;
            dialog.focus();
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        const dialog = dialogRef.current;

        if (dialog) {
            dialog.classList.add(styles.preview__dialog__close);
            dialog.addEventListener(
                "animationend",
                () => {
                    dialog.classList.remove(styles.preview__dialog__close);
                    dialog.close();
                    document.body.style.overflow = "";
                },
                { once: true }
            );
        }
    };

    const openKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
        }
    };

    const closeKeyDown = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
        }
    };

    return (
        <>
            <figure
                aria-label={`Voir ${title} : ${subtitle}`}
                tabIndex="0"
                className={styles.preview}
                ref={previewRef}
                onClick={openModal}
                onKeyDown={openKeyDown}
            >
                <img
                    src={src}
                    alt={!src ? "Aperçu introuvable" : `${title} : ${subtitle}`}
                    width="400"
                    height="594"
                    loading="lazy"
                    className={styles.preview__img}
                />
            </figure>
            <dialog
                aria-label={`Aperçu de ${title} : ${subtitle}`}
                className={styles.preview__dialog}
                ref={dialogRef}
                onClick={closeModal}
                onKeyDown={closeKeyDown}
            >
                <button
                    aria-label="Fermer l'aperçu"
                    className={styles.preview__button}
                    style={{ backgroundColor: color }}
                    onClick={closeModal}
                >
                    <FontAwesomeIcon icon={faXmark} size="sm" />
                </button>
                <img
                    src={largeImage || src}
                    alt={`${title} : ${subtitle}`}
                    width="1400"
                    loading="lazy"
                    className={styles.preview__model}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            </dialog>
        </>
    );
};

export default Preview;
