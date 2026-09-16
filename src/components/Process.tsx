type Step = {
    number: string;
    title: string;
    text: string;
}

type ProcessProps = {
    steps: Step[];
}

export default function Process ({ steps }: ProcessProps) {
    return (
        <section className="process section-shell">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Du premier échange à la mise en ligne</p>
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
    );
}