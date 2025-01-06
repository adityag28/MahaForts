import React from 'react';
import fortsData from '../data/forts-data.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Forts() {
    const uniqueDistricts = [...new Set(fortsData.map(fort => fort.district))];

    const fortCount = fortsData.reduce((acc, fort) => {
        acc[fort.district] = (acc[fort.district] || 0) + 1;
        return acc;
    }, {});

    const placeInfo = {
        Pune: "Pune, known as the cultural capital of Maharashtra, is home to several historic forts, including the iconic Sinhagad, Rajgad, and Purandar. These forts played significant roles in Maratha history and offer stunning views of the surrounding landscapes.",
        Satara: "Satara is famous for its strategic forts, including the historic Sajjangad, where the saint Samarth Ramdas spent his last years, and the towering Pratapgad, which witnessed the legendary battle between Shivaji Maharaj and Bijapur forces. These forts are steeped in Maratha heritage.",
        Raigad: "Raigad is a prominent fort that served as the capital of the Maratha Empire under Chhtrapati Shivaji Maharaj. Perched atop a hill, it offers breathtaking views and is known for its historical significance, including the coronation of Shivaji as the Chhatrapati.",
        Nashik: "Nashik is home to several historic forts, including the rugged Trimbak Fort and the majestic Anjneri Fort, believed to be the birthplace of Lord Hanuman. These forts offer glimpses into Nashik's rich heritage and Maratha history, set against scenic landscapes.",
        'Chhatrapati Sambhajinagar (Aurangabad)': "Aurangabad is renowned for its historical forts like Daulatabad Fort, a formidable hill fortress that once served as the capital of the Delhi Sultanate, and the Ellora Caves, which are dotted with ancient fortifications. These forts highlight the region's strategic importance.",
        Kolhapur: "Kolhapur is home to the historic Panhala Fort, known for its impressive fortifications and role in Maratha history. The fort was a significant military stronghold during the reign of Chhatrapati Shivaji Maharaj and offers panoramic views of the surrounding Sahyadri range.",
        'Ahilyanagar (Ahmednagar)': "Ahmednagar is known for its imposing Ahmednagar Fort, which played a crucial role during the Mughal and Maratha conflicts. This well-preserved fort is famous for its strategic location and rich history, including its use as a military base.",
        Thane: "Thane is home to several historical forts, including the lesser-known Yeoor Fort and the ancient St. John Fort. These forts, surrounded by lush greenery, reflect the region's strategic importance during the Maratha and British eras.",
        Amravati: "Amravati is known for the historic Amba Devi Fort, located on the hilltop near the Amba Devi Temple. The fort, with its scenic surroundings, was a key location during the Maratha period and offers insights into the region’s rich cultural.",
        Nagpur: "Nagpur is home to the historic Nagpur Fort, built by the Bhonsle rulers of the Maratha Empire. The fort, with its strong walls and gates, played a significant role in protecting the city during various battles and is a testament to the region’s Maratha heritage.",
        Ratnagiri: "Ratnagiri is known for the historical Ratnadurg Fort, which overlooks the Arabian Sea and offers stunning views. This fort played an important role in safeguarding the region during the Maratha and British periods and is a key landmark of Ratnagiri’s coastal heritage.",
        Sindhudurg: "Sindhudurg is famous for the Sindhudurg Fort, built by Chhatrapati Shivaji Maharaj on an island off the coast. Known for its impressive architecture and strategic location, the fort served as a vital naval base for the Maratha Empire and remains a symbol of Maratha maritime power.",
        Latur: "Latur is home to the historic Udgir Fort, which played a crucial role during the Maratha and Nizam rule. Situated on a hill, the fort offers a glimpse into the region’s strategic military importance and rich cultural heritage."
    }

    const districtImage = {
        Pune: " ../images/Rajgad.jpg",
        Satara: " ../images/Kaas.jpg",
        Raigad: "../images/Raigad.jpeg",
        Nashik: "../images/Harihar.jpg",
        'Chhatrapati Sambhajinagar (Aurangabad)': "../images/Devgiri.jpg",
        Kolhapur: "../images/Panhala.jpg",
        'Ahilyanagar (Ahmednagar)': "../images/Kalasubai.jpg",
        Thane: "../images/Mahuli.jpg",
        Amravati: "../images/Chikhaldara.jpg",
        Nagpur: "../images/Ambagad.jpg",
        Ratnagiri: "../images/Ratnadurg.jpg",
        Sindhudurg: "../images/Sindhudurg.jpg",
        Latur: "../images/Ausagad.jpg"
    }

    const districtCards = uniqueDistricts.map((district, index) => (
        <Card key={`${district}-${index}`} style={{ width: '24rem' }} className="place-card-tile">
            <Link to={`/district/${district}`}>
                <Card.Img
                    variant="top"
                    src={districtImage[district]}
                    alt={`${district} fort image`}
                    className='fort-img'
                />
                <Card.Body>
                    <Card.Title style={{ fontSize: "14px", fontWeight: "600" }}>{district}</Card.Title>
                    <Card.Text>Total Forts: {fortCount[district] || 0}</Card.Text>
                    <Card.Text style={{ textAlign: "justify", wordSpacing: "0.5px" }}>{placeInfo[district]}</Card.Text>
                    <Button variant="primary">Take a Tour</Button>
                </Card.Body>
            </Link>
        </Card >
    ));

    return (
        <div className="place-container">
            <h1>Explore Forts by Place</h1>
            <div className="place-card">{districtCards}</div>
        </div>
    );
}
