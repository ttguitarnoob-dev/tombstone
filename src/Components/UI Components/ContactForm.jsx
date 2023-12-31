import { Button, Input, Textarea } from "@nextui-org/react"

export default function ContactForm() {

    return (
        <section className="section-bg p-8 w-1/2 flex flex-col gap-4 justify-center">
            <h1>Contact Us</h1>
            <p>Hello! We'd love to hear from you. Just fill out the form below, and we'll get back to you in a snap! </p>
            <form>
                <div className="form-part flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input type="text" label="Your Name" />
                    <Input type="email" label="Email" />
                </div>
                <div className="form-part flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input type="phone" label="Phone Number" />
                    <Input type="text" label="Graveyard Location" />
                </div>
                <div className="form-part">
                    <Textarea
                        label="How Can We Help?"
                        className="max-w-xs"
                    />
                </div>
                <div className="form-part">
                    <Button>
                        Submit
                    </Button>
                </div>
            </form>
            
        </section>
    )
}