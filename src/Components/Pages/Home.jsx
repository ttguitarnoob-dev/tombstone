import BgImage from "../UI Components/BgImage";
import ContactForm from "../UI Components/ContactForm";

export default function Home() {

    return(
        <section>
            <BgImage imgPath="https://miro.medium.com/v2/resize:fit:1400/1*UyUxx4Ijt0X6hLB9U6iYrQ.png" />
            <ContactForm />
            <BgImage imgPath="https://cdn.openart.ai/stable_diffusion/52fcd0a26428a2967316e512b82250ea8ce08b17_2000x2000.webp" />
        </section>
    )
}