import { AiFillFileText } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import avatarAnimation from "../assets/img/Avatar.png";
import avatarReal from "../assets/img/Avatar2.png";
import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import Helmet from "react-helmet";
import "./Home.css";

function Home() {
    const [image, setImage] = useState(avatarAnimation);
    
    function setAvatarReal() {
        setImage(avatarReal);
    }

    function setAvatarAnimation() {
        setImage(avatarAnimation);
    }

    return (
        <>
            <Helmet>
                <title>Muhammad Syafwan Ardiansyah</title>
            </Helmet>
            <Container fluid className="home-wrapper">
                <div className="home-left animate__animated animate__fadeInLeft">
                    <h3>Hi there <img width="35" src={Hi} alt="Hi" />, my name is</h3>
                    <h2><span className="name-hover">Muhammad</span><br /><span className="name-hover">Syafwan</span><br /><span className="name-hover">Ardiansyah</span></h2>
                    <Link className="btn-download text-center" to={CVDoc} target="_blank" rel="noreferrer" download><AiFillFileText />&nbsp;&nbsp;Download CV</Link>
                </div>
                <div className="home-right animate__animated animate__fadeIn animate__slower">
                    <img className="home-image" src={image} onMouseEnter={setAvatarReal} onMouseLeave={setAvatarAnimation} alt="Avatar" />
                </div>
            </Container>
        </>
    )
}

export default Home;