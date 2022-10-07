import { createContext,useContext,useEffect,useState } from "react";
import { LoaderContext } from "./loader.context";
import { getProjectDocument } from "../utils/firebase.utils";
export const ProjectsContext = createContext();


export const ProjectsContextProvider = ({ children }) => {

    const [projects, setProjects] = useState([]);


    const { loading, startLoading, stopLoading } = useContext(LoaderContext);
    const value = { projects,setProjects,loading }

    useEffect(() => {
        startLoading();

        const fetchData = async () => {

            const projects = [];
            const documents = await getProjectDocument();
            documents.forEach(el => projects.push(el.data()));
            setProjects(projects);
            stopLoading();

        }
        const timeout = setTimeout(() => {
            fetchData();
        }, 1000);


        return () => {
            clearTimeout(timeout);
            stopLoading();
        };

    }, [startLoading, stopLoading]);
   
    return (
        <ProjectsContext.Provider value={ value }>
            { children }
        </ProjectsContext.Provider>
    );
};