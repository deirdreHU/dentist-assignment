import React from "react";
import { Link } from 'react-router-dom';

const Procedures = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/procedures">Procedurs</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div>
                <h1>Procedures</h1>
                <p>
                Here at Dentist Office we provide a wide variety of procedures. We
                accept all sorts of insurance and have competitive uninsured payment
                plans. Find the service you need and visit our contact page to find
                out how to reach out to us to make the appointment you need!
                </p>
                <ul className="procedures">
                    <li>General Checkups</li>
                    <li>Teeth Cleaning</li>
                    <li>Cavity Screenings</li>
                    <li>Cavity Fillings</li>
                    <li>Chipped Tooth Fixings</li>
                    <li>Tooth Removal</li>
                    <li>Root Canals</li>
                </ul>
            </div>
        </>
        
    );
}

export default Procedures;
