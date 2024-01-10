import InfoSection from "../UI Components/InfoSection";
import Headstone from "../../Images/Headstone_before_after.webp"

export default function Gallery() {

    return(
        <section>
            <InfoSection
            title="Headstone Cleaning"
            text="Before and after of a granite headstone covered in moss, lichen and dirt."
            imgPath={Headstone}
            bgColor={1}
            />
            <InfoSection
            title="Headstone Cleaning"
            text="Before and after of a granite headstone covered in moss, lichen and dirt."
            imgPath={Headstone}
            bgColor={2}
            />
        </section>
    )
}