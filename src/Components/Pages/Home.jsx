import BgImage from "../UI Components/BgImage";
import ContactForm from "../UI Components/ContactForm";
import Hero from "../../Images/Hero.webp"

export default function Home() {

    return(
        <section>
            <BgImage imgPath={Hero} />
            <ContactForm />
        </section>
    )
}