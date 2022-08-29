import React from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/procedures">Procedurs</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    
        <main>
        <h1>Contact</h1>
            <p>
                Call, email or drop by any time. We're open Monday through Friday from
                9AM until 5PM. If you call during our off hours and leave a message
                then we'll get back to you.
                <br />
                <br />
                frontdesk@dentistoffice.com
                <br />
                <br />
                1 (800) MY-TEETH
                <br />
                1 (800) 698-3384
                <br />
                <br />
                123 Main Street Dental Town, USA 99555
            </p>
        </main>

        </>
    );
}

export default Contact;