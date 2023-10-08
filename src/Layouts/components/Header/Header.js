import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../config';

import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faFileVideo,
    faMoon,
    faUser,
    faBookmark,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../components/Buttons';
import Menu from '../../../components/proper/menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/icons';
import Image from '../../../components/image';
import Input from '../Search';
import { Link } from 'react-router-dom';

const handleOnchange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            break;

        default:
            break;
    }
};

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faFileVideo} />,
        title: 'Trung tâm nhà sáng tạo Live',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'VietNamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feelback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phí tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const currentUser = false;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/vuu',
        },

        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu Thich',
            to: '/yeuthich',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: 'caidat',
        },

        ...MENU_ITEM,

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: 'caidat',

            spreate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo.default} />
                </Link>
                <Input />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" delay={[0, 100]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" delay={[0, 100]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Mailbox" delay={[0, 100]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('Inbox-icon')} />
                                    <span className={cx('count-mail')}>7</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Up Load</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleOnchange}>
                        {currentUser ? (
                            <Image
                                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                className={cx('img-user')}
                                alt="Name"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
