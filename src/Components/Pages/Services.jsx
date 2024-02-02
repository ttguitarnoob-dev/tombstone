import InfoSection from "../UI Components/InfoSection";
import Cleaning from "../../Images/Cleaning.webp"
import Relettering from "../../Images/Relettering.webp"
import Photos from "../../Images/Photos.webp"
import { Image } from "@nextui-org/react";

export default function Services() {

    return (
        <section>
            <section className="home-bio">
                <div className="text-paragraph">
                    <h1 className="page-title">Services</h1>
                    <p>I provide several different services.  Please explore below for more information.</p>
                </div>
                <div>
                <Image
                src="https://static.vecteezy.com/system/resources/previews/003/175/256/large_2x/bucket-with-foam-and-bubbles-linear-icon-vector.jpg"
                alt="services"
                width="200"
                loading="lazy"
                />
            </div>
            </section>
            
            <InfoSection
                text="Soft brushes, water, and finished off with D/2 biological cleaner! D/2 is a biological solution great at removing stains, algae, lichen, mold, mildew and air pollutants. This product works over time. Roughly two weeks after cleaning and applying, the headstone will be almost as good as new. Small, medium, large, I do it all! "
                title="Headstone Cleaning"
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath={Cleaning}
            />
            <InfoSection
                text="Scrubbed down with soapy water, letters and borders polished, then sealed with Trewax Clear Paste Wax to help protect against the elements. If you have a headstone that is beyond cleaning, I can refinish it with paint, polish and seal."
                title="Bronze Plaques"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath="https://www.crbronzeworks.com/wp-content/gallery/custom-bronze-grave-markers/Allens.jpg"
            />
            <InfoSection
                text="Same process as headstones for granite and marble benches."
                title="Benches"
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath="https://images.squarespace-cdn.com/content/v1/5caa46c10b77bd3666d5b640/1560369228268-P86O4Q2P1BTKEOBQYL2O/Allen+1.JPG"
            />

            <InfoSection
                text="Have a stone with fading letters? I can safely and carefully apply paint to have them vibrant again. Black and white lettering available. Headstone cleaning must be performed before relettering is possible."
                title="Relettering"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath={Relettering}
            />

            <InfoSection
                text="Want to add a photo of your loved one? I partner with a company in San Antonio who provides high quality porcelain photos. Just send me your photo and I will place the order and install for free. Round, Oval, Rectangle or heart shapes available. "
                title="Picture Addition"
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath={Photos}
            />

            <InfoSection
                text="Choose and prepay for your own floral piece and I will pick it up, place it for you and send you a photo."
                title="Flower Delivery and Placement"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                imgPath="https://i.etsystatic.com/10673097/r/il/4d2d65/5354555832/il_fullxfull.5354555832_acr4.jpg"
            />


        </section>
    )
}