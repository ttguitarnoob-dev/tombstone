import InfoSection from "../UI Components/InfoSection";
import Kizzi from "../../Images/Kizzi.webp"

export default function About() {

    return (
        <>
        <InfoSection
                text="Hey, I'm Kizzi, and I'm on a mission here in Bastrop County with Majestic Monuments. I believe memories should be cherished, and that's why I've committed myself to bring a special touch to your loved ones' memorials. What sets Majestic Monuments apart is the personal touch. When you choose my services, you're not just getting a cleaner for headstones; you're getting someone who cares deeply about the memories that matter most to you. I believe in the power of a well-maintained memorial to honor and celebrate the lives of those who've left a lasting impact on our lives. So, let's work together to keep those memories shining bright. Whether it's a heartfelt tribute or a special dedication, Majestic Monuments is here to ensure your loved ones are remembered in the most beautiful way possible. Let's preserve the stories, one clean headstone at a time."
                title="About"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
                imgPath={Kizzi}
            />
        </>
        
    )
}