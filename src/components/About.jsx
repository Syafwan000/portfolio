import { AiFillClockCircle, AiFillFolderOpen } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Certificates from "./Certificates";
import Experience from "./Experience";
import "./About.css";

function About() {
    const [changeTab, setChangeTab] = useState('experience');

    return (
        <>
            <Helmet>
                <title>Syafwan - About</title>
            </Helmet>
            <Container fluid className="about-wrapper">
                <div className="about-left animate__animated animate__zoomIn">
                    <h3>About</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>02</strong></h4>
                </div>
                <div className="about-right animate__animated animate__fadeIn animate__slower">
                    <p>A fresh graduate from Vocational High School focusing on Software Engineering especially developing web Front-end and Back-end, I usually work using Laravel and ReactJS, I like learning new things about technology. Currently i'm continuing my studies taking bachelor program Informatics Engineering</p>
                    <div className="tabs">
                        <button onClick={() => setChangeTab('experience')} className={
                            changeTab === 'experience' ? 'btn-tabs active-tabs' : 'btn-tabs'
                        }><AiFillClockCircle className="me-2" />Experience</button>
                        <button onClick={() => setChangeTab('certificate')} className={
                            changeTab === 'certificate' ? 'btn-tabs active-tabs' : 'btn-tabs'
                        }><AiFillFolderOpen className="me-2" />Certificate</button>
                    </div>
                    {
                        (changeTab === 'experience') ?
                        <Experience />
                        :
                        <Certificates />
                    }
                </div>
            </Container>
        </>
    )
}

export default About;