import { Button, Input, Textarea } from "@nextui-org/react"
import { createContext } from "react"
import { useNavigate } from "react-router"

export default function ContactForm() {
    const initialInput = {}
    const URL = "https://api.ttguitarnoob.cloud/majestics"
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
            <h1>Contact Us</h1>
            <p>Hello! We'd love to hear from you. Just fill out the form below, and we'll get back to you in a snap! </p>
            <form onSubmit={handleSubmit}>
                <div className="form-part flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input onChange={handleChange} name="name" type="text" label="Your Name" />
                    <Input onChange={handleChange} name="email" type="email" label="Email" />
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