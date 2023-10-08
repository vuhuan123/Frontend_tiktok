import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '../../../config';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '../../../components/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <h2 className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </h2>
    );
}

export default Sidebar;
