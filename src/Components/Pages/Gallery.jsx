import InfoSection from "../UI Components/InfoSection";
import Headstone1 from "../../Images/Headstone_before_after.webp"
import Relettering from "../../Images/reletterinig.webp"
import BronzeRefinish from "../../Images/bronze_before_after.webp"
import Headstone2 from "../../Images/headstone_beforeafter-2.webp"
import Headstone3 from "../../Images/Headstone-before-after-3.webp"
import Headstone4 from "../../Images/Headstone-before-after-4.webp"
import Bench from "../../Images/bench-before-after.webp"
import BronzeRestore from "../../Images/bronze_before_after2.webp"
import GallerySection from "../UI Components/Gallery";
import { Image } from "@nextui-org/react";

export default function Gallery() {

    return(
        <section>
            <section className="home-bio">
            <div className="text-paragraph">
                <h1 className="page-title">Gallery</h1>
                <p>Enjoy my gallery of before and after pictures of headstones, bronze plaques, and benches!</p>
            </div>
            <div>
                <Image
                src="https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-gallery-vector-icon-png-image_470660.jpg"
                alt="gallery"
                width="200"
                loading="lazy"
                />
            </div>
           
        </section>
            <GallerySection
            title="Headstone Cleaning"
            images={[Headstone1, Headstone2, Headstone3, Headstone4]}
            bgColor={1}
            />
            <GallerySection
            title="Relettering"
            images={[Relettering]}
            bgColor={2}
            />
            <GallerySection
            title="Bronze Refinishing"
            images={[BronzeRefinish]}
            bgColor={1}
            />
            <GallerySection
            title="Bronze Restoration"
            images={[BronzeRestore]}
            bgColor={2}
            />
            <GallerySection
            title="Bench Cleaning"
            images={[Bench]}
            bgColor={1}
            />
            {/* <InfoSection
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
            /> */}
        </section>
    )
}