import React from 'react';
import style from './classlist.module.css';

const classData = [
  { grade: '9th', section: 'Quaid e Azam', highlighted: true },
  { grade: '10th', section: 'Allama Iqbal', highlighted: false },
  { grade: '11th', section: 'Zulfiqar Bhutto', highlighted: false },
  { grade: '12th', section: 'Asif Zardari', highlighted: false },
  { grade: '8th', section: 'John Ailea', highlighted: false },
  { grade: '7th', section: 'Kareena Kapoor', highlighted: false },
];

const ClassList = () => {
  return (
    <div className={style.classlist}>
      <div className={style.listheader}>
        <h4>Classes</h4>
        <span className={style.classcount}>10</span>
      </div>
      <div className={style.classitems}>
        {classData.map((item, index) => (
          <ClassItem
            key={index}
            grade={item.grade}
            section={item.section}
            highlighted={item.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

const ClassItem = ({ grade, section, highlighted }) => {
  return (
    <div className={`${style.classitem} ${highlighted ? style.highlighted : ''}`}>
      <div className={style.box}></div>
      <div className={style.classdetails}>
        <span className={style.classgrade}>{grade}</span>
        <span className={style.classsection}>Section: {section}</span>
      </div>
    </div>
  );
};

export default ClassList;




