export default function About () {
    return (
        <section className="about section-shell" id="apropos">
            <div className="about-portrait" aria-hidden="true">
                <span>NL</span>
                <small>développeur web<br />mais pas seulement</small>
            </div>
            <div className="about-copy">
                <p className="section-kicker">À propos</p>
                <h2>Bonjour, moi c’est <em>Nathan.</em></h2>
                <p>Je construis mon activité avec une conviction simple : la qualité et l’écoute ne devraient pas être réservées aux projets qui ont les plus gros budgets.</p>
                <p>
                Je construis la suite projet après projet. Chaque réalisation est l’occasion
                de faire les choses proprement, de chercher la bonne solution et de laisser
                derrière moi un outil dont on est fier.
                </p>
                <a className="text-link" href="#contact">Me contacter <span>↗</span></a>
            </div>
        </section>
    );
}