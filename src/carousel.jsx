import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from './Images/1.jpg';
import image2 from './Images/2.jpg';
import image3 from './Images/3.jpg';
import image4 from './Images/4.jpg';
import image5 from './Images/5.jpg';

function Carousel() {
    const images = [
        { src: image1, alt: "Image 1", description: "This is the description for Image 1." },
        { src: image2, alt: "Image 2", description: "This is the description for Image 2." },
        { src: image3, alt: "Image 3", description: "This is the description for Image 3." },
        { src: image4, alt: "Image 4", description: "This is the description for Image 4." },
        { src: image5, alt: "Image 5", description: "This is the description for Image 5." }
    ];

    const chunkSize = 3;
    const [startIndex, setStartIndex] = useState(0);

    const handleClick = (index) => {
        console.log("Clicked on image", index);
    };

    const handlePrev = () => {
        setStartIndex(Math.max(0, startIndex - chunkSize));
    };

    const handleNext = () => {
        setStartIndex(Math.min(images.length - chunkSize, startIndex + chunkSize));
    };

    return (
        <div className="container">
            <div className="row">
                {images.slice(startIndex, startIndex + chunkSize).map((image, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="card-img-top"
                                onClick={() => handleClick(startIndex + index)}
                            />
                            <div className="card-body">
                                <p className="card-text">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-center">
                <span className="carousel-control-prev" onClick={handlePrev} style={{ left: 0 }}>
                    &lt;
                </span>
                <span className="carousel-control-next" onClick={handleNext} style={{ right: 0 }}>
                    &gt;
                </span>
            </div>
        </div>
    );
}

export default Carousel;
