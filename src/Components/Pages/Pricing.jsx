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
                text="One-time visit ranging from $50.00 (single-plot grave marker) to $150.00 (large upright monuments). All with immediate before and after photos and a follow-up photo in 3 weeks (final results are not visible right away)."
                title="Headstones"
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
            />

            <InfoSection
                text="One-time visit starting at $40 (single-plot grave marker). Immediate before and after photos."
                title="Bronze Plaques"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
            />

            <InfoSection
                text="One-time visit starting at $50 (standard size). Immediate before and after photos, and follow up photo in 3 weeks (final results are not visible immediatly)."
                title="Benches"
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
            />

            <InfoSection
                text="Prerequisite for relettering is purchase of headstone cleaning services. Addition of relettering service starting at $100. Requires premium paint and several hours time."
                title="Relettering"
                bgColor="linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
            />

            
            <div className="home-bio" style={{background: "linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"}}>
                <div className="text-paragraph">
                <h2 className="title font-medium text-5xl">Picture Addition</h2>
                <p>I partner with <a style={{textDecoration: "underline"}} href="https://www.memorialpics.com" target="blank" >Memorial Pics, LLC</a> to provide porcelain pictures for your memorials. Pictures range from $100 for basic to $300 for fancy bronze cover. Order through me and you'll get a great discount off the original retail. Includes post-installation photo.</p>
                </div>
                
            </div>

            <div className="home-bio" style={{background: "linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"}}>
                <div className="text-paragraph">
                <h2 className="title font-medium text-5xl">Floral Delivery and Placement</h2>
                <p>I partner with <a style={{textDecoration: "underline"}} href="https://www.bastropflorist.net" target="blank" >Bastrop Florist</a> to provide saddle flower arrangmeents. They have been in business since 1969 and "Best of Bastrop" Every year since 2003.  Silk flowers that will last 3-4 months. Prices range from $85-$150 for the flowers and you'll receive a discount if you order through me or mention my name. Pickup of prepaid floral arrangements, delivery and placement starting at $25. Includes photo after placement.</p>
                </div>
                
            </div>

            

            <InfoSection
                text="ALL PRICES ARE FOR WITHIN BASTROP COUNTY.  ANY REQUESTS BEYOND 30 MILES OF BASTROP COUNTY WILL REQUIRE AN EXTRA $0.25 PER MILE. "
                title=""
                bgColor="linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
            />




            
            </section>
        </section>
    )
}