import { Difference } from "../../models/Task";
import { getDifference } from "../../logic/getDates";
import style from "./Tasks.module.css"

const DisplayDifference = ({date}:{date:string}) => {
    const objDifference : Difference = getDifference(date);

  if (objDifference.weeksDifference < 2) {
    if (objDifference.daysDifference < 2) {
      if (objDifference.difference < 0) {
        return <div className={`${style.taskExpiredIcon} ${style.taskNumberContainer}`}>💀
        </div>;
      }
      return <div className={style.taskNumberContainer}>
        <span className={style.taskNumber}>{objDifference.hoursDifference}</span>
        <span className={style.taskNumberType}>Horas</span>
      </div>
    }
    return <div className={style.taskNumberContainer}>
        <span className={style.taskNumber}>{objDifference.daysDifference}</span>
        <span className={style.taskNumberType}>Días</span>
      </div>
  }
  return <div className={style.taskNumberContainer}>
        <span className={style.taskNumber}>{objDifference.weeksDifference}</span>
        <span className={style.taskNumberType}>Semanas</span>
      </div>
};

export default DisplayDifference;