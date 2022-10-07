import { prestations } from '../../static-data/prestations';
import SectionTitle from '../section-title/section-title.component';
import './prestations.styles.scss';

export const Prices = () => {
    return (
        <section id="tarifs" className="prices-container">
        <SectionTitle title="Tarifs" />
        <PrestationList prestations={prestations} />
    </section>
    )
}

export const PrestationList = ({ prestations }) => {
    return (
        <div className="prestations">
            {
                prestations.map(prestation => <Prestation key={prestation.id} {...prestation} /> )
            }
        </div>
    );
};


export const Prestation = ({ id,name,techno,price }) => {

    return(
        <div className={`prestation div${ id } box box-transform`}>
            <h3>{ name }</h3>
            <div>{ techno }</div>
            <div className='prestation-price'>{ price }</div>
        </div>
    );
};