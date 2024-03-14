import { Button, Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react"
import wreath from "../../Images/Cleaning.webp"

export default function Wreaths() {

    return (
        <>
            <section>
                {/* <div className="p-7">
                    <h2 className="text-5xl mb-3">Univorm Wreaths</h2>
                    <p>I've partnered with Wreaths By Nicole P.  She makes beautiful wreaths from your loved one's univorm. Check out her site!</p>
                </div> */}
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        <h4 className="text-black font-medium text-2xl">Wreaths By Nicole P</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src={wreath}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Order through me, or mention Majestic Monuments to get 5% off!</p>
                        </div>
                        <Button href="https://wreathsbynicolep.com" as={Link} target="_blank" className="text-tiny" color="primary" radius="full" size="sm">
                            Visit Site
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </>
    )
}