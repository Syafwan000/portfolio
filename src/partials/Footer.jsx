import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="d-flex justify-content-between px-4">
                <div className="foot-left d-flex">
                    <p>Muhammad Syafwan Ardiansyah &copy; 2022</p>
                </div>
                <div className="foot-right d-flex">
                    <a href="https://github.com/Syafwan000" target="_blank" rel="noreferrer">
                        <AiFillGithub className="foot-icon" />&nbsp;&nbsp;GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-syafwan-ardiansyah-843067214/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin className="foot-icon" />&nbsp;&nbsp;Linkedin
                    </a>
                    <a href="https://www.instagram.com/syafffwan/" target="_blank" rel="noreferrer">
                        <AiFillInstagram className="foot-icon" />&nbsp;&nbsp;Instagram
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer;