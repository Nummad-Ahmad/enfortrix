import style from './homepage.module.css';
import Logo from './assets/logo1.png';
import { IoIosMenu } from "react-icons/io";
import { LuPieChart } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { GrGroup } from "react-icons/gr";
import { RiGroupLine } from "react-icons/ri";
import { PiListChecks } from "react-icons/pi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import Dashboard from './dashboard';
import ExamsPage from './examspage';
import DefaultPage from './default';
import toast from 'react-hot-toast';

export default function HomePage() {
    const [pageName, setName] = useState('Dashboard');
    const [isActive, setActive] = useState(false);
    const [toggleView, setToggle] = useState(false);
    const [listItem, setItem] = useState('Results');
    const [activeIndex, setSelectedIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            return 0;
        }
        return 0;
    });
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(activeIndex));
    }, [activeIndex]);
    function changeOption(value) {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setSelectedIndex(newValue);
        }

        if (value === 0) {
            setName('Dashboard');
            setActive(false);
        }
        else if (value === 1) {
            setName('Dashboard > Admin');
            setActive(false);
            toast.error('This page is under development');
        }
        else if (value === 2) {
            setName('Dashboard > Admissions');
            setActive(false);
            toast.error('This page is under development');
        }
        else if (value === 3) {
            setName('Dashboard > Academics');
            setActive(false);
            toast.error('This page is under development');
        }
        else if (value === 4) {
            setName('Dashboard > Exams Department');
            setActive(true);
        }
        else if (value === 5) {
            setName('Dashboard > Accounts Office');
            setActive(false);
            toast.error('This page is under development');
        }
        else if (value === 6) {
            setName('Dashboard > Accounts Office');
            setActive(false);
            toast.error('This page is under development');
        }        
        else if (value === 7) {
            setName('Dashboard > Hostel Management');
            setActive(false);
            toast.error('This page is under development');
        }        
        else if (value === 8) {
            setName('Dashboard > Transport Management');
            setActive(false);
            toast.error('This page is under development');
        }
    }
    return (
        <div className={style.homepage}>
            <div className={style.sidebar}>
                <div className={style.logodiv}>
                    <img src={Logo} height={40} alt=''></img>
                    <span style={{ cursor: 'pointer' }}>
                        <IoIosMenu size={20} />
                    </span>
                </div>
                <div className={style.options}>
                    <div onClick={() => changeOption(0)} className={activeIndex === 0 ? style.activeIndex : style.disableIndex}>
                        <LuPieChart style={activeIndex === 0 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Dashboard</p>
                    </div>
                    <div onClick={() => changeOption(1)} className={activeIndex === 1 ? style.activeIndex : style.disableIndex}>
                        <GrGroup style={activeIndex === 1 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Admin</p>
                    </div>
                    <div onClick={() => changeOption(2)} className={activeIndex === 2 ? style.activeIndex : style.disableIndex}>
                        <RiGroupLine style={activeIndex === 2 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Admissions</p>
                    </div>
                    <div onClick={() => changeOption(3)} className={activeIndex === 3 ? style.activeIndex : style.disableIndex}>
                        <PiListChecks style={activeIndex === 3 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Academics</p>
                    </div>
                    <div onClick={() => changeOption(4)} className={activeIndex === 4 ? style.activeIndex : style.disableIndex}>
                        <MdOutlineFeaturedPlayList style={activeIndex === 4 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Exams Department</p>
                        
                    </div>
                    {
                            isActive ? 
                            <div className={style.list}>
                            <p onClick={()=>{setToggle(false); setItem('Results'); toast.error('This page is under development. Only date sheet is available');}}>Results</p>
                            <p onClick={()=>{setToggle(false); setItem('Sitting Arrangement'); toast.error('This page is under development. Only date sheet is available');}}>Sitting Arrangement</p>
                            <p onClick={()=>{setToggle(false); setItem('Exam Attendance'); toast.error('This page is under development. Only date sheet is available ');}}>Exam Attendance</p>
                            <p onClick={()=>{setToggle(true); setItem('Date Sheet')}}>Date Sheet</p>
                            </div> : null
                        }
                    <div onClick={() => changeOption(5)} className={activeIndex === 5 ? style.activeIndex : style.disableIndex}>
                        <RxQuestionMarkCircled style={activeIndex === 5 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Accounts Office</p>
                    </div>
                    <div onClick={() => changeOption(6)} className={activeIndex === 6 ? style.activeIndex : style.disableIndex}>
                        <HiOutlineSpeakerWave style={activeIndex === 6 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Hostel Management</p>
                    </div>
                    <div onClick={() => changeOption(7)} className={activeIndex === 7 ? style.activeIndex : style.disableIndex}>
                        <IoCarSportOutline style={activeIndex === 7 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Transport Management</p>
                    </div>
                    <div onClick={() => changeOption(8)} className={activeIndex === 8 ? style.activeIndex : style.disableIndex}>
                        <BsGraphUp style={activeIndex === 8 ? { color: 'white' } : { color: 'black' }} size={20} />
                        <p>Report</p>
                    </div>
                </div>
            </div>
            {/* <div className={style.content}>
                <div className={style.header}>
                    <p>School Management System</p>
                    <div className={style.details}>
                        <p>Last Login: 19:00 11/05/2024</p>
                        <span className={style.icon}>
                            <IoIosNotifications size={20} color='black'/>
                        </span>
                        <span className={style.icon}>
                            <IoSettingsOutline size={20} color='black'/>
                        </span>
                    </div>
                </div>
                <p className={style.pagename}>{pageName}</p>
            </div> */}
            {
                activeIndex === 0 ?
            <Dashboard name={pageName}/> :
                activeIndex === 4 ?
            <ExamsPage name={pageName} toggleView={toggleView} listItem={listItem}/> :
            <DefaultPage name={pageName}/>
            }
        </div>
    );
}

