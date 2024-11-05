import style from './dashboard.module.css';
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { LuFlag } from "react-icons/lu";
import ProgressCard from './progress';

export default function Dashboard({ name }) {
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
            <div className={style.contentcontainer}>
                <div className={style.leftcontainer}>
                    <div className={style.leftupperpart}>
                        <div className={style.studentsheader}>
                            <div style={{ display: 'flex' }}>
                                <div className={style.studentsspan}>
                                    <GrGroup size={25} />
                                </div>
                                <div className={style.total}>
                                    <p>Total Students</p>
                                    <p>1000</p>
                                </div>
                            </div>
                            <span style={{ color: 'rgb(241, 226, 169' }}>
                                <FaArrowRightLong size={30} />
                            </span>
                        </div>
                        <div className={style.heading}>
                            Statuses
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80, textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>Suspended</p>
                                <p className={style.data}>1234</p>
                            </div>
                            <div className={style.line}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>Struck off</p>
                                <p className={style.data}>1234</p>
                            </div>
                            <div className={style.line}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>Pending</p>
                                <p className={style.data}>1234</p>
                            </div>
                        </div>
                        <div className={style.heading}>
                            Attendance
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 60, textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>Present</p>
                                <p className={style.data}>90</p>
                            </div>
                            <div className={style.line}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>Absent</p>
                                <p className={style.data}>10</p>
                            </div>
                            <div className={style.line}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className={style.data}>On leave</p>
                                <p className={style.data}>8</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.leftlowerpart}>
                        <div className={style.lowerleftpart}>
                            <div className={style.studentsheader}>
                                <div style={{ display: 'flex' }}>
                                    <span className={style.bill}>
                                        <LiaFileInvoiceDollarSolid size={20} />
                                    </span>
                                    <div className={style.total}>
                                        <p>Total Fees</p>
                                        <p>Rs. 123456</p>
                                    </div>
                                </div>
                                <span style={{ color: 'rgb(55, 103, 204' }}>
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div>
                            <p className={style.amounttext}>Received amount</p>
                            <div className={style.percentageline}>
                                <div className={style.receivedline}>
                                    <div className={style.pendingline1}></div>
                                </div>
                            </div>
                            <p className={style.amounttext}>Received amount</p>
                            <div className={style.percentageline}>
                                <div className={style.receivedline}>
                                    <div className={style.pendingline2}></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.lowerrightpart}>
                            <div className={style.lowerright1}>
                                <span style={{ color: 'rgb(56, 183, 128)' }}>
                                    <GrGroup size={20} />
                                </span>
                                <div className={style.total}>
                                    <p>Total Teachers</p>
                                    <p>1000</p>
                                </div>
                                <div style={{ color: 'rgb(58, 185, 132)' }}>
                                    <FaArrowRightLong size={30} />
                                </div>
                            </div>
                            {/* <div className={style.lowerrightpart1}>
                                <div style={{ display: 'flex' }}>
                                    <span style={{ color: 'rgb(56, 183, 128)' }}>
                                        <GrGroup size={20} />
                                    </span>
                                    <div className={style.total}>
                                        <p>Total Students</p>
                                        <p>1000</p>
                                    </div>
                                </div>
                                <span style={{ color: 'rgb(241, 226, 169' }}>
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div> */}
                            <div className={style.lowerright2}>
                                <span style={{ color: 'rgb(223, 89, 80)' }}>
                                    <LuFlag size={20} />
                                </span>
                                <div className={style.total}>
                                    <p>Total Events</p>
                                    <p>1000</p>
                                </div>
                                <div style={{ color: 'rgb(223, 89, 80)' }}>
                                    <FaArrowRightLong size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.rightcontainer}>
                                <ProgressCard />
                </div>
            </div>
        </div>
    )
}

