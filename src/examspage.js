import style from './examspage.module.css';
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPyramid } from "react-icons/tb";
import ClassList from './classlist';

export default function ExamsPage({ name, toggleView, listItem }) {
    const data = [
        {
            day: 'Mon',
            date: 1,
        },
        {
            day: 'Tues',
            date: 2,
        },
        {
            day: 'Wed',
            date: 3,
        },
        {
            day: 'Thurs',
            date: 4,
        },
        {
            day: 'Fri',
            date: 5,
        },
        {
            day: 'Sat',
            date: 6,
        },
        {
            day: 'Sun',
            date: 7,
        },
        {
            day: 'Mon',
            date: 8,
        },
        {
            day: 'Tues',
            date: 9,
        },
        {
            day: 'Wed',
            date: 10,
        },
        {
            day: 'Thurs',
            date: 11,
        },
        {
            day: 'Fri',
            date: 12,
        },
    ];
    const time = [
        '7:00 am',
        '8:00 am',
        '9:00 am',
        '10:00 am',
        '11:00 am',
        '12:00 pm',
        '1:00 pm',
        '2:00 pm',
        '3:00 pm',
        '4:00 pm',
        '5:00 pm',
        '6:00 pm',
        '7:00 pm',
    ]
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
            <p className={style.breadcrumb}>{name + ' > ' + listItem}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: 10 }}>
                <p className={style.pagename}>{listItem}</p>
                <div style={{ display: 'flex', gap: 20 }}>
                    <div className={style.spanClass}>
                        <TbPyramid size={20} />
                    </div>
                    <button className={style.btn}>
                        + Add New
                    </button>
                </div>
            </div>
            {
                toggleView ?
                    <div className={style.datacontainer}>
                        <ClassList />
                        <div className={style.datesheet}>
                            {/* <div className={style.examdetails}> */}
                            <div className={style.daysdiv}>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div className={index === 2 ? style.currentday : index === 4 ? style.selectedday : style.days}>
                                                <p className={style.date}>{item.date}</p>
                                                <p className={style.day}>{item.day}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className={style.time}>
                                    {
                                        time.map((item, index) => {
                                            return (
                                                <p style={{ margin: 0 }}>{item}</p>
                                            );
                                        })
                                    }
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div className={style.papersdiv1}>
                                        <div className={style.paper1}>
                                            <p className={style.examName1}>English</p>
                                            <p className={style.room}>Room: A1</p>
                                        </div>
                                        <div className={style.paper1}>
                                            <p className={style.examName1}>Physics</p>
                                            <p className={style.room}>Room: A1</p>
                                        </div>
                                    </div>
                                    <div className={style.papersdiv1}>
                                        <div className={style.paper2}>
                                            <p className={style.examName2}>English</p>
                                            <p className={style.room}>Room: A1</p>
                                        </div>
                                    </div>
                                    <div className={style.papersdiv1}>
                                        <div className={style.paper3}>
                                            <p className={style.examName3}>Biology</p>
                                            <p className={style.room}>Room: A1</p>
                                        </div>
                                        <div className={style.paper3}>
                                            <p className={style.examName3}>Physics</p>
                                            <p className={style.room}>Room: A1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    null
            }
        </div>
    );
}