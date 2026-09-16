import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Challenge from "@/components/Challenge";
import Local from "@/components/Local";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "./data/services_data";
import { steps } from "./data/steps_data";

export default function Home() {
    return (

    <main>

        <Navbar />

        <Hero />

        <Services services={services} />

        <Projects />
        
        <Challenge />
        
        <Local />
        
        <Process steps={steps} />
        
        <About />
        
        <Contact />
        
        <Footer />

    </main>
    );
}