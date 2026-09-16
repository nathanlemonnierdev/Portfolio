
export default function Challenge() {
    return (
        <section className="challenge section-shell">
        <div className="challenge-top">
            <p className="section-kicker">La promesse</p>
            <span>02 — 07</span>
        </div>

        <div className="challenge-content">
            <p className="giant-word">
            Aucun
            <br />
            <em>défi</em>
            </p>

            <div className="challenge-note">
            <span className="asterisk">✳</span>

            <h2>
                Un projet qui sort du cadre ?
                <br />
                Tant mieux.
            </h2>

            <p className="challenge-text">
                Un site vitrine, une application, un outil interne, un
                e-commerce ou une idée encore difficile à définir : je préfère
                chercher comment le construire plutôt que vous expliquer
                pourquoi ce n&apos;est pas possible.
            </p>

            <p className="challenge-signature">
                On part de votre besoin.
                <br />
                On trouve le chemin.
            </p>

            <a className="button button-light" href="#contact">
                Soumettre une idée <span>↗</span>
            </a>
            </div>
        </div>
        </section>
    );
}