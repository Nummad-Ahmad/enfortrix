import React from 'react';
import style from './progress.module.css';
import ProgressItem from './progressitem';
import { FaArrowRightLong } from "react-icons/fa6";
const progressData = [
  { grade: '10th', percentage: 80, color: '#4CAF50' },
  { grade: '9th', percentage: 80, color: '#4CAF50' },
  { grade: '8th', percentage: 80, color: '#4CAF50' },
  { grade: '7th', percentage: 40, color: '#FFB300' },
  { grade: '6th', percentage: 70, color: '#FFB300' },
  { grade: '5th', percentage: 50, color: '#FFB300' },
  { grade: '4th', percentage: 60, color: '#FFB300' },
  { grade: '3th', percentage: 30, color: '#FFB300' },
  { grade: '2nd', percentage: 10, color: '#FF5252' },
  { grade: '1st', percentage: 20, color: '#FF5252' },
];

const ProgressCard = () => {
  return (
    <div className={style.progresscard}>
      <div className={style.header}>
        <div className={style.icon}>
          <img src="https://img.icons8.com/ios-filled/50/4caf50/task.png" alt="icon" />
        </div>
        <div>
          <p className={style.exampercentage}>Exams Total Percentage</p>
          <p className={style.totalpercentage}>80%</p>
        </div>
        <div className={style.arrow}>
          <FaArrowRightLong size={30}/>
        </div>
      </div>
      <div className={style.progresslist}>
        {progressData.map((item, index) => (
          <ProgressItem key={index} grade={item.grade} percentage={item.percentage} color={item.color} />
        ))}
      </div>
    </div>
  );
};


export default ProgressCard;