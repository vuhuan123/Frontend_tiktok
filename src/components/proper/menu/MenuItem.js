import PropTypes from 'prop-types';
import Button from '../../Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, spreate }) {
    const classes = cx('menu-item', {
        spreate: data.spreate,
    });
    return (
        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
