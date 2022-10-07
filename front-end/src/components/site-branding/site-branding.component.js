import './site-branding.styles.scss';
import { ReactComponent as PhpIcon } from '../../images/php.svg';
import { ReactComponent as JsIcon } from '../../images/js.svg';
import { ReactComponent as MysqlIcon } from '../../images/mysql.svg';
import { ReactComponent as ReactIcon } from '../../images/reactjs.svg';
import { ReactComponent as LaravelIcon } from '../../images/laravel.svg';
import { ReactComponent as NodejsIcon } from '../../images/nodejs.svg';
import { ReactComponent as WordpressIcon } from '../../images/wordpress.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component';

const SiteBranding = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
       setTheme(theme === 'theme-light' ? 'theme-dark':'theme-light');
    }
    return (
        <section className="site-branding">
           <ThemeSwitcher clickHandler={ switchTheme }>switch theme </ThemeSwitcher>
            <div className="intro-text">
                <h1 className="site-title t-shadow-3d">{`{ Benoit Sentenac-Réou }`}</h1>
                <h2 className="branding-title">Création de site internet</h2>
                <h3 className="t-shadow-3d">Développeur Web freelance</h3>
            </div>
            <div className="skills-icon">
                <PhpIcon/>
                <WordpressIcon/>
                <LaravelIcon/>
                <JsIcon/>
                <ReactIcon/>
                <NodejsIcon/>  
                <MysqlIcon/>
            </div>
        </section>
    );
};


export default SiteBranding;