import { Image } from "@nextui-org/react"

export default function GallerySection({ title, images, bgColor }) {

    function bgChoose(){
        if (bgColor === 1){
            return "linear-gradient(113deg, rgba(235,218,245,1) 0%, rgba(216,185,247,1) 100%)"
        } else if (bgColor === 2){
            return "linear-gradient(113deg, rgba(203,166,224,1) 0%, rgba(201,154,247,1) 100%)"
        } else {
            return bgColor
        }
    }

    return (
        <section className="gallery-section" style={{ background: bgChoose() }}>
            <div className="text-paragraph">
                <h2 className="title font-medium text-5xl">{title}</h2>
            </div>
            <div className="gallery-images">
                {images && images.map((oneImage) => (
                    <div className="image-frame">
                    <Image
                        src={oneImage}
                        alt="Gallery"
                        width="400"
                        loading="lazy"
                    />
                    </div>
                ))}
            </div>
        </section>
    )
}