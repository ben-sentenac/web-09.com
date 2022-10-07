import { ReactComponent as Phone } from '../../images/phone.svg';
import {  ReactComponent as Mail } from '../../images/mail.svg';
import {  ReactComponent as Linkedin } from '../../images/link.svg';
import {  ReactComponent as Git } from '../../images/git.svg';

import './social-sidebar.styles.scss';


const SocialSidebar = ({ className }) => (
    <div className={`socials ${className ?? ''}`}>
        <div className="social-link">
            <Phone />
        </div>
        <div className="social-link">
            <Mail />
        </div>
        <div className="social-link">
            <Linkedin />
        </div>
        <div className="social-link">
            <Git />
        </div>

    </div>
);


export default SocialSidebar;