import BgImage from "../UI Components/BgImage";
import ContactForm from "../UI Components/ContactForm";
import Hero from "../../Images/Hero.webp"
import InfoSection from "../UI Components/InfoSection";

export default function Home() {

    return(
        <section>
            <BgImage imgPath={Hero} />
            <ContactForm />
        </section>
    )
}