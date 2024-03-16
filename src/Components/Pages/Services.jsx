import InfoSection from "../UI Components/InfoSection";
import Cleaning from "../../Images/Cleaning.webp"
import Relettering from "../../Images/Relettering.webp"
import Photos from "../../Images/Photos.webp"
import { Image, } from "@nextui-org/react";
import Subscriptions from "../UI Components/Subscription";
import Wreaths from "../UI Components/Wreaths";

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

      <Subscriptions
        modalContent={[
          { title: "Flowers", text: ["Subscriptions are available for fresh and silk flower arrangements!", `For fresh flowers we offer monthly subscriptions for $40 ($10 in savings). Total of 2 deliveries.`, `For silk flowers we offer 1 year subscriptions. Delivery every 2 months for a total of 6 deliveries for $120 ($20 in savings).`, `I order from Amazon, Etsy, Walmart, HEB or a local flower shop. Tell me what you're looking for, I'll shop around and send you a few options to pick from.  I'll get the order placed (you pay for the flowers and subscription up front) and delivered for you. Pictures provided every time. Contact for more information!`] },
          {
            title: "Headstones", text: [`General maintenance of Granite and Marble`, `Light clean and shine for mostly polished surfaced stones. Twice a month for 6 months. Before and after photos provided.`,
              `Small- Single flat Marker $560 ($40 in savings)`,
              `Medium- Single standing $1,150 ($50 in savings)`,
              `Large- Companion or Larger Single standing $1,700 ($100 in savings)`]
          },
          {
            title: "Bronze", text: [`Clean and seal with fresh wax once a month.`,
              `6 month subscription - $300 ($50 in savings)`,
              `1 year subscription - $520 ($100 in savings)`]
          }
        ]}
      />

      <InfoSection
        text="Soft brushes, water, and finished off with D/2 biological cleaner! D/2 is a biological solution great at removing stains, algae, lichen, mold, mildew and air pollutants. Small, medium, large, I do it all! "
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
      <InfoSection
        text="I've partnered with Wreaths By Nicole P.  She makes beautiful wreaths from your loved one's uniform. Check out her site!"
        title="Uniform Wreaths"
        bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
        card={<Wreaths />}
        
      />
      {/* <Wreaths /> */}
      {/* <Modal placement="top-center" scrollBehavior="inside" backdrop="blur" isOpen={isOpen} onClose={onClose}>
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
                <h2 className="modal-subtitle">Headstones</h2>
                <p>General maintenance of Granite and Marble</p>
                <p>
                  Light clean and shine for mostly polished surfaced stones. Twice a month for 6 months. Before and after photos provided.
                  Small- Single flat Marker $560 ($40 in savings)
                  Medium- Single standing $790 ($50 in savings)
                  Large- Companion or Larger Single standing $1,100 ($100 in savings)
                </p>
                <h2 className="modal-subtitle">Bronze</h2>
                <p>
                  Clean and seal with fresh wax once a month.
                  6 month subscription- $300 ($60 in savings)
                  1 year subscription- $620($100 in savings)
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
      </Modal> */}


    </section>
  )
}