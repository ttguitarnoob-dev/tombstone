import BgImage from "../UI Components/BgImage";
import ContactForm from "../UI Components/ContactForm";
import Hero from "../../Images/Hero.webp"
import InfoSection from "../UI Components/InfoSection";
import Logo from "../../Images/Logo.webp"

export default function Home() {

    return(
        <section>
            <BgImage imgPath={Hero} />
            <InfoSection
            title="Headstone Cleaning Services In Bastrop County, TX"
            text="Welcome to Majestic Monuments! If you have a memorial that needs attention in Bastrop County, TX, this is your best bet! Feel free to browse our services and get in touch if you have any questions. "
            imgPath={Logo}
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />
            <ContactForm />
        </section>
    )
}