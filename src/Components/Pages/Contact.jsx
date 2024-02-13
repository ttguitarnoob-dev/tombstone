import ContactForm from "../UI Components/ContactForm";
import { Image } from "@nextui-org/react";

export default function Contact() {

    return (
        <section>
            <section className="home-bio">
            <div className="text-paragraph">
                <h1 className="page-title">Contact</h1>
                <p>Looking to give your loved one's memorial some extra care? Majestic Monuments is here for you!</p>
            </div>
            <div>
                <Image
                src="https://www.kindpng.com/picc/m/156-1568226_transparent-contact-icon-png-contact-us-icon-png.png"
                alt="contact"
                width="200"
                loading="lazy"
                />
            </div>
            </section>
            
            
            
            

            <ContactForm />
        </section>
    )
}