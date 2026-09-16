export default function Navbar() {
    return (
        <nav className="site-nav" aria-label="Navigation principale">
            <a className="brand" href="#top" aria-label="Retour en haut de page">nathan<span>.</span></a>
                <div className="nav-links"><a href="#services">Services</a>
                <a href="#projets">Projets</a><a href="#apropos">À propos</a>
                </div>
            <a className="nav-contact" href="#contact">Parlons de votre projet <span>↗</span></a>
        </nav>
    );
}