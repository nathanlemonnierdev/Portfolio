type Service = {
    number: string;
    title: string;
    text: string;
    tags: string;
};

type ServicesProps = {
    services: Service[];
};

export default function Services({ services }: ServicesProps) {
    return (
        <section className="services section-shell" id="services">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">
                        Ce que je peux faire avec vous
                    </p>

                    <h2>
                        Des solutions à la<br />
                        <em>bonne échelle.</em>
                    </h2>
                </div>

                <p className="heading-aside">
                    Pas de catalogue figé. Chaque besoin mérite le bon niveau
                    de soin, de temps et de technique.
                </p>
            </div>

            <div className="service-list">
                {services.map((service) => (
                    <article
                        className="service-row"
                        key={service.number}
                    >
                        <span className="service-number">
                            {service.number}
                        </span>

                        <h3>{service.title}</h3>

                        <p>{service.text}</p>

                        <span className="service-tags">
                            {service.tags}
                        </span>

                        <span className="service-arrow">↗</span>
                    </article>
                ))}
            </div>
        </section>
    );
}