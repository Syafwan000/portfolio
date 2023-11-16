import { AiFillFileText } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageProfile from "../assets/img/Photo.png";
import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import Helmet from "react-helmet";
import "./Home.css";

function Home() {
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
                    <img className="home-image shadow-1" src={ImageProfile} alt="Avatar" />
                    <img className="home-image shadow-2" src={ImageProfile} alt="Avatar" />
                    <img className="home-image shadow-3" src={ImageProfile} alt="Avatar" />
                </div>
            </Container>
        </>
    )
}

export default Home;