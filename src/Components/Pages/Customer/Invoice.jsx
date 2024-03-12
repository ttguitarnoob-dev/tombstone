import { Button } from "@nextui-org/button";
import Logo from "../../../Images/Logo.png"
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { useParams } from "react-router";

const Invoice = () => {
    const [invoice, setInvoice] = useState()
    const { id } = useParams()

    function generatePDF() {
        const report = new jsPDF('portrait', 'pt', 'a4')
        report.html(document.querySelector('.invoice-container')).then(() => {
            report.save(`Invoice - Majestic Monuments - ${invoice.job} - ${invoice.client}  - ${new Date(invoice.date).toLocaleDateString()}`)
        })
    }

    
    async function handleFetch() {
        const URL = `https://api.ttguitarnoob.cloud/invoices/${id}`
        
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setInvoice(data)
        } catch (err) {
            console.log('something bad happened when fetching invoices', err)
        }
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    
    function paidStatus() {
        if (invoice.paid) {
            return 0
        } else {
            return invoice.total
        }
    }

    if (!invoice) {
        return (
            <section className="center-omg mt-10">
                <CircularProgress color="secondary" label="Loading Invoice..." />
            </section>
        )
    }



    return (
        <><div className="center-omg">
            <Button className="mt-10" color="secondary" onPress={generatePDF}>Save Invoice As PDF</Button>
            </div>
            <section className="mb-10"></section>
            <div
                className="invoice-container"
                style={{
                    fontFamily: 'Arial, sans-serif',
                    width: '6in',
                    height: '10in',
                    margin: 'auto',
                    padding: '20px',
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '20px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <img src={Logo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '24px' }}>Majestic Monuments</div>
                        <div style={{ fontSize: '16px', color: 'gray' }}>Elgin, TX</div>
                    </div>
                </div>

                {/* Bill To */}
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{ flex: 1, marginRight: '20px', padding: '10px' }}>
                        <div style={{ padding: '0.3rem', fontWeight: 'bold', backgroundColor: '#e195ea' }}>Bill To:</div>
                        <div>{invoice.client}</div>
                        <div>Phone: {invoice.phone}</div>
                        <div>Email: {invoice.email}</div>
                    </div>

                    {/* Invoice Details */}
                    <div style={{ flex: 1, padding: '10px' }}>
                        <div style={{ padding: '0.3rem', backgroundColor: '#e195ea', fontWeight: 'bold' }}>Invoice Details:</div>
                        <div>Location: {invoice.job}</div>
                        <div>Date: {new Date(invoice.date).toLocaleDateString()}</div>
                    </div>
                </div>

                {/* Line Item Table */}
                <p className="p-5">Job Details: {invoice.jobDetails}</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#e195ea', fontWeight: 'bold' }}>
                            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Service</th>
                            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Service Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Populate with line items */}
                        {invoice.services && invoice.services.map((oneService, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{oneService.serviceName}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>${oneService.price}.00</td>
                            </tr>
                        ))}
                        {/* Add more rows for additional items */}
                    </tbody>
                </table>

                {/* Thank you message */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', marginBottom: '20px' }}>
                    <div>Thank you for your business!</div>
                    <div style={{ textAlign: 'right', backgroundColor: 'lightblue', padding: '10px' }}>
                        <p>Total: ${invoice.total}.00</p>
                        <p className="font-bold">Total Due: ${paidStatus()}.00</p>
                        
                        </div>
                </div>

                {/* Footer */}
                <div style={{ padding: '10px' }}>
                    If you have any questions about this invoice, please reach out to Kizzi at <a style={{ textDecoration: 'underline' }} href="mailto:majesticmonumentsbykizzi@yahoo.com">majesticmonumentsbykizzi@yahoo.com</a>
                </div>
            </div>

        </>
    );
};

export default Invoice;
