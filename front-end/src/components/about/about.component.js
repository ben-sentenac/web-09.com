import SectionTitle from '../section-title/section-title.component';
import { ReactComponent as Portrait } from '../../images/ben.svg';
import './about.styles.scss';
const About = () => {
    return (
        <section id="about" className="about-container">
            <div className="about-right">
            <SectionTitle title="About" />
                <p className="introducing">
                    Hello, Je suis Benoit Sentenac-Réou mais même ma maman m'appelle ben!
                    Je suis développeur web et je suis là pour vous aider à réaliser vos projets!
                    passioneé par le code et les défis je suis toujours curieux d'apprendre de nouvelles choses...
                </p>
                <div className="resume">
                    <div className="link">
                        <a href="/#">Curriculum Vitae</a>
                    </div>
                </div>
            </div>
            <div className="about-left box-transform">
                <Portrait className="portrait" />
            </div>
        </section>
    );
};


export default About;