import InfoSection from "../UI Components/InfoSection";
import Headstone from "../../Images/Headstone_before_after.webp"
import Relettering from "../../Images/reletterinig.webp"
import Bronze1 from "../../Images/bronze_before_after.webp"
import Headstone1 from "../../Images/headstone_beforeafter-2.webp"
import Bench from "../../Images/bench-before-after.webp"
import Bronze2 from "../../Images/bronze_before_after2.webp"

export default function Gallery() {

    return(
        <section>
            <InfoSection
            title="Headstone Cleaning"
            text="Before and immediate after of a headstone covered in moss, lichen and dirt."
            imgPath={Headstone}
            bgColor={1}
            />
            <InfoSection
            title="Relettering"
            text="Before and after of a granite headstone with faded lettering. Cleaned granite and then restored lettering with black paint."
            imgPath={Relettering}
            bgColor={2}
            />
            <InfoSection
            title="Bronze Plaque Restoration"
            text="Before and after of a bronze plaque. Cleaned and polished and then sealed with wax."
            imgPath={Bronze1}
            bgColor={1}
            />
            <InfoSection
            title="Bench Cleaning"
            text="Before and after of a stone bench."
            imgPath={Bench}
            bgColor={2}
            />
            <InfoSection
            title="Headstone Cleaning"
            text="Before and immediate after of a granite headstone."
            imgPath={Headstone1}
            bgColor={1}
            />
            <InfoSection
            title="Bronze Plaque Restoration"
            text="Before and after of a bronze plaque. Cleaned and polished the letters and border, sealed with wax."
            imgPath={Bronze2}
            bgColor={2}
            />
        </section>
    )
}