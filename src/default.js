import style from './default.module.css';
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function DefaultPage({name}) {
    return (
        <div className={style.content}>
            <div className={style.header}>
                <p>School Management System</p>
                <div className={style.details}>
                    <p>Last Login: 19:00 11/05/2024</p>
                    <span className={style.icon}>
                        <IoIosNotifications size={20} color='black' />
                    </span>
                    <span className={style.icon}>
                        <IoSettingsOutline size={20} color='black' />
                    </span>
                </div>
            </div>
            <p className={style.pagename}>{name}</p>
        </div>
    );
}