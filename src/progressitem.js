import style from './progress.module.css';
export default function ProgressItem({ grade, percentage, color }){
    return (
        <div className={style.progressitem}>
             <span className={style.grade}>{grade}</span>
             <div className={style.progressbarcontainer}>
        <div className={style.progressbar} style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      </div>
      <span className={style.percentage}>{percentage}%</span>
        </div>
    )
} 