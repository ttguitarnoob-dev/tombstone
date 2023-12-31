import BgImage from "../UI Components/BgImage";
import ContactForm from "../UI Components/ContactForm";
import Hero from "../../Images/Hero.webp"

export default function Home() {

    return(
        <section>
            <BgImage imgPath={Hero} />
            <ContactForm />
            <BgImage imgPath="https://cdn.openart.ai/stable_diffusion/52fcd0a26428a2967316e512b82250ea8ce08b17_2000x2000.webp" />
        </section>
    )
}