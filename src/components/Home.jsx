import { Container } from "react-bootstrap";
import { AiFillFileText } from "react-icons/ai";
import { useState } from "react";
import avatarAnimation from "../assets/img/Avatar.png";
import avatarReal from "../assets/img/Avatar2.png";
import Hi from "../assets/img/Hi.gif";
import CV from "../assets/download/CV.pdf";
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
            <Container className="d-flex justify-content-between">
                <div className="home-left d-flex justify-content-center  flex-column">
                    <h3>Hi there <img width="35" src={Hi} alt="Hi" />, my name is</h3>
                    <h2><span className="name-hover">Muhammad</span><br /><span className="name-hover">Syafwan</span><br /><span className="name-hover">Ardiansyah</span></h2>
                    <a className="btn-download text-center" href={CV} target="_blank" rel="noreferrer" download><AiFillFileText />&nbsp;&nbsp;Download CV</a>
                </div>
                <div className="home-right d-flex align-items-center">
                    <img className="home-image" src={image} onMouseEnter={setAvatarReal} onMouseLeave={setAvatarAnimation} alt="Avatar" />
                </div>
            </Container>
        </>
    )
}

export default Home;