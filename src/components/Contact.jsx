import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "react-bootstrap";
import "./Contact.css";

function Contact() {
    return (
        <>
            <Container className="d-flex justify-content-between">
                <div className="contact-left text-center d-flex justify-content-center align-items-center flex-column">
                    <h3>Contact</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>05</strong></h4>
                </div>
                <div className="contact-right d-flex justify-content-center align-items-center flex-column">
                    <div className="row">
                        <div className="col">
                            <div className="email-wrapper">
                                <h3><AiOutlineMail />&nbsp;&nbsp;Email</h3>
                                <p>muhammadsyafwan04@gmail.com</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="linkedin-wrapper">
                                <h3><AiFillLinkedin />&nbsp;&nbsp;Linkedin</h3>
                                <p>Muhammad Syafwan Ardiansyah</p>
                                <a href="https://www.linkedin.com/in/muhammad-syafwan-ardiansyah-843067214/" target="_blank" rel="noreferrer" className="btn-direct">Visit&nbsp;&nbsp;<AiOutlineArrowRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="github-wrapper">
                                <h3><AiFillGithub />&nbsp;&nbsp;GitHub</h3>
                                <p>Syafwan000</p>
                                <a href="https://github.com/Syafwan000" target="_blank" rel="noreferrer" className="btn-direct">Visit&nbsp;&nbsp;<AiOutlineArrowRight /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="instagram-wrapper">
                                <h3><AiFillInstagram />&nbsp;&nbsp;Instagram</h3>
                                <p>syafffwan</p>
                                <a href="https://www.instagram.com/syafffwan/" target="_blank" rel="noreferrer" className="btn-direct">Visit&nbsp;&nbsp;<AiOutlineArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact;