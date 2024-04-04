import InfoSection from "../UI Components/InfoSection";
import { CircularProgress, Image } from "@nextui-org/react"
import Subscriptions from "../UI Components/Subscription";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pricing() {

    const [prices, setPrices] = useState()

    async function getPrices() {
        const data = await axios.get("https://api.travisty-creations.com/prices")
        setPrices(data.data)
    }

    useEffect(() => {
        getPrices()
    }, [])



    if (!prices) {
        return (
            <section className="center-omg mt-10">
                <CircularProgress color="secondary" label="Loading Data..." />
            </section>
        )
    }


    return (
        <section>
            <section className="home-bio">
                <div className="text-paragraph">
                    <h1 className="page-title">Pricing</h1>
                    <p>General pricing list.  Actual quote determined by headstone type, size, distance from Bastrop County, etc.</p>
                </div>
                <div>
                    <Image
                        src="https://static.vecteezy.com/system/resources/previews/004/705/200/non_2x/price-tag-icon-design-symbol-pricing-label-merchandise-coupon-retail-for-ecommerce-free-vector.jpg"
                        alt="pricing"
                        width="200"
                        loading="lazy"
                    />
                </div>

            </section>
            <Subscriptions
                modalContent={[
                    { title: "Flowers", text: ["Subscriptions are available for fresh and silk flower arrangements!", `For fresh flowers we offer monthly subscriptions for $40 ($10 in savings). Total of 2 deliveries.`, `For silk flowers we offer 1 year subscriptions. Delivery every 2 months for a total of 6 deliveries for $120 ($20 in savings).`, `I order from Amazon, Etsy, Walmart, HEB or a local flower shop. Tell me what you're looking for, I'll shop around and send you a few options to pick from.  I'll get the order placed (you pay for the flowers and subscription up front) and delivered for you. Pictures provided every time. Contact for more information!`] },
                    {
                        title: "Headstones", text: [`General maintenance of Granite and Marble`, `Light clean and shine, including trinkets. Twice a month for 6 months. Before and after photos provided.`,
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
            <section>
                <InfoSection
                    text={`One-time visit ranging from $${prices[0].price} (single-plot grave marker) to $${prices[1].price} (large upright monuments). All with immediate before and after photos. I offer a repeat customer discount. 15% off 2nd cleaning . 20% off 3rd and all future cleanings.`}
                    title="Headstones"
                    bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />

                <InfoSection
                    text={`One-time visit starting at $${prices[2].price} (single-plot grave marker). Immediate before and after photos. Add refinishing service for $20.`}
                    title="Bronze Plaques"
                    bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />

                <InfoSection
                    text={`One-time visit starting at $${prices[3].price} (standard size). Immediate before and after photos.`}
                    title="Benches"
                    bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />

                <InfoSection
                    text={`Prerequisite for relettering is purchase of headstone cleaning services. Addition of relettering service starting at $${prices[4].price}. Requires premium paint and several hours time.`}
                    title="Relettering"
                    bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />


                <div className="home-bio" style={{ background: "linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)" }}>
                    <div className="text-paragraph">
                        <h2 className="title font-medium text-5xl">Picture Addition</h2>
                        <p>I partner with <a style={{ textDecoration: "underline" }} href="https://www.memorialpics.com" target="blank" >Memorial Pics, LLC</a> to provide porcelain pictures for your memorials. Pictures range from ${prices[5].price} for basic to ${prices[6].price} for fancy bronze cover. Order through me and you'll get a great discount off the original retail. Includes post-installation photo.</p>
                    </div>

                </div>

                {/* <div className="home-bio" style={{background: "linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"}}>
                <div className="text-paragraph">
                <h2 className="title font-medium text-5xl">Floral Delivery and Placement</h2>
                <p>I partner with <a style={{textDecoration: "underline"}} href="https://www.bastropflorist.net" target="blank" >Bastrop Florist</a> to provide saddle flower arrangmeents. They have been in business since 1969 and "Best of Bastrop" every year since 2003.  Silk flowers that will last 3-4 months. Prices range from $85-$150 for the flowers and you'll receive a discount if you order through me or mention my name. Pickup of prepaid floral arrangements, delivery and placement starting at $25. Includes photo after placement.</p>
                </div>
                
            </div> */}
                <InfoSection
                    text={`I can pick up your prepaid flower order and deliver to your plot.  Pickup, delivery and placement starting at $${prices[7].price}.  Check out Bastrop Florist for some great arrangements`}
                    title="Floral Delivery and Placement"
                    bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />



                <InfoSection
                    text="ALL PRICES ARE FOR WITHIN BASTROP COUNTY.  ANY REQUESTS BEYOND 30 MILES OF BASTROP COUNTY WILL REQUIRE AN EXTRA $0.25 PER MILE. "
                    title=""
                    bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
                />





            </section>
        </section>
    )
}