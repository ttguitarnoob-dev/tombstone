import { Button } from "@nextui-org/react";
import InfoSection from "../UI Components/InfoSection";

export default function Success() {
    return(
        <section>
            <InfoSection
            title="Success!"
            text="Your inquiry was delivered!"
            imgPath="https://www.organizationobsessed.com/wp-content/uploads/Yay-success-page.png"
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />
            
            <a href="/"><Button>Return Home</Button></a>

        </section>
    )
}