import ContactForm from "../UI Components/ContactForm";
import InfoSection from "../UI Components/InfoSection";
import Filler from "../../Images/Filler.jpeg"

export default function Contact() {

    return (
        <section>
            
            
            <InfoSection
                text="Looking to give your loved one's memorial some extra care? Majestic Monuments is here for you! Please reach out via the form below to let me know how I can provide my expert headstone cleaning that restores their memorial with a personal touch. "
                title="Contact"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
                imgPath={Filler}
            />

            <ContactForm />
        </section>
    )
}