import InfoSection from "../UI Components/InfoSection";
import { Image } from "@nextui-org/react"

export default function Pricing() {

    return(
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
        <section>
            <InfoSection
                text="One-time visit ranging from $35.00 (single-plot grave marker) to $150.00 (large upright monuments). All with immediate before and after photos and a follow-up photo in 3 weeks (final results are not visible right away)."
                title="Headstones"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />

            <InfoSection
                text="One-time visit starting at $25 (single-plot grave marker). Immediate before and after photos."
                title="Bronze Plaques"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />

            <InfoSection
                text="One-time visit starting at $50 (standard size). Immediate before and after photos, and follow up photo in 3 weeks (final results are not visible immediatly)."
                title="Benches"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />

            <InfoSection
                text="Requires purchase of headstone cleaning services first. Addition of relettering service starting at $100."
                title="Relettering"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />

            
            <div className="home-bio" style={{background: "linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"}}>
                <div className="text-paragraph">
                <h2 className="title font-medium text-5xl">Picture Addition</h2>
                <p>I partner with <a style={{textDecoration: "underline"}} href="https://www.memorialpics.com" target="blank" >Memorial Pics, LLC</a> to provide porcelain pictures for your memorials. Pictures range from $60 for basic to $300 for fancy bronze cover. Order through me and you'll get a great discount off the original retail. Includes post-installation photo.</p>
                </div>
                
            </div>

            <InfoSection
                text="Flower order, delivery and placement starting at $40. Includes photo after placement."
                title="Floral Delivery and Placement"
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />

            <InfoSection
                text="ALL PRICES ARE FOR WITHIN BASTROP COUNTY.  ANY REQUESTS BEYOND 30  MILES OF BASTROP COUNTY WILL REQUIRE AN EXTRA $0.25 PER MILE. "
                title=""
                bgColor="linear-gradient(90deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 68%, rgba(250,217,247,1) 100%)"
            />




            
            </section>
        </section>
    )
}