import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Helmet from "react-helmet";
import TagCloud from "TagCloud";
import "./Skills.css";

function Skills() {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            'HTML', 'CSS', 'JavaScript',
            'PHP', 'Laravel', 'ReactJS',
            'Bootstrap', 'MySQL', 'Git',
            'GitHub', 'NPM', 'Composer',
            'Visual Studio Code', 'Problem Solving',
            'Team Work', 'Positive', 'Communication'
        ];
        const options = {
            radius: 200
        };

        TagCloud(container, texts, options);
    }, []);

    return (
        <>
            <Helmet>
                <title>Syafwan - Skills</title>
            </Helmet>
            <Container fluid className="skills-wrapper">
                <div className="skills-left animate__animated animate__zoomIn">
                    <h3>Skills</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>03</strong></h4>
                </div>
                <div className="skills-right">
                    <div className="tagcloud"></div>
                </div>
            </Container>
        </>
    )
}

export default Skills;