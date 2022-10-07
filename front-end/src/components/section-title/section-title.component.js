import './section-title.styles.scss';



const SectionTitle = ({ title }) => {
    return (
        <h2 className="section-title" data-text={ title }>{ title}</h2>
        );
};


export default SectionTitle;