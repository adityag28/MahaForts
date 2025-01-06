import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';

export default function HostArchitectureFeatures() {
    const { id } = useParams();

    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return <p>Details not found. Please check the ID in the URL.</p>;
    }

    const { name, district, details } = fortDetails;
    const { description, places_to_visit, architecture } = details;

    return (
        <div className="fort-architecture-features">
            <h2>Architectural Features of {name}</h2>

            {/* If architecture data exists, display it */}
            {architecture ? (
                <div>
                    <h3>Architectural Highlights:</h3>
                    <p>{architecture}</p>
                </div>
            ) : (
                <p>No specific architectural details available.</p>
            )}

            {/* Display Places to Visit */}
            <p><b>Places to Visit:</b></p>
            <ul>
                {places_to_visit.map((place, index) => (
                    <li key={index}>{place}</li>
                ))}
            </ul>
        </div>
    );
}
