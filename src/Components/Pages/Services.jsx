import InfoSection from "../UI Components/InfoSection";
import Cleaning from "../../Images/Cleaning.webp"
import Relettering from "../../Images/Relettering.webp"
import Photos from "../../Images/Photos.webp"
import { Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Subscriptions from "../UI Components/Subscription";
import { useNavigate } from "react-router";

export default function Services() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const navigate = useNavigate()
    function nav(){
        navigate("/Contact")
    }

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

            <Subscriptions btnAction={onOpen} />
            
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
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Subscriptions</ModalHeader>
              <ModalBody>
                <h2 className="modal-subtitle">Flowers</h2>
                <p> 
                  Subscriptions are available for fresh and silk flower arrangements! 
                </p>
                <p>
                  For fresh flowers we offer monthly subscriptions for $40. Total of 2 deliveries.
                </p>
                <p>
                  For silk flowers we offer 6 month subscriptions for $65. Total of 4 deliveries. 
                </p>
                <p>
                  I order from Amazon, Etsy, Walmart, HEB or a local flower shop. Tell me what you're looking for, I'll shop around and send you a few options to pick from.  I'll get the order placed (you pay for the flowers and subscription up front) and delivered for you. Pictures provided every time. Contact for more information!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onPress={nav}>
                  Contact
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


        </section>
    )
}