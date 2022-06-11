import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import Project1 from '../assets/img/Project1.png';
import Project2 from '../assets/img/Project2.png';
import Project3 from '../assets/img/Project3.png';
import Project4 from '../assets/img/Project4.png';
import Project5 from '../assets/img/Project5.png';
import Project6 from '../assets/img/Project6.png';
import Project7 from '../assets/img/Project7.png';
import Project8 from '../assets/img/Project8.png';
import Project9 from '../assets/img/Project9.png';
import Project10 from '../assets/img/Project10.png';
import Project11 from '../assets/img/Project11.png';
import Project12 from '../assets/img/Project12.png';
import Project13 from '../assets/img/Project13.png';
import Helmet from 'react-helmet';
import './Projects.css';

function Projects() {
    return (
        <>
            <Helmet>
                <title>Syafwan - Projects</title>
            </Helmet>
            <Container fluid className="projects-container">
                <div className="projects-title animate__animated animate__zoomIn">
                    <h3>Projects</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>04</strong></h4>
                </div>
                <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
                    <div className="row">
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project1} alt="Project 1" loading="lazy" />
                                <div className="project-content">
                                    <h3>TeyMii</h3>
                                    <p>TeyMii adalah web yang menghubungkan dengan teman/sahabat/orang lain, melalui pesan secara rahasia tanpa diketahui siapa pengirimnya</p>
                                    <a className="btn-website" href="http://teymii.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/teymii" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Livewire</span>
                                        <span id="tech-stack">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project2} alt="Project 2" loading="lazy" />
                                <div className="project-content">
                                    <h3>Digital Wedding Invitation - NoShi</h3>
                                    <p>Undangan pernikahan digital dengan dilengkapi fitur kehadiran menggunakan QR Code</p>
                                    <a className="btn-github" href="https://github.com/Syafwan000/noshi-wedding-invitation" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Livewire</span>
                                        <span id="tech-stack">Alpine JS</span>
                                        <p></p>
                                        <span id="tech-stack">Bootstrap</span>
                                        <span id="tech-stack">QR Library</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project3} alt="Project 3" loading="lazy" />
                                <div className="project-content">
                                    <h3>BisaNgopi</h3>
                                    <p>BisaNgopi merupakan web aplikasi kasir online yang memiliki 3 role yaitu Admin, Manager, dan Cashier. Info lengkap tentang fitur lainnya bisa dilihat di repository github</p>
                                    <a className="btn-website" href="http://bisa-ngopi.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/bisa-ngopi" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Livewire</span>
                                        <span id="tech-stack">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project4} alt="Project 4" loading="lazy" />
                                <div className="project-content">
                                    <h3>GuessYourCrush</h3>
                                    <p>Web ini merupakan sebuah permainan tebak tebakan, dimana web ini dapat menebak nama teman, crush kamu atau nama yang sedang kamu pikirkan</p>
                                    <a className="btn-website" href="https://guessyourcrush.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/guess-your-crush" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React JS</span>
                                        <span id="tech-stack">React Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project5} alt="Project 5" loading="lazy" />
                                <div className="project-content">
                                    <h3>Qur'an Digital</h3>
                                    <p>Proyek ini merupakan qur'an digital (API) yang dapat diakses secara online, bisa diakses dimana saja asal terhubung dengan koneksi internet, dan simpel</p>
                                    <a className="btn-website" href="https://al-quran-digital.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/quran-digital" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React JS</span>
                                        <span id="tech-stack">React Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project6} alt="Project 6" loading="lazy" />
                                <div className="project-content">
                                    <h3>Mathducation</h3>
                                    <p>Web ini adalah web kalkulator, menghitung diskon, menentukan hasil pangkat</p>
                                    <a className="btn-website" href="https://mathducation.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/mathducation" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React JS</span>
                                        <span id="tech-stack">React Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project7} alt="Project 7" loading="lazy" />
                                <div className="project-content">
                                    <h3>Profile Diri</h3>
                                    <p>Proyek profile diri yang berisikan mengenai tentang dan skill, menyerupai portfolio tetapi berbasis mobile</p>
                                    <a className="btn-github" href="https://github.com/Syafwan000/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Flutter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project8} alt="Project 8" loading="lazy" />
                                <div className="project-content">
                                    <h3>WikAbsensi</h3>
                                    <p>Web ini merupakan absensi online bagi para peserta didik, terdapat sistem kehadiran dan juga rombel dan rayon</p>
                                    <a className="btn-website" href="http://wikabsensi.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/wikabsensi" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project9} alt="Project 9" loading="lazy" />
                                <div className="project-content">
                                    <h3>Cafekinton</h3>
                                    <p>Web ini adalah pemesanan menu-menu cafe secara online. proyek ini dikerjakan oleh 3 orang</p>
                                    <a className="btn-website" href="http://cafekinton.rf.gd/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/web-cafekinton" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">PHP</span>
                                        <span id="tech-stack">CSS</span>
                                        <span id="tech-stack">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project10} alt="Project 10" loading="lazy" />
                                <div className="project-content">
                                    <h3>PopCat Click</h3>
                                    <p>Web permainan klik sederhana yang bertema pop cat, permainan ini cukup sederhana hanyak mengspam klik sampai skor yang ingin dicapai</p>
                                    <a className="btn-website" href="https://syafwan000.github.io/popcat-click/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/popcat-click" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">TailwindCSS</span>
                                        <span id="tech-stack">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project11} alt="Project 11" loading="lazy" />
                                <div className="project-content">
                                    <h3>MIP Storage</h3>
                                    <p>Proyek pengelolaan barang-barang toko. proyek ini ditujukan kepada para pemilik toko</p>
                                    <a className="btn-github" href="https://github.com/Syafwan000/mip-storage" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project12} alt="Project 12" loading="lazy" />
                                <div className="project-content">
                                    <h3>SapuLator</h3>
                                    <p>Proyek ini merupakan proyek web pertama kali yang saya buat, web ini berisikan tool tool perhitungan</p>
                                    <a className="btn-website" href="http://sapulator.epizy.com/index.php" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <a className="btn-github" href="https://github.com/Syafwan000/web-sapulator" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">PHP</span>
                                        <span id="tech-stack">CSS</span>
                                        <span id="tech-stack">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col project-col">
                                <div className="project-card">
                                    <img src={Project13} alt="Project 13" loading="lazy" />
                                    <div className="project-content">
                                        <h3>Covidteria</h3>
                                        <p>Proyek ini adalah web kuesioner mengenai Covid-19, dan juga menyajikan data sembuh, terpapar, dan kematian akibat Covid-19 (API)</p>
                                        <a className="btn-website" href="http://covidteria.rf.gd/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                        <a className="btn-github" href="https://github.com/Syafwan000/web-covidteria" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                        <div className="d-block tech-stack-wrapper">
                                            <span id="tech-stack">PHP</span>
                                            <span id="tech-stack">Bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Projects;