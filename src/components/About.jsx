import Certificate1 from "../assets/img/Certificate1.png";
import Certificate2 from "../assets/img/Certificate2.png";
import Certificate3 from "../assets/img/Certificate3.png";
import Certificate4 from "../assets/img/Certificate4.png";
import Certificate5 from "../assets/img/Certificate5.png";
import Certificate6 from "../assets/img/Certificate6.png";
import Certificate7 from "../assets/img/Certificate7.png";
import Certificate8 from "../assets/img/Certificate8.png";
import Certificate9 from "../assets/img/Certificate9.png";
import Certificate10 from "../assets/img/Certificate10.png";
import Certificate11 from "../assets/img/Certificate11.png";
import Certificate12 from "../assets/img/Certificate12.png";
import Certificate13 from "../assets/img/Certificate13.png";
import Certificate14 from "../assets/img/Certificate14.png";
import Certificate15 from "../assets/img/Certificate15.png";
import FsLightbox from 'fslightbox-react';
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./About.css";

function About() {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
            <Helmet>
                <title>Syafwan - About</title>
            </Helmet>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    Certificate1,
                    Certificate2,
                    Certificate3,
                    Certificate4,
                    Certificate5,
                    Certificate6,
                    Certificate7,
                    Certificate8,
                    Certificate9,
                    Certificate10,
                    Certificate11,
                    Certificate12,
                    Certificate13,
                    Certificate14,
                    Certificate15,
                ]}
                slide={lightboxController.slide}
                
            />
            <Container fluid className="about-wrapper">
                <div className="about-left animate__animated animate__zoomIn">
                    <h3>About</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>02</strong></h4>
                </div>
                <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
                    <p>A vocational student majoring in software engineering, now I am studying in the field of web and mobile development. I live in Indonesia, I like learning about programming, playing games, listening music and watching film</p>
                    <h4>Certificates</h4>
                    <span>─────</span>
                    <div className="certificates-wrapper">
                        <div className="row my-2">
                            <div className="col certificates-ratio">
                                <img className="shadow" loading="lazy" src={Certificate1} alt="Certificate 1" onClick={() => openLightboxOnSlide(1)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate2} alt="Certificate 2" onClick={() => openLightboxOnSlide(2)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate3} alt="Certificate 3" onClick={() => openLightboxOnSlide(3)} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col certificates-ratio">
                                <img className="shadow" loading="lazy" src={Certificate4} alt="Certificate 4" onClick={() => openLightboxOnSlide(4)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate5} alt="Certificate 5" onClick={() => openLightboxOnSlide(5)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate6} alt="Certificate 6" onClick={() => openLightboxOnSlide(6)} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col certificates-ratio">
                                <img className="shadow" loading="lazy" src={Certificate7} alt="Certificate 7" onClick={() => openLightboxOnSlide(7)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate8} alt="Certificate 8" onClick={() => openLightboxOnSlide(8)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate9} alt="Certificate 9" onClick={() => openLightboxOnSlide(9)} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col certificates-ratio">
                                <img className="shadow" loading="lazy" src={Certificate10} alt="Certificate 10" onClick={() => openLightboxOnSlide(10)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate11} alt="Certificate 11" onClick={() => openLightboxOnSlide(11)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate12} alt="Certificate 12" onClick={() => openLightboxOnSlide(12)} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col certificates-ratio">
                                <img className="shadow" loading="lazy" src={Certificate13} alt="Certificate 13" onClick={() => openLightboxOnSlide(13)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate14} alt="Certificate 14" onClick={() => openLightboxOnSlide(14)} />
                            </div>
                            <div className="col certificates-ratio gap-image">
                                <img className="shadow" loading="lazy" src={Certificate15} alt="Certificate 15" onClick={() => openLightboxOnSlide(15)} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About;