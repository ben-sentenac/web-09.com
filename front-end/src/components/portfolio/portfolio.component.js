import { useContext } from "react";
import { ProjectsContext } from "../../context/projects.context";
import Projects from "../projects/project-list.component";
import SectionTitle from "../section-title/section-title.component";
import './portfolio.styles.scss';


const Portfolio = () => {
    const { projects,loading } = useContext(ProjectsContext);
    console.log(loading);    
    return (
        <section id="portfolio" className="portfolio-container">
                <SectionTitle title="Portfolio" />
                {loading ? <p>loading data</p> : <Projects projects={projects} />}
        </section>
    )
};

export default Portfolio;