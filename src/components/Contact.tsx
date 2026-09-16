import Link from "next/link";

export default function Contact () {
    return (

    <section className="final-cta section-shell" id="contact">
                <p className="section-kicker">Vous avez une idée ?</p>
                <h2>Faisons-lui<br /><em>une place.</em></h2>
                <Link className="button button-primary" href="/contact"> Votre projet commence ici. <span>↗</span></Link>
                <p className="cta-note">Même si elle est encore floue. Même si elle semble un peu particulière.</p>
            </section>  
    );
}