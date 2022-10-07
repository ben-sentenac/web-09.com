import { createContext,useCallback,useMemo,useState } from "react";

export const LoaderContext = createContext();


export const LoaderContextProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false);

    const startLoading = useCallback(()=> setLoading(true),[setLoading]);
    const stopLoading = useCallback(()=> setLoading(false),[setLoading]);
    
    const value = useMemo(() =>({loading,startLoading,stopLoading}),[loading,startLoading,stopLoading]);
    return (
        <LoaderContext.Provider value={ value }>
            { children }
        </LoaderContext.Provider>
    );
};