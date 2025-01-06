import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { LuMountain } from "react-icons/lu";

export default function HostFortDetails() {
    const { id } = useParams();
    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return (
            <div>
                <p>Details not found. Please check the ID in the URL.</p>
                <button onClick={() => window.history.back()}>Go Back</button>
            </div>
        );
    }

    const { name, district, details, map } = fortDetails;
    const { description, places_to_visit } = details;

    return (
        <div className='host-fort-description'>
            <div className="fort-description">
                <p><b>Name:</b> {name}</p>
                <p><b>Description:</b> {description}</p>
            </div>

            {places_to_visit && places_to_visit.length > 0 && (
                <div className="places-to-visit">
                    <p><b>Places to Visit:</b></p>
                    <ul>
                        {places_to_visit.map((place, index) => (
                            <li key={index}>{place}</li>
                        ))}
                    </ul>
                </div>
            )}

            {map && (
                <div className="fort-map">
                    <iframe
                        title="Fort Location"
                        src={`https://maps.google.com/maps?q=${map.latitude},${map.longitude}&z=15&output=embed`}
                        width="100%"
                        height="300px"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            )}
        </div>
    );
}
