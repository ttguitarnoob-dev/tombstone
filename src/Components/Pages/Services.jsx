import InfoSection from "../UI Components/InfoSection";
import Cleaning from "../../Images/Cleaning.webp"
import Relettering from "../../Images/Relettering.webp"
import Photos from "../../Images/Photos.webp"

export default function Services() {

    return (
        <section>
            <InfoSection
            text="Please take a look at the services I provide!"
            title="Services"
            bgColor="linear-gradient(283deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />
            <InfoSection 
            text="Soft brushes, water , D/2 and nothing more ! D/2 is a biological solution great at removing stains, algae, lichen, mold, mildew and air pollutants. This products works over time, in about two weeks after cleaning and applying your headstone will be almost good as new. Small, medium, large, I do it all! "
            title="Headstone Cleaning"
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Cleaning}
            />

            <InfoSection
            isFlipped="true" 
            text="Relettering- Have a stone with fading letters ? I can safely and carefully apply paint to have them vibrant again. Black and white lettering available. Headstone cleaning must be performed before relettering is possible."
            title="Relettering"
            bgColor="linear-gradient(283deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Relettering}
            />
            
            <InfoSection 
            text="Want to add a photo of your loved one? I partner with a company in San Antonio who provides high quality porcelain photos that I can install for a small fee. The pictures range from $60-$160. Round, Oval, Rectangle or heart shapes available. "
            title="Picture Addition"
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Photos}
            />

        </section>
    )
}