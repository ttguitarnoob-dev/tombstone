import { Button } from "@nextui-org/react"

export default function Subscriptions({ btnAction }) {

    return (
        <>
            <section>
                <div className="banner-container">
                    <div>
                        <h2 className="banner-title">Subscription deals available!</h2>
                    </div>
                    <div>
                        <Button onClick={btnAction} >
                            More Info
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}