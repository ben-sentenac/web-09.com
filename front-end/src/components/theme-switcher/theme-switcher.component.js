import './theme-switcher.styles.scss';

export const ThemeSwitcher = ({ clickHandler,children }) => {

    return (
        <button onClick={ clickHandler } className="button">
            { children }
        </button>
    );
};