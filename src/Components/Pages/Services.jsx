import InfoSection from "../UI Components/InfoSection";
import Cleaning from "../../Images/Cleaning.webp"
import Relettering from "../../Images/Relettering.webp"
import Photos from "../../Images/Photos.webp"

export default function Services() {

    return (
        <section>
            <InfoSection
            text="I provide several different services.  Please explore below for more information."
            title="Services"
            bgColor="linear-gradient(283deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />
            <InfoSection 
            text="Soft brushes, water, D/2 and nothing more! D/2 is a biological solution great at removing stains, algae, lichen, mold, mildew and air pollutants. This product works over time. Roughly two weeks after cleaning and applying, the headstone will be almost good as new. Small, medium, large, I do it all! "
            title="Headstone Cleaning"
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Cleaning}
            />

            <InfoSection
            text="Have a stone with fading letters? I can safely and carefully apply paint to have them vibrant again. Black and white lettering available. Headstone cleaning must be performed before relettering is possible."
            title="Relettering"
            bgColor="linear-gradient(283deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Relettering}
            />
            
            <InfoSection 
            text="Want to add a photo of your loved one? I partner with a company in San Antonio who provides high quality porcelain photos. Just send me your photo and I will place the order and install. The pictures range from $60-$160 + small installation fee. Round, Oval, Rectangle or heart shapes available. "
            title="Picture Addition"
            bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath={Photos}
            />

            <InfoSection 
            text="Scrubbed down with soapy water then sealed with Renaissance Wax Polish to help protect against the elements! Suggest doing annually.  "
            title="Bronze Plaques"
            bgColor="linear-gradient(283deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            imgPath="https://www.crbronzeworks.com/wp-content/gallery/custom-bronze-grave-markers/Allens.jpg"
            />

        </section>
    )
}