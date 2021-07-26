import cNames from 'classnames';
import css from './IconButton.module.scss';

export default function IconButton({ children, className, ...rest }) {
    return (
        <button
            type="button"
            className={cNames(css.button, className)}
            {...rest}
        >
            {children}
        </button>
    );
}
