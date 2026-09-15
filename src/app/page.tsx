const services = [
  { number: "01", title: "Création web", text: "Un site clair, rapide et à votre image, du premier brief à la mise en ligne.", tags: "Vitrine · Refonte · Sur mesure" },
  { number: "02", title: "Visibilité locale", text: "Une présence Google Business Profile qui aide les bonnes personnes à vous trouver.", tags: "Mise en place · Optimisation · Suivi" },
  { number: "03", title: "Projets particuliers", text: "Une idée qui sort du cadre ? On la découpe ensemble pour trouver le chemin juste.", tags: "Outils internes · Apps · E-commerce" },
];

const steps = [
  ["01", "On échange", "Vous me racontez votre activité, votre idée et ce qui vous bloque."],
  ["02", "On clarifie", "Je vous propose une direction compréhensible, avec un périmètre et un budget."],
  ["03", "On construit", "Vous suivez l’avancement. On ajuste quand c’est utile, sans jargon inutile."],
  ["04", "On fait grandir", "Après la mise en ligne, je reste disponible pour améliorer et faire évoluer."],
];

export default function Home() {
    return (

    <main>
        <nav className="site-nav" aria-label="Navigation principale">
            <a className="brand" href="#top" aria-label="Retour en haut de page">nathan<span>.</span></a>
                <div className="nav-links"><a href="#services">Services</a>
                <a href="#projets">Projets</a><a href="#apropos">À propos</a>
                </div>
            <a className="nav-contact" href="#contact">Parlons de votre projet <span>↗</span></a>
        </nav>

        <section className="hero section-shell" id="top">
            <div className="hero-copy">
                <p className="eyebrow reveal">Développeur web freelance <span>·</span> Normandie / partout</p>
                <h1 className="reveal delay-1">Les idées<br /><em>compliquées</em><br />méritent une<br /><strong>bonne réponse.</strong></h1>
                <p className="hero-intro reveal delay-2">Je conçois des sites et des outils web utiles, accessibles et bien pensés. Petit projet ou défi hors norme, on commence par en parler.</p>
                <div className="hero-actions reveal delay-3"><a className="button button-primary" href="#contact">Parler de mon projet <span>↗</span></a>
                    <a className="text-link" href="#projets">Voir ce qui se construit <span>↓</span></a>
                </div>
            </div>
            <div className="hero-mark reveal delay-2" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="mark-core">
                    <span>TH</span>
                </div>
                <span className="mark-label label-top">curieux par nature</span>
                <span className="mark-label label-bottom">solution par méthode</span>
                <span className="mark-cross cross-one">+</span>
                <span className="mark-cross cross-two">+</span>
            </div>
            <div className="hero-foot">
                <span>01 — 07</span>
                <span>Scroll pour découvrir</span>
                <span className="line" />
            </div>
        </section>
        
        <section className="statement section-shell">
            <p className="section-kicker">Une personne derrière le code</p>
            <div className="statement-grid">
                <h2>Pas besoin de rentrer dans une case pour construire quelque chose de solide.</h2>
                <div>
                    <p>Vous avez peut-être besoin d’un site simple et abordable. Ou d’un outil qui n’existe pas encore. Dans les deux cas, je prends le temps de comprendre avant de proposer.</p>
                    <a className="text-link" href="#apropos">Faire connaissance <span>↗</span></a>
                </div>
            </div>
        </section>
        
        <section className="services section-shell" id="services">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Ce que je peux faire avec vous</p>
                    <h2>Des solutions à la<br /><em>bonne échelle.</em></h2>
                </div>
                <p className="heading-aside">Pas de catalogue figé. Chaque besoin mérite le bon niveau de soin, de temps et de technique.</p>
            </div>
            <div className="service-list">
                {services.map((service) => <article className="service-row" key={service.number}>
                                            <span className="service-number"> {service.number}</span>
                                            <h3>{service.title}</h3>
                                            <p>{service.text}</p>
                                            <span className="service-tags">{service.tags}</span>
                                            <span className="service-arrow">↗</span>
                                            </article>)}
            </div>
        </section>

        <section className="projects section-shell" id="projets">
            <div className="section-heading projects-heading">
                <div>
                    <p className="section-kicker">Projets & terrain de jeu</p>
                    <h2>Ce qui est<br /><em>en train de naître.</em></h2>
                </div>
                <p className="heading-aside">Cette sélection accueillera bientôt mes réalisations. En attendant, elle pose le cadre : des projets concrets, pas des promesses gonflées.</p>
            </div>
            <article className="project-placeholder">
                <div className="placeholder-art">
                    <span>PROJET<br />À VENIR</span>
                    <i>+</i>
                    <b>2026</b>
                </div>
                <div className="placeholder-copy">
                    <p className="project-type">01 / Étude de cas à venir</p>
                    <h3>Votre projet pourrait être le prochain.</h3>
                    <p>Un site pour votre activité, une refonte qui simplifie la vie, une idée à transformer en outil. Les prochains projets seront documentés ici, avec transparence.</p>
                    <a className="text-link" href="#contact">Parlons-en <span>↗</span></a>
                </div>
            </article>
        </section>
        
        <section className="challenge section-shell">
            <div className="challenge-top">
                <p className="section-kicker">La promesse</p>
                <span>02 — 07</span>
            </div>
            <div className="challenge-content">
                <p className="giant-word">Aucun<br /><em>défi</em></p>
                <div className="challenge-note">
                    <span className="asterisk">✳</span>
                    <h2>Ne pas tout savoir<br />n’a jamais empêché<br />de trouver.</h2>
                    <p>Je ne prétends pas avoir déjà tout fait. Je sais chercher, apprendre vite, poser les bonnes questions et m’entourer quand c’est nécessaire.</p>
                    <a className="button button-light" href="#contact">Soumettre une idée <span>↗</span></a>
                </div>
            </div>
        </section>
        
        <section className="local section-shell">
            <div className="local-stamp" aria-hidden="true">
                <span>LOCAL</span><strong>+<br />VISIBLE</strong><small>pour de vrai</small>
            </div>
            <div className="local-copy">
                <p className="section-kicker">Une présence qui travaille pour vous</p>
                <h2>Être trouvé<br /><em>au bon endroit.</em></h2>
                <p>Votre fiche Google Business Profile est souvent le premier contact avec un futur client. Je vous aide à la créer, la soigner et à comprendre ce qui la fait progresser.</p>
                <div className="local-items">
                    <span>Création & mise en place</span><span>Optimisation de la fiche</span>
                    <span>Suivi de visibilité</span><span>Recommandations concrètes</span>
                </div>
                <a className="text-link" href="#contact">Parler de visibilité locale <span>↗</span></a>
            </div>
        </section>
        
        <section className="process section-shell">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Simplement, du début à la suite</p>
                    <h2>Une méthode<br /><em>sans détour.</em></h2>
                </div>
            </div>
            <div className="steps"> 
                {steps.map(([number, title, text]) => <div className="step" key={number}>
                                                        <span>{number}</span>
                                                        <h3>{title}</h3>
                                                        <p>{text}</p>
                                                        </div>)}
            </div>
        </section>
        
        <section className="about section-shell" id="apropos">
            <div className="about-portrait" aria-hidden="true">
                <span>TH</span>
                <small>développeur web<br />mais pas seulement</small>
            </div>
            <div className="about-copy">
                <p className="section-kicker">À propos</p>
                <h2>Bonjour, moi c’est <em>Thomas.</em></h2>
                <p>Je construis mon activité avec une conviction simple : la qualité et l’écoute ne devraient pas être réservées aux projets qui ont les plus gros budgets.</p>
                <p>Je suis encore en train d’écrire la suite. Ce portfolio aussi. Mais chaque projet est une occasion de faire les choses proprement, d’apprendre quelque chose et de laisser un outil dont on est fier.</p>
                <a className="text-link" href="#contact">Me contacter <span>↗</span></a>
            </div>
        </section>
        
        <section className="final-cta section-shell" id="contact">
            <p className="section-kicker">Vous avez une idée ?</p>
            <h2>Faisons-lui<br /><em>une place.</em></h2>
            <a className="button button-primary" href="mailto:bonjour@thomas.dev">bonjour@thomas.dev <span>↗</span></a>
            <p className="cta-note">Même si elle est encore floue. Même si elle semble un peu particulière.</p>
        </section>
        
        <footer className="footer section-shell">
            <a className="brand" href="#top">thomas<span>.</span></a>
            <p>Sites, outils & idées qui avancent.</p>
            <div>
                <a href="#services">Services</a>
                <a href="#projets">Projets</a>
                <a href="mailto:bonjour@thomas.dev">Email</a>
            </div>
            <small>© 2026 Thomas — Fait avec soin.</small>
        </footer>

    </main>
  );
}
