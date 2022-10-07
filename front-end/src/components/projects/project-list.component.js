import { useState,useEffect } from 'react';
import ProjectModalBox from '../project-modal/project-modal.component';

import './projects.styles.scss';

const Project = ({ project }) => {
    const [ visible, setVisible] = useState(false);
    
    const handleClick = (e) => {
        setVisible(!visible);
    }
    useEffect(() => {
        visible && document.body.classList.add('scroll-hidden');
        return () => {
          document.body.classList.remove('scroll-hidden');
        }
      }, [visible])
    return (
        <>
            <div onClick= { handleClick }  className="project-container box box-transform" >
                <div className="background-image" style={{ backgroundImage: `url(${project.image})` }} ></div>
                <div className="project-body-container">
                    <h3 className="project-title">{project.name}</h3>
                    <p>
                        {project.skills}
                    </p>
                </div>
            </div>
           <ProjectModalBox clickHandler={ handleClick } project={ project } visible={ visible } />
        </>
    );
}

const Projects = ({ projects }) => {
    return (
        <div className="projects-list">
            {
                projects.map(project => <Project key={project.id} project={project} />)
            }
        </div>
    );
}

export default Projects;