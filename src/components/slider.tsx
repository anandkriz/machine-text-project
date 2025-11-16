import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import leftArrow from "../assets/images/left.png"
import rightArrow from "../assets/images/right.png"

const App = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0dto_jP50ubkRBhmpfNHTXTpgto4z5VH68JIK1DI34vh0zuryg69FjEU41hiuU_dZ8fNXc2bZ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMu0yVz16lQ0kw_yW-CILr_G-K0bt9RVb9vjEmU83ivPXcw8QUPNjpX6WOWgLHpjTSo2w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"
    ];

      useEffect(() => {
        const slide = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(slide);
        
      }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className=" container-fluid py-5">
            <div className="row justify-content-center g-4 flex-column-reverse flex-md-row
 ">
                <div className="col-md-8">
                    <div className="slider-box" style={{overflow:"hidden"}} >
                        <Carousel
                            activeIndex={index}
                            onSelect={setIndex}
                            interval={null}
                            controls={false}
                            indicators={false}
                        >
                            {images.map((img, i) => (
                                <Carousel.Item key={i}>
                                    <img src={img} className="slider-image" alt="" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div className="custom-controls">
                            <span
                                className="arrow"
                                onClick={() => setIndex((index - 1 + images.length) % images.length)}
                            >
                                <img src={leftArrow} alt="left" />
                            </span>

                            <div className="dots">
                                {images.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`dot ${i === index ? "active" : ""}`}
                                    />
                                ))}
                            </div>

                            <span
                                className="arrow"
                                onClick={() => setIndex((index + 1) % images.length)}
                            >
                                <img src={rightArrow} alt="" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="right-frame">
                            <img
                                src={images.length===index+1 ? images[0] : images[index+1]}
                                className="frame-image"
                            />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
