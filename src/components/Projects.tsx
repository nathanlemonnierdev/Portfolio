import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects () {
    return (
        <section className="projects section-shell" id="projets">
            <div className="section-heading projects-heading">
                <div>
                    <p className="section-kicker">Projets & terrain de jeu</p>
                    <h2>Ce qui est<br /><em>en projet.</em></h2>
                </div>
                <p className="heading-aside">Cette sélection accueille mes réalisations. Aussi bien des projets concrets que des idées en développement.</p>
            </div>
            <article className="project-placeholder">
                <div className="placeholder-art">
                    <ProjectCarousel />
                </div>
                <div className="placeholder-copy">
                    <p className="project-type">01 Etudes de mes projets</p>
                    <h3>Des projets concrets, des problématiques différentes.</h3>
                    <p>Chaque projet est l'occasion de répondre à un besoin précis, de trouver la bonne approche et de construire une solution qui a du sens.</p>
                    <Link className="text-link" href="/projets">Voir les projets <span>↗</span></Link>
                </div>
            </article>
        </section>
    );
}