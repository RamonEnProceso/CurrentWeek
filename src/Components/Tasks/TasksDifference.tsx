import { Difference } from "../../models/Task";
import { getDifference } from "../../logic/getDates";

const DisplayDifference = ({date}:{date:string}) => {
    const objDifference : Difference = getDifference(date);

  if (objDifference.weeksDifference < 1) {
    if (objDifference.daysDifference < 2) {
      if (objDifference.difference < 0) {
        return "💀";
      }
      return <div>
        {objDifference.hoursDifference}
        <span>Horas</span>
      </div>
    }
    return <div>
        {objDifference.daysDifference}
        <span>Días</span>
      </div>
  }
  return <div>
        {objDifference.weeksDifference}
        <span>Semanas</span>
      </div>
};

export default DisplayDifference;