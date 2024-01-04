import ContactForm from "../UI Components/ContactForm";
import InfoSection from "../UI Components/InfoSection";
import Filler from "../../Images/Filler.jpeg"

export default function Contact() {

    return (
        <section>
            
            
            <InfoSection
                text="Looking to give your loved one's memorial some extra care? Majestic Monuments is here for you!  "
                title="Contact"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath="https://lirp.cdn-website.com/1b0495a5/dms3rep/multi/opt/burial+makers-640w.jpg"
            />

            <ContactForm />
        </section>
    )
}