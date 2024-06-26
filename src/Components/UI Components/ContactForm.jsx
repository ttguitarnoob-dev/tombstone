import { Button, Input, Textarea, Link } from "@nextui-org/react"
import { useNavigate } from "react-router"
import { PhoneIcon } from "./Icons/PhoneIcon"
import { MailIcon } from "./Icons/MailIcon"
// import { InstagramIcon } from "./Icons/InstagramIcon"
import { TikTokIcon } from "./Icons/TikTokIcon"
import { FacebookIcon } from "./Icons/FacebookIcon"

export default function ContactForm() {
    const initialInput = {}
    const URL = "https://api.travisty-creations.com/majestics"
    const navigate = useNavigate()

    const handleChange = (e) => {
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)

        createItem(initialInput)

    }

    const createItem = async (data) => {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            // mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            console.log('creatign item')
            const createdContact = await fetch(URL, options)
            console.log('pooooo')
            // const parsedJournal = await createdJournal.json()
            console.log('created?', createdContact)
            navigate("/success")
            return createdContact


        } catch (err) {
            console.log('error creating journal', err)
        }
    }

    return (
        <section className="section-bg p-8 w-1/2 flex flex-col gap-4 justify-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <div>

                <Button
                    href="tel:7376104999"
                    as={Link}
                    isIconOnly
                    startContent={<PhoneIcon />}
                    ></Button>
                <Button
                    href="mailto:majesticmonumentsbykizzi@yahoo.com"
                    as={Link}
                    isIconOnly
                    startContent={<MailIcon />}
                    className="ml-7"
                    ></Button>
                <Button
                    href="https://www.facebook.com/profile.php?id=61555244048458&mibextid=uzlsIk"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    startContent={<FacebookIcon />}
                    className="ml-7"
                    ></Button>
                <Button
                    href="https://www.tiktok.com/@majesticmonumentsbykizzi?_t=8kiI3nQ7VAx&_r=1"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    startContent={<TikTokIcon />}
                    className="ml-7"
                    ></Button>
                
            </div>
                    <hr></hr>
            <p>Hello! We'd love to hear from you. Just fill out the form below, and we'll get back to you in a snap! Request a quote or just ask a question.  You won't be placed on any lists!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-part flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input isRequired onChange={handleChange} name="name" type="text" label="Your Name" />
                    <Input isRequired onChange={handleChange} name="email" type="email" label="Email" />
                </div>
                <div className="form-part flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input onChange={handleChange} name="phone" type="phone" label="Phone Number" />
                    <Input onChange={handleChange} name="location" type="text" label="Graveyard Location" />
                </div>
                <div className="form-part">
                    <Textarea
                        name="help"
                        onChange={handleChange}
                        label="How Can We Help?"
                        className="max-w-xs"
                    />
                </div>
                <div className="form-part">
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>

        </section>
    )
}