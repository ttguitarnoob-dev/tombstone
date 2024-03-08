import { Button } from "@nextui-org/button";
import Logo from "../../../Images/Logo.png"
import jsPDF from "jspdf";

const Invoice = () => {

    function generatePDF() {
        const report = new jsPDF('portrait', 'pt', 'a4')
        report.html(document.querySelector('.invoice-container')).then(() => {
            report.save(`Invoice - Majestic Monuments - Jack Hays Statue San Marcos - 3/10/2024`)
        })
    }

    return (
        <>
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
                        <div>Linda Coker</div>
                        <div>Phone: </div>
                        <div>Email: l_coker@hotmail.com</div>
                    </div>

                    {/* Invoice Details */}
                    <div style={{ flex: 1, padding: '10px' }}>
                        <div style={{ padding: '0.3rem', backgroundColor: '#e195ea', fontWeight: 'bold' }}>Invoice Details:</div>
                        <div>Location: Jack Hays Statue</div>
                        <div>Date: 3/10/24</div>
                    </div>
                </div>

                {/* Line Item Table */}
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#e195ea', fontWeight: 'bold' }}>
                            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Service</th>
                            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Details</th>
                            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Populate with line items */}
                        <tr>
                            <td style={{ border: '1px solid black', padding: '8px' }}>Custom Cleaning Job</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>Clean , relettering and bronze plaque refinishing</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>$300.00</td>
                        </tr>
                        {/* Add more rows for additional items */}
                    </tbody>
                </table>

                {/* Thank you message */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', marginBottom: '20px' }}>
                    <div>Thank you for your business!</div>
                    <div style={{ textAlign: 'right', backgroundColor: 'lightblue', padding: '10px' }}>Total: $300.00</div>
                </div>

                {/* Footer */}
                <div style={{ padding: '10px' }}>
                    If you have any questions about this invoice, please reach out to Kizzi at <a style={{textDecoration: 'underline'}} href="mailto:majesticmonumentsbykizzi@yahoo.com">majesticmonumentsbykizzi@yahoo.com</a>
                </div>
            </div>
            <Button onPress={generatePDF}>Save Invoice As PDF</Button>
        </>
    );
};

export default Invoice;
