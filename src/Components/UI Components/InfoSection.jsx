import { Image } from "@nextui-org/react"

export default function InfoSection({ imgPath, bgColor, text, title, isFlipped }) {

    function backgroundColor() {
        if (bgColor === 1){
            return "linear-gradient(310deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
        } else if (bgColor === 2) {
            return "linear-gradient(118deg, rgba(89,58,96,1) 0%, rgba(105,86,107,1) 50%, rgba(126,96,123,1) 100%)"
        } else {
            return bgColor
        }
    }

    const DisplayOrder = () => {
        if (!isFlipped) {
            return (
                <>
                    <div className="text-paragraph">
                        {title && <h2 className="title font-medium text-5xl">{title}</h2>}
                        <p>{text}</p>
                    </div>
                    {imgPath && <div>
                        <Image
                            src={imgPath}
                            alt="Info Section"
                            width="500"
                            loading="lazy"
                        />

                    </div>}
                </>
            )
        } else {
            return (
                <>
                    {imgPath && <div>
                        <Image
                            loading="lazy"
                            src={imgPath}
                            width="500"
                            alt="Info Section"
                        />
                    </div>}
                    <div className="text-paragraph">
                        {title && <h2 className="title font-medium text-5xl">{title}</h2>}
                        <p>{text}</p>
                    </div>

                </>
            )
        }

    }

    return (
        <section className="home-bio" style={{ background: backgroundColor() }}>
            <DisplayOrder />
        </section>
    )
}