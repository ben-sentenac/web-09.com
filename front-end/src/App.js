import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.routes';
import { ThemeContext } from './context/theme.context';

import './App.scss';
import SocialSidebar from './components/social-sidebar/social-sidebar.component';
import Loader from './components/loader/loader.component';
import Navigation from './components/navigation/navigation.component';


const App = () => {

  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    const timeId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
      setLoading(false);
    }
  }, [setLoading]);

  return (
    <>
      {loading ? <Loader /> : (<div className={`site-container ${theme}`}>
        <Routes>
          <Route path="/" element={< Navigation />}>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
        
      </div>)}

      <SocialSidebar className="social-fixed-left" />
    </>
  );
}

export default App;
