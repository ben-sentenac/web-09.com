import { Outlet } from 'react-router-dom';
import SiteBranding from '../../components/site-branding/site-branding.component';
import About from '../../components/about/about.component';
import Portfolio from '../../components/portfolio/portfolio.component';
import { Prices } from '../../components/prestations/prestations.component';
import Contact from '../../components/contact/contact.component';


const Home = (props) => {
    return (
        <div id="home" className="home-container">
            <SiteBranding />
            <About />
            <Portfolio/>
            <Prices />
            <Contact/>
            <Outlet/>
        </div>
    );
}

export default Home;