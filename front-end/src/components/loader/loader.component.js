import SectionTitle from '../section-title/section-title.component';
import './loader.styles.scss';

const Loader = () => {
    return (
        <div className="loader-container">
            <SectionTitle title="Loading data..." />
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;