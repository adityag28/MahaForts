import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';

export default function HostReach() {
    const { id } = useParams();

    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return <p>Details not found. Please check the ID in the URL.</p>;
    }

    const { name, district, details } = fortDetails;
    const { description, how_to_reach } = details;
    const { location, from_pune, from_mumbai, trek } = how_to_reach;

    return (
        <div className="fort-reach-container">
            <h2>How to Reach {name}</h2>
            <div className="reach-details">
                <p><b>Location:</b> {location}</p>
                <p><b>From Pune:</b> {from_pune}</p>
                <p><b>From Mumbai:</b> {from_mumbai}</p>
                <p><b>Trek Duration:</b> {trek}</p>
            </div>
        </div>
    );
}
