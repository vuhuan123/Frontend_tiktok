import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    large = false,
    small = false,
    primary = false,
    outline = false,
    rounded = false,
    lefticon,
    righticon,
    text,
    disable,
    children,
    className,
    ...passProps
}) {
    let Compo = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Compo = Link;
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className,
    });
    return (
        <Compo className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('iconLogin')}>{righticon}</span>}
        </Compo>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    large: PropTypes.bool,
    small: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    text: PropTypes.string,
    disable: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
