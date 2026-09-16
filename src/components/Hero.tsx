export default function Hero() {
    return (
        <section className="hero section-shell" id="top">
                    <div className="hero-copy">
                        <p className="eyebrow reveal">Développeur web freelance <span>·</span> Normandie </p>
                        <h1 className="reveal delay-1">Des projets<br /><em>Web</em><br />sans limites<br /><strong>de terrain.</strong></h1>
                        <p className="hero-intro reveal delay-2">Je conçois aujourd'hui des sites web pour les indépendants et les entreprises, avec l'envie d'aller demain vers des projets plus ambitieux : outils, applications et SaaS.</p>
                        <div className="hero-actions reveal delay-3"><a className="button button-primary" href="#contact">Parler de mon projet <span>↗</span></a>
                            <a className="text-link" href="#projets">Voir ce qui se construit <span>↓</span></a>
                        </div>
                    </div>
                    <div className="hero-mark reveal delay-2" aria-hidden="true">
                        <div className="orbit orbit-one" />
                        <div className="orbit orbit-two" />
                        <div className="mark-core">
                            <span>NL</span>
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
    );
}